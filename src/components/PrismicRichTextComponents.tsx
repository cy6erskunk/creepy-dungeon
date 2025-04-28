import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { JSXMapSerializer } from '@prismicio/react'

// Custom components for the PrismicRichText component
export const richTextComponents: JSXMapSerializer = {
  paragraph: ({ children }) => <p className="mb-4">{children}</p>,
  heading1: ({ children }) => <h1 className="text-3xl font-bold mb-4 mt-6">{children}</h1>,
  heading2: ({ children }) => <h2 className="text-2xl font-bold mb-3 mt-5">{children}</h2>,
  heading3: ({ children }) => <h3 className="text-xl font-bold mb-2 mt-4">{children}</h3>,
  heading4: ({ children }) => <h4 className="text-lg font-bold mb-2 mt-4">{children}</h4>,
  heading5: ({ children }) => <h5 className="text-base font-bold mb-2 mt-3">{children}</h5>,
  heading6: ({ children }) => <h6 className="text-sm font-bold mb-2 mt-3">{children}</h6>,
  strong: ({ children }) => <strong className="font-bold">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  listItem: ({ children }) => <li className="ml-6 mb-1">{children}</li>,
  oListItem: ({ children }) => <li className="ml-6 mb-1 list-decimal">{children}</li>,
  list: ({ children }) => <ul className="list-disc mb-4">{children}</ul>,
  oList: ({ children }) => <ol className="list-decimal mb-4">{children}</ol>,
  preformatted: ({ node }) => (
    <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
      <code>{node.text}</code>
    </pre>
  ),
  image: ({ node }) => {
    return (
      <div className="mb-4">
        <Image
          src={node.url}
          alt={node.alt || ''}
          width={node.dimensions.width}
          height={node.dimensions.height}
          className="rounded"
        />
      </div>
    )
  },
  hyperlink: ({ node, children }) => {
    // Handle internal links (Prismic documents)
    if (node.data.link_type === 'Document') {
      return (
        <Link href={`/${node.data.type}/${node.data.uid}`} className="text-blue-600 hover:underline">
          {children}
        </Link>
      )
    }
    
    // External links
    return (
      <a 
        href={node.data.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {children}
      </a>
    )
  },
}