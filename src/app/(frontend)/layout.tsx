import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Shyambaba Wholesale Jewellery | India's Trusted Brass Jewellery Manufacturer & Exporter",
  description:
    'Direct Jaipur manufacturer and wholesale exporter of premium oxidised silver and 22K gold-plated brass jewellery. Low MOV ₹3,000, 24-hr dispatch, worldwide shipping to 50+ countries.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-cream text-charcoal antialiased">
        {children}
      </body>
    </html>
  )
}
