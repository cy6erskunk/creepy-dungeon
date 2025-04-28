import Link from 'next/link'
import Image from 'next/image'
import { PrismicRichText } from '@prismicio/react'
import { richTextComponents } from './PrismicRichTextComponents'
import { StoryNodeDocument } from '@/types/prismic'

interface StoryNodeProps {
  page: StoryNodeDocument;
}

export default function StoryNode({ page }: StoryNodeProps) {
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">{page.data.title}</h1>
      
      {/* Render the banner image */}
      {page.data.banner.url && (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
          <Image
            src={page.data.banner.url}
            alt={page.data.banner.alt || ""}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      )}
      
      {/* Render the rich text content */}
      <div className="prose prose-slate adventure-content mb-8">
        <PrismicRichText field={page.data.storyText} components={richTextComponents} />
      </div>
      
      {/* Render the options as buttons/links */}
      {page.data.options.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Choose your path:</h2>
          <div className="flex flex-col space-y-2">
            {page.data.options.map((option, index) => (
              <Link 
                key={index} 
                href={`/story/${option.target.uid}`}
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