import Link from 'next/link'
import Image from 'next/image'
import { PrismicRichText } from '@prismicio/react'
import { richTextComponents } from './PrismicRichTextComponents'
import { StoryNodeDocument } from '@/types/prismic'
import { RichTextField } from '@prismicio/client'

interface StoryNodeProps {
  page: StoryNodeDocument;
}
interface StoryNodeBanner {
    url: string;
    alt?: string;
};
interface StoryNodeInnerProps {
    title: string;
    banner: StoryNodeBanner
    storyText: RichTextField;
    options: {
      label: string;
      target: {
        uid: string;
      } | null;
    }[];
}

export function StoryNodeInner({ title, banner, storyText, options }: StoryNodeInnerProps) {
    return (
      <div className="container mx-auto p-4 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        
        {/* Render the banner image */}
        {banner.url && (
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
            <Image
              src={banner.url}
              alt={banner.alt || ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        )}
        
        {/* Render the rich text content */}
        <div className="prose prose-slate adventure-content mb-8">
          <PrismicRichText field={storyText} components={richTextComponents} />
        </div>
        
        {/* Render the options as buttons/links */}
        {options.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Choose your path:</h2>
            <div className="flex flex-col space-y-2">
              {options.map((option, index) => (
                <Link 
                  key={index} 
                  href={`/story/${option.target?.uid}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-center"
                >
                  {option.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

export default function StoryNode({ page }: StoryNodeProps) {
  return (
    <StoryNodeInner title={page.data.title} banner={page.data.banner as StoryNodeBanner} storyText={page.data.storyText} options={page.data.options} />
  )
        
}