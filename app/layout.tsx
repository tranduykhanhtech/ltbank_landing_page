import type { Metadata, Viewport } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'LTBank | Ngân hàng số thế hệ mới',
  description: 'Hệ thống lõi ngân hàng mô phỏng. Tối giản, an toàn và độc đáo. Trải nghiệm mượt mà trên cả iOS và Android.',
  generator: 'v0.app',
  openGraph: {
    title: 'LTBank | Ngân hàng số thế hệ mới',
    description: 'Hệ thống lõi ngân hàng mô phỏng. Tối giản, an toàn và độc đáo.',
    url: 'https://ltbank.com',
    siteName: 'LTBank',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LTBank - Ngân hàng số thế hệ mới',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LTBank | Ngân hàng số thế hệ mới',
    description: 'Hệ thống lõi ngân hàng mô phỏng. Tối giản, an toàn và độc đáo.',
    images: ['/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0d0d14',
  width: 'device-width',
  initialScale: 1,
}

import { SplashScreen } from '@/components/splash-screen'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="bg-background">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <SplashScreen />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
