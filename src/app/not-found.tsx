import Link from 'next/link'
import Image from 'next/image'
export default function NotFound() {
  return (
    <div className="container mx-auto p-4 max-w-2xl text-center">
      <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
      <Image src="https://images.prismic.io/creepy-dungeon/aA-ANvIqRLdaBq9K_404.png?auto=format,compress" alt="" width={800} height={400} />
      <p className="text-lg mb-6">
        We couldn&apos;t find the page you were looking for.
      </p>
      <Link 
        href="/"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Return to Start
      </Link>
    </div>
  )
}