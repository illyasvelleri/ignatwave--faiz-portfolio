import { Syne, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['300', '400', '500'],
})

export const metadata = {
  title: 'ignatwave — Digital Agency',
  description: 'We build high-converting websites, automate your business systems, and grow your digital presence. Full-stack development, automation, and digital growth.',
  keywords: 'web development, next.js, automation, digital marketing, branding, shopify, wordpress',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${dmSans.variable} ${dmMono.variable} bg-dark-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}