import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { createClient } from "@/prismicio"
import StoryNode from '@/components/StoryNode'

interface StoryPageParams {
  params: Promise<{
    uid: string;
  }>;
}

// Generate metadata for the page
export async function generateMetadata({ params }: StoryPageParams): Promise<Metadata> {
  const client = createClient()
  
  try {
    const page = await client.getByUID('story_node', (await params).uid)
    
    return {
      title: page.data.title,
    }
  } catch {
    return {
      title: 'Story Node Not Found',
    }
  }
}

// Generate static paths at build time
export async function generateStaticParams() {
  const client = createClient()
  const pages = await client.getAllByType('story_node')
  
  return pages.map(page => ({
    uid: page.uid,
  }))
}

// Main page component
export default async function StoryPage({ params }: StoryPageParams) {
  const client = createClient()
  
  try {
    const page = await client.getByUID('story_node', (await params).uid)
    
    return <StoryNode page={page} />
  } catch {
    notFound()
  }
}