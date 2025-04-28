import '@/app/globals.css'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Choose Your Adventure',
    default: 'Choose Your Adventure',
  },
  description: 'An interactive choose-your-adventure game',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-50 py-8">
          <header className="container mx-auto mb-8 px-4">
            <Link href="/" className="text-xl font-semibold text-blue-600 hover:text-blue-800">
              Choose Your Adventure
            </Link>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}