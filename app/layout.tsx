import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
   
  export const raleway = Raleway({
    subsets: ['latin'],
    display: 'swap',
  })

export const metadata: Metadata = {
  title: 'Ben Malberg Portfolio',
  description: 'Ben Malberg - Frontend Developer | Artist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
