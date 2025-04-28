import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import StoryNode, { StoryNodeInner } from './StoryNode'
import type { StoryNodeInnerProps } from './StoryNode'
import { StoryNodeDocument } from '@/types/prismic'
import { RichTextField } from '@prismicio/client'

// Mock next/image since it's not available in the test environment
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // Using img tag in tests is fine as we're not actually rendering in browser
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}))

// Mock PrismicRichText component
jest.mock('@prismicio/react', () => ({
  PrismicRichText: ({ field }: { field: RichTextField }) => <div data-testid="rich-text">{field[0] && 'text' in field[0] ? field[0].text : ''}</div>,
}))

describe('StoryNodeInner', () => {
  const mockProps: StoryNodeInnerProps = {
    title: 'Test Story',
    banner: {
      url: 'https://example.com/image.jpg',
      alt: 'Test image',
    },
    storyText: [{ type: 'paragraph', text: 'Test story content', spans: [] }] as unknown as RichTextField,
    options: [
      {
        label: 'Option 1',
        target: { uid: 'page-1' },
      },
      {
        label: 'Option 2',
        target: { uid: 'page-2' },
      },
    ],
  }

  it('renders all components correctly', () => {
    render(<StoryNodeInner {...mockProps} />)
    
    // Check title
    expect(screen.getByText('Test Story')).toBeInTheDocument()
    
    // Check image
    const image = screen.getByAltText('Test image')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg')
    
    // Check story content
    expect(screen.getByTestId('rich-text')).toHaveTextContent('Test story content')
    
    // Check options
    expect(screen.getByText('Option 1')).toHaveAttribute('href', '/story/page-1')
    expect(screen.getByText('Option 2')).toHaveAttribute('href', '/story/page-2')
  })

  it('handles missing banner', () => {
    render(
      <StoryNodeInner
        {...mockProps}
        banner={{ url: '' }}
      />
    )
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('handles missing title', () => {
    render(
      <StoryNodeInner
        {...mockProps}
        title={null}
      />
    )
    expect(screen.getByText('Untitled')).toBeInTheDocument()
  })

  it('handles empty options', () => {
    render(
      <StoryNodeInner
        {...mockProps}
        options={[]}
      />
    )
    expect(screen.queryByText('Choose your path:')).not.toBeInTheDocument()
  })
})

describe('StoryNode', () => {
  const mockPage = {
    id: 'test-id',
    uid: 'test-uid',
    url: '/test',
    type: 'story_node',
    href: '',
    tags: [],
    first_publication_date: '2025-01-01T00:00:00+0000',
    last_publication_date: '2025-01-01T00:00:00+0000',
    lang: 'en-us',
    alternate_languages: [],
    data: {
      title: 'Test Story',
      banner: {
        url: 'https://example.com/image.jpg',
        alt: 'Test image',
      },
      storyText: [{ type: 'paragraph', text: 'Test story content', spans: [] }] as unknown as RichTextField,
      options: [
        {
          label: 'Option 1',
          target: { uid: 'page-1' },
        },
      ],
    },
  } as unknown as StoryNodeDocument

  it('transforms data correctly', () => {
    render(<StoryNode page={mockPage} />)
    
    expect(screen.getByText('Test Story')).toBeInTheDocument()
    expect(screen.getByAltText('Test image')).toBeInTheDocument()
    expect(screen.getByTestId('rich-text')).toHaveTextContent('Test story content')
    expect(screen.getByText('Option 1')).toHaveAttribute('href', '/story/page-1')
  })

  it('handles null option target', () => {
    const pageWithNullTarget = {
      ...mockPage,
      data: {
        ...mockPage.data,
        options: [
          {
            label: 'Option 1',
            target: null,
          } as unknown as StoryNodeDocument['data']['options'][number],
        ] as [StoryNodeDocument['data']['options'][number], ...StoryNodeDocument['data']['options'][number][]],
      },
    }
    render(<StoryNode page={pageWithNullTarget} />)
    
    // The link should still render with the label, even if target is null
    expect(screen.getByText('Option 1')).toBeInTheDocument()
  })
})
