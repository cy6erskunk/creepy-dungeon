import { Content, ImageField, RichTextField, GroupField, ContentRelationshipField, KeyTextField } from '@prismicio/client'

type StoryNodeOption = {
  label: KeyTextField;
  target: ContentRelationshipField<'story_node'>;
}

// Define TypeScript interfaces for your Prismic content
export interface StoryNodeDocument extends Content.StoryNodeDocument {
  data: {
    title: KeyTextField;
    banner: ImageField;
    storyText: RichTextField;
    options: GroupField<StoryNodeOption>;
  }
}