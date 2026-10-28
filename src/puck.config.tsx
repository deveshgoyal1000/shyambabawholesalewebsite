import type { Config } from '@measured/puck'
import React from 'react'
import Link from 'next/link'
import {
  Sparkles,
  Phone,
  Check,
  Building2,
  Users2,
  Award,
  ChevronRight,
  Play,
  ArrowRight,
} from 'lucide-react'
import ImageUploadField from '@/components/puck/ImageUploadField'
import Header from '@/components/Header'
import ShopByCategories from '@/components/ShopByCategories'
import GallerySection from '@/components/GallerySection'
import InternationalWholesale from '@/components/InternationalWholesale'
import ManufacturerComparison from '@/components/ManufacturerComparison'
import ManufacturingProcess from '@/components/ManufacturingProcess'
import VideoShoppingCTA from '@/components/VideoShoppingCTA'
import Testimonials from '@/components/Testimonials'
import FAQSection from '@/components/FAQSection'
import WholesaleLeadCTA from '@/components/WholesaleLeadCTA'
import Footer from '@/components/Footer'

export type ComponentProps = {
  AnnouncementBarBlock: {
    highlight: string
    subtext: string
    phoneNumber: string
  }
  HeaderBlock: {
    brandName: string
  }
  HeroBannerBlock: {
    preheading: string
    headlineLine1: string
    headlineLine2: string
    subtitle: string
    point1: string
    point2: string
    point3: string
    point4: string
    button1Text: string
    button2Text: string
    bgImageMobile: string
    bgImageDesktop: string
  }
  ShopByCategoriesBlock: {
    heading: string
    subheading: string
  }
  GallerySectionBlock: {
    heading: string
    subheading: string
  }
  InternationalWholesaleBlock: {
    heading: string
  }
  ManufacturerComparisonBlock: {
    heading: string
  }
  FactoryStoryBlock: {
    headlineLine1: string
    headlineLine2: string
    description: string
    badge1: string
    badge2: string
    badge3: string
    buttonText: string
  }
  ManufacturingProcessBlock: {
    heading: string
  }
  VideoShoppingCTABlock: {
    heading: string
    subheading: string
  }
  TestimonialsBlock: {
    heading: string
  }
  FAQSectionBlock: {
    heading: string
  }
  WholesaleLeadCTABlock: {
    title: string
    description: string
    button1Text: string
    button2Text: string
  }
  FooterBlock: {
    companyName: string
    tagline: string
  }
}

