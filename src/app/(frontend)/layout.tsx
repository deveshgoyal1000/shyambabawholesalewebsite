import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: "Shyambaba Wholesale Jewellery | India's Trusted Brass Jewellery Manufacturer & Exporter",
  description:
    'Direct Jaipur manufacturer and wholesale exporter of premium oxidised silver and 22K gold-plated brass jewellery. Low MOV ₹3,000, 24-hr dispatch, worldwide shipping to 50+ countries.',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'theme-color': '#ffffff',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#ffffff" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body suppressHydrationWarning className="bg-white text-charcoal antialiased">
        {children}
      </body>
    </html>
  )
}
