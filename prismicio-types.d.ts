// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AboutPageDocumentDataSlicesSlice = TextBlockSlice;

/**
 * Content for About page documents
 */
interface AboutPageDocumentData {
  /**
   * banner field in *About page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_page.banner
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  banner: prismic.ImageField<never>;

  /**
   * about field in *About page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_page.about
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  about: prismic.RichTextField;

  /**
   * Slice Zone field in *About page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AboutPageDocumentDataSlicesSlice> /**
   * Meta Title field in *About page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: about_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *About page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: about_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *About page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * About page document from Prismic
 *
 * - **API ID**: `about_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<AboutPageDocumentData>,
    "about_page",
    Lang
  >;

type PageDocumentDataSlicesSlice = RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Story node → Options*
 */
export interface StoryNodeDocumentDataOptionsItem {
  /**
   * Option label field in *Story node → Options*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: story_node.options[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Target page field in *Story node → Options*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: story_node.options[].target
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  target: prismic.ContentRelationshipField<"story_node">;
}

/**
 * Content for Story node documents
 */
interface StoryNodeDocumentData {
  /**
   * Title field in *Story node*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: story_node.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * banner field in *Story node*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: story_node.banner
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  banner: prismic.ImageField<never>;

  /**
   * Story text field in *Story node*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: story_node.storyText
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  storyText: prismic.RichTextField;

  /**
   * Options field in *Story node*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: story_node.options[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  options: prismic.GroupField<Simplify<StoryNodeDocumentDataOptionsItem>>;
}

/**
 * Story node document from Prismic
 *
 * - **API ID**: `story_node`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type StoryNodeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<StoryNodeDocumentData>,
    "story_node",
    Lang
  >;

export type AllDocumentTypes =
  | AboutPageDocument
  | PageDocument
  | StoryNodeDocument;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Item in *StoryNode → Default → Primary → options*
 */
export interface StoryNodeSliceDefaultPrimaryOptionsItem {
  /**
   * buttonLink field in *StoryNode → Default → Primary → options*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: story_node.default.primary.options[].buttonLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonLink: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * label field in *StoryNode → Default → Primary → options*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: story_node.default.primary.options[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Primary content in *StoryNode → Default → Primary*
 */
export interface StoryNodeSliceDefaultPrimary {
  /**
   * Title field in *StoryNode → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: story_node.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Story field in *StoryNode → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: story_node.default.primary.story
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  story: prismic.RichTextField;

  /**
   * banner field in *StoryNode → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: story_node.default.primary.banner
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  banner: prismic.ImageField<never>;

  /**
   * options field in *StoryNode → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: story_node.default.primary.options[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  options: prismic.GroupField<
    Simplify<StoryNodeSliceDefaultPrimaryOptionsItem>
  >;
}

/**
 * Default variation for StoryNode Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StoryNodeSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<StoryNodeSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *StoryNode*
 */
type StoryNodeSliceVariation = StoryNodeSliceDefault;

/**
 * StoryNode Shared Slice
 *
 * - **API ID**: `story_node`
 * - **Description**: StoryNode
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StoryNodeSlice = prismic.SharedSlice<
  "story_node",
  StoryNodeSliceVariation
>;

/**
 * Primary content in *TextBlock → Default → Primary*
 */
export interface TextBlockSliceDefaultPrimary {
  /**
   * text field in *TextBlock → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Default variation for TextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TextBlock*
 */
type TextBlockSliceVariation = TextBlockSliceDefault;

/**
 * TextBlock Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: TextBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSlice = prismic.SharedSlice<
  "text_block",
  TextBlockSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutPageDocument,
      AboutPageDocumentData,
      AboutPageDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      StoryNodeDocument,
      StoryNodeDocumentData,
      StoryNodeDocumentDataOptionsItem,
      AllDocumentTypes,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      StoryNodeSlice,
      StoryNodeSliceDefaultPrimaryOptionsItem,
      StoryNodeSliceDefaultPrimary,
      StoryNodeSliceVariation,
      StoryNodeSliceDefault,
      TextBlockSlice,
      TextBlockSliceDefaultPrimary,
      TextBlockSliceVariation,
      TextBlockSliceDefault,
    };
  }
}