export const puckConfig: Config<ComponentProps> = {
  components: {
    // 1. Top Announcement Bar
    AnnouncementBarBlock: {
      label: '1. Top Announcement Bar',
      fields: {
        highlight: { type: 'text', label: 'Highlight Text' },
        subtext: { type: 'text', label: 'Subtext' },
        phoneNumber: { type: 'text', label: 'WhatsApp Phone Number' },
      },
      defaultProps: {
        highlight: 'Low MOV ₹3,000 / $50',
        subtext: 'Direct Jaipur Manufacturer Wholesale Pricing',
        phoneNumber: '+91 96808 65791',
      },
      render: ({ highlight, subtext, phoneNumber }) => (
        <div className="bg-white border-b border-[#ECE6DC] text-[#121212] select-none w-full">
          <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C9A84C]" />
              <strong className="font-semibold text-[#121212]">{highlight}</strong>
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-600 hidden sm:inline">{subtext}</span>
            </div>
            <div className="flex items-center gap-1.5 text-neutral-600 font-medium">
              <Phone className="w-3.5 h-3.5 text-[#195799]" />
              <span>{phoneNumber}</span>
            </div>
          </div>
        </div>
      ),
    },

    // 2. Header & Navigation Bar
    HeaderBlock: {
      label: '2. Header (Logo & Nav)',
      fields: {
        brandName: { type: 'text', label: 'Brand Name' },
      },
      defaultProps: {
        brandName: 'ShyamBabaWholesale',
      },
      render: () => <Header />,
    },

    // 3. Exact Krishaz Style Full-Bleed Hero
    HeroBannerBlock: {
      label: '3. Hero Banner (Krishaz Style)',
      fields: {
        preheading: { type: 'text', label: 'Pre-heading' },
        headlineLine1: { type: 'text', label: 'Headline Line 1' },
        headlineLine2: { type: 'text', label: 'Headline Line 2' },
        subtitle: { type: 'textarea', label: 'Subtitle Text' },
        point1: { type: 'text', label: 'Point 1' },
        point2: { type: 'text', label: 'Point 2' },
        point3: { type: 'text', label: 'Point 3' },
        point4: { type: 'text', label: 'Point 4' },
        button1Text: { type: 'text', label: 'Primary Button Label' },
        button2Text: { type: 'text', label: 'Secondary Button Label' },
        bgImageMobile: {
          type: 'custom',
          render: ({ value, onChange }) => (
            <ImageUploadField label="Mobile Hero Background Image" value={value} onChange={onChange} />
          ),
        },
        bgImageDesktop: {
          type: 'custom',
          render: ({ value, onChange }) => (
            <ImageUploadField label="Desktop Hero Background Image" value={value} onChange={onChange} />
          ),
        },
      },
      defaultProps: {
        preheading: "India's Trusted",
        headlineLine1: 'Brass Jewellery Manufacturer',
        headlineLine2: '& Exporters',
        subtitle: 'Supplying 10,000+ Retailers, Boutiques & Resellers Across 50+ Countries.',
        point1: 'Premium Brass Earrings',
        point2: 'Video Call Available',
        point3: 'Worldwide Shipping',
        point4: '500+ Unique Designs',
        button1Text: 'Shop Wholesale',
        button2Text: 'View Catalog',
        bgImageMobile: '/images/hero/hero-mobile-krishaz.jpg',
        bgImageDesktop: '/images/hero/hero-desktop-krishaz.png',
      },
      render: ({
        preheading,
        headlineLine1,
        headlineLine2,
        subtitle,
        point1,
        point2,
        point3,
        point4,
        button1Text,
        button2Text,
        bgImageMobile,
        bgImageDesktop,
      }) => (
        <section className="relative min-h-[640px] sm:min-h-[700px] flex flex-col justify-between text-center text-white overflow-hidden select-none">
          {/* Background Images */}
          <div
            className="absolute inset-0 bg-cover bg-center sm:hidden"
            style={{ backgroundImage: `url('${bgImageMobile}')` }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center hidden sm:block"
            style={{ backgroundImage: `url('${bgImageDesktop}')` }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/65 sm:from-black/80 sm:via-black/70 sm:to-black/85 pointer-events-none" />

          {/* Ambient Gold Glow */}
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(201, 168, 76, 0.18) 0%, rgba(25, 87, 153, 0.08) 50%, transparent 75%)',
              filter: 'blur(45px)',
            }}
          />

          <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-10 flex flex-col items-center flex-1 justify-center">
            {preheading && (
              <span
                style={{ fontFamily: 'Georgia, serif' }}
                className="text-[20px] sm:text-[24px] text-[#FAF8F5] mb-2"
              >
                {preheading}
              </span>
            )}

            <h1
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-[30px] sm:text-[44px] md:text-[52px] font-bold tracking-tight text-white leading-[1.2] mb-3"
            >
              <span>{headlineLine1}</span>
              {headlineLine2 && (
                <>
                  <br />
                  <span>{headlineLine2}</span>
                </>
              )}
            </h1>

            <p className="text-[15px] sm:text-[17px] text-[#FAF8F5]/95 max-w-md mx-auto mb-7 font-normal leading-relaxed">
              {subtitle}
            </p>

            {/* Check points */}
            <div className="space-y-3 mb-8 w-full max-w-[320px] text-left mx-auto">
              {[point1, point2, point3, point4].filter(Boolean).map((pt) => (
                <div key={pt} className="flex items-center gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-[1.5px] border-[#C9A84C] flex items-center justify-center text-[#C9A84C] flex-shrink-0 bg-black/40">
                    <Check className="w-4 h-4 text-[#C9A84C] stroke-[2.5]" />
                  </div>
                  <span className="text-[16px] sm:text-[18px] font-semibold text-white tracking-wide">
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="w-full max-w-[340px] space-y-3">
              <a
                href="#categories"
                className="w-full inline-flex items-center justify-center py-3.5 sm:py-4 px-8 rounded-full bg-[#195799] hover:bg-[#124378] text-white font-bold text-[16px] tracking-wide shadow-lg transition-all text-center"
              >
                {button1Text}
              </a>
              <Link
                href="/collections/all"
                className="w-full inline-flex items-center justify-center py-3.5 sm:py-4 px-8 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-[16px] tracking-wide border-2 border-white/90 transition-all text-center"
              >
                {button2Text}
              </Link>
            </div>
          </div>
        </section>
      ),
    },

    // 3. Shop by Categories
    ShopByCategoriesBlock: {
      label: '3. Shop by Categories (12 Categories Grid)',
      fields: {
        heading: { type: 'text', label: 'Section Heading' },
        subheading: { type: 'text', label: 'Subheading' },
      },
      defaultProps: {
        heading: 'Shop by Category',
        subheading: 'Jaipur Handcrafted Brass Jewellery Direct from Manufacturer',
      },
      render: () => <ShopByCategories />,
    },

    // 4. Trending Gallery Section
    GallerySectionBlock: {
      label: '4. Wholesale Gallery (Product Showcase)',
      fields: {
        heading: { type: 'text', label: 'Section Heading' },
        subheading: { type: 'text', label: 'Subheading' },
      },
      defaultProps: {
        heading: 'Trending Wholesale Jewellery',
        subheading: 'Jaipur Factory Finished Brass & Oxidised Silver Pieces',
      },
      render: () => <GallerySection />,
    },

    // 5. International Wholesale
    InternationalWholesaleBlock: {
      label: '5. International Wholesale (50+ Countries)',
      fields: {
        heading: { type: 'text', label: 'Heading' },
      },
      defaultProps: {
        heading: 'Worldwide Express Cargo Delivery',
      },
      render: () => <InternationalWholesale />,
    },

    // 6. Manufacturer vs Trader Comparison
    ManufacturerComparisonBlock: {
      label: '6. Manufacturer vs Trader Comparison',
      fields: {
        heading: { type: 'text', label: 'Heading' },
      },
      defaultProps: {
        heading: 'Why Source Direct from Jaipur Factory vs Market Traders',
      },
      render: () => <ManufacturerComparison />,
    },

    // 7. Factory Story ("We Don't Source. We Are Manufacture.")
    FactoryStoryBlock: {
      label: '7. Factory Story (We Don\'t Source. We Are Manufacture.)',
      fields: {
        headlineLine1: { type: 'text', label: 'Headline Line 1' },
        headlineLine2: { type: 'text', label: 'Headline Line 2' },
        description: { type: 'textarea', label: 'Description' },
        badge1: { type: 'text', label: 'Badge 1' },
        badge2: { type: 'text', label: 'Badge 2' },
        badge3: { type: 'text', label: 'Badge 3' },
        buttonText: { type: 'text', label: 'Button Label' },
      },
      defaultProps: {
        headlineLine1: "We Don't Source.",
        headlineLine2: 'We Are Manufacture.',
        description:
          'From our manufacturing unit in Jaipur, every piece is designed, crafted and quality-checked by our skilled artisans.',
        badge1: 'In-house Manufacturing',
        badge2: 'Skilled Artisans',
        badge3: '100% Quality Inspection',
        buttonText: 'Visit Our Manufacturing Unit',
      },
      render: ({
        headlineLine1,
        headlineLine2,
        description,
        badge1,
        badge2,
        badge3,
        buttonText,
      }) => (
        <section id="about" className="py-10 md:py-16 bg-[#FAF8F5]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-[28px] sm:text-[36px] md:text-[42px] font-normal text-[#121212] leading-[1.22] mb-2.5 tracking-[0.5px]"
            >
              <span className="block">{headlineLine1}</span>
              <span className="block font-medium">{headlineLine2}</span>
            </h2>

            <div className="w-[60px] sm:w-[80px] h-[2.5px] bg-[#C9A84C] mx-auto my-3 sm:my-4" />

            <p className="text-[14.5px] sm:text-[16px] text-[#1a1a1a] max-w-lg mx-auto mb-7 font-normal leading-relaxed">
              {description}
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-7 sm:mb-9 max-w-lg mx-auto">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#C9A84C] flex items-center justify-center text-[#195799] bg-white shadow-md">
                  <Building2 className="w-6.5 h-6.5 sm:w-7 sm:h-7 stroke-[1.8]" />
                </div>
                <span className="text-[12.5px] sm:text-[14px] font-bold text-[#121212] leading-snug">
                  {badge1}
                </span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#C9A84C] flex items-center justify-center text-[#195799] bg-white shadow-md">
                  <Users2 className="w-6.5 h-6.5 sm:w-7 sm:h-7 stroke-[1.8]" />
                </div>
                <span className="text-[12.5px] sm:text-[14px] font-bold text-[#121212] leading-snug">
                  {badge2}
                </span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#C9A84C] flex items-center justify-center text-[#195799] bg-white shadow-md">
                  <Award className="w-6.5 h-6.5 sm:w-7 sm:h-7 stroke-[1.8]" />
                </div>
                <span className="text-[12.5px] sm:text-[14px] font-bold text-[#121212] leading-snug">
                  {badge3}
                </span>
              </div>
            </div>

            <div className="max-w-md mx-auto">
              <a
                href="https://wa.me/919680865791?text=Hello%20Shyambaba%20Wholesale%2C%20I%20want%20to%20visit%20your%20Jaipur%20manufacturing%20unit."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center py-4 px-6 rounded-xl sm:rounded-2xl bg-[#195799] hover:bg-[#124378] text-white font-bold text-[16px] sm:text-[18px] tracking-wide shadow-md transition-all text-center"
              >
                {buttonText}
              </a>
            </div>
          </div>
        </section>
      ),
    },

    // 8. Manufacturing Process Steps
    ManufacturingProcessBlock: {
      label: '8. Manufacturing Process Steps',
      fields: {
        heading: { type: 'text', label: 'Heading' },
      },
      defaultProps: {
        heading: 'Jaipur Artisan Craftsmanship',
      },
      render: () => <ManufacturingProcess />,
    },

    // 9. Video Shopping CTA
    VideoShoppingCTABlock: {
      label: '9. Live Video Call Shopping CTA',
      fields: {
        heading: { type: 'text', label: 'Heading' },
        subheading: { type: 'text', label: 'Subheading' },
      },
      defaultProps: {
        heading: 'Live Video Call Selection from Factory Floor',
        subheading: 'Inspect real shine, weight, and finish before dispatch',
      },
      render: () => <VideoShoppingCTA />,
    },

    // 10. Customer Testimonials
    TestimonialsBlock: {
      label: '10. Retailer Testimonials',
      fields: {
        heading: { type: 'text', label: 'Heading' },
      },
      defaultProps: {
        heading: 'Trusted by 10,000+ Retailers & Boutiques Worldwide',
      },
      render: () => <Testimonials />,
    },

    // 11. FAQ Accordion
    FAQSectionBlock: {
      label: '11. Wholesale FAQ Section',
      fields: {
        heading: { type: 'text', label: 'Heading' },
      },
      defaultProps: {
        heading: 'Frequently Asked Wholesale Questions',
      },
      render: () => <FAQSection />,
    },

    // 12. Wholesale Lead CTA
    WholesaleLeadCTABlock: {
      label: '12. Wholesale Lead CTA (Bottom Banner)',
      fields: {
        title: { type: 'text', label: 'Headline' },
        description: { type: 'textarea', label: 'Description' },
        button1Text: { type: 'text', label: 'Button 1 Text' },
        button2Text: { type: 'text', label: 'Button 2 Text' },
      },
      defaultProps: {
        title: 'Boost your sales with Shyambaba’s premium brass earrings',
        description:
          'Join thousands of retailers worldwide who trust SHYAMBABA for premium quality & designer brass jewellery.',
        button1Text: 'Shop Wholesale',
        button2Text: 'Contact Us',
      },
      render: () => <WholesaleLeadCTA />,
    },

    // 13. Footer
    FooterBlock: {
      label: '13. Website Footer',
      fields: {
        companyName: { type: 'text', label: 'Company Name' },
        tagline: { type: 'text', label: 'Tagline' },
      },
      defaultProps: {
        companyName: 'ShyamBaba Wholesale Jewellery',
        tagline: 'Jaipur Factory Direct Brass Jewellery Manufacturer & Exporter',
      },
      render: () => <Footer />,
    },
  },
}

export default puckConfig
