import { Content, ImageField, RichTextField, GroupField, ContentRelationshipField, KeyTextField } from '@prismicio/client'

type FilledContentRelationshipField = {
  id: string;
  type: string;
  tags: string[];
  lang: string;
  uid: string;
  link_type: 'Document';
  isBroken: boolean;
}

type StoryNodeOption = {
  [K in 'label' | 'target']: K extends 'label' ? KeyTextField : ContentRelationshipField<'story_node'> & FilledContentRelationshipField;
}

// Define TypeScript interfaces for your Prismic content
export interface StoryNodeDocument extends Content.StoryNodeDocument {
  data: {
    title: string;
    banner: ImageField;
    storyText: RichTextField;
    options: GroupField<StoryNodeOption>;
  }
}