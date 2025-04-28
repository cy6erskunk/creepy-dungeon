import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { PrismicRichText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import { richTextComponents } from "@/components/PrismicRichTextComponents";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("about_page").catch(() => notFound());

  return (
    <div className="container mx-auto p-4 max-w-2xl text-center">
      <PrismicNextImage field={page.data.banner} alt="" />
      <PrismicRichText field={page.data.about} components={richTextComponents} />
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("about_page").catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}