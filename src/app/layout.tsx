import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Profam — Home Services At Your Fingertips',
  description: 'Book trusted home service professionals in minutes. Cleaning, repairs, plumbing, electrical, beauty & more — the Profam app brings expert help to your doorstep.',
  keywords: 'home services, cleaning, plumbing, electrical, repair, beauty, Profam, on-demand services',
  openGraph: {
    title: 'Profam — Home Services At Your Fingertips',
    description: 'Book trusted home service professionals in minutes.',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
