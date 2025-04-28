import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto p-4 max-w-2xl text-center">
      <h1 className="text-3xl font-bold mb-4">Story Page Not Found</h1>
      <p className="text-lg mb-6">
        We couldn&apos;t find the story page you were looking for.
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