import { FC } from "react";
import { Content, RichTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {StoryNodeInner} from '@/components/StoryNode';

/**
 * Props for `StoryNode`.
 */
export type StoryNodeProps = SliceComponentProps<Content.StoryNodeSlice>;

/**
 * Component for "StoryNode" Slices.
 */
const StoryNode: FC<StoryNodeProps> = ({ slice }) => {
  const mappedOptions = slice.primary.options.map(opt => ({
      label: opt.label ?? '',
      target: opt.buttonLink ?? null
    }));

  const options = mappedOptions.map(option => ({
    label: option.label,
    target: option.target.link_type === 'Document' && option.target.uid ? { uid: option.target.uid } : null
  }));

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="max-w-3xl mx-auto py-8 px-4 space-y-6"
    >
      <StoryNodeInner 
        title={slice.primary.title as string}
        banner={slice.primary.banner as { url: string; alt?: string }}
        storyText={slice.primary.story as RichTextField}
        options={options}
      />
  
    </section>
  );
};

export default StoryNode;