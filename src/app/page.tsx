import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/prismicio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Choose Your Adventure",
  description: "An interactive choose-your-adventure game",
};

export default async function Home() {
  const client = createClient();

  // Find the first node to use as starting point
  // You might want to add a specific field to identify start nodes in your schema
  const nodes = await client.getAllByType("story_node", {
    limit: 1,
    orderings: {
      field: "document.first_publication_date",
      direction: "asc",
    },
  });

  const startNode = nodes.length > 0 ? nodes[0] : null;

  return (
    <main className="container mx-auto p-4 max-w-2xl text-center">
      <Image
        src="https://images.prismic.io/creepy-dungeon/aA8oDfIqRLdaBp_r_cover.png?auto=format,compress"
        alt="Adventure Banner"
        width={800}
        height={400}
        className="rounded-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-6">Choose Your Adventure</h1>
      <p className="text-xl mb-8">
        Begin your journey into an interactive story where your choices matter.
      </p>

      {startNode ? (
        <Link
          href={`/story/${startNode.uid}`}
          className="inline-block start-button"
        >
          Start Adventure
        </Link>
      ) : (
        <p className="text-red-500">
          No starting point found. Please create a story node in Prismic.
        </p>
      )}
    </main>
  );
}
