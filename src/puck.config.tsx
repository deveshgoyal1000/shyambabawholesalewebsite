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
} from 'lucide-react'
import ImageUploadField from '@/components/puck/ImageUploadField'
import Header from '@/components/Header'
import ShopByCategories, {
  CategoryItem,
  DEFAULT_CATEGORIES,
} from '@/components/ShopByCategories'
import GallerySection, {
  GalleryItem,
  DEFAULT_GALLERY_ITEMS,
} from '@/components/GallerySection'
import InternationalWholesale, {
  CountryItem,
  DEFAULT_COUNTRIES,
} from '@/components/InternationalWholesale'
import ManufacturerComparison, {
  ComparisonRow,
  DEFAULT_COMPARISON_ROWS,
} from '@/components/ManufacturerComparison'
import ManufacturingProcess, {
  ProcessStep,
  DEFAULT_PROCESS_STEPS,
} from '@/components/ManufacturingProcess'
import VideoShoppingCTA from '@/components/VideoShoppingCTA'
import Testimonials, {
  ReviewItem,
  DEFAULT_REVIEWS,
} from '@/components/Testimonials'
import FAQSection, {
  FAQItem,
  DEFAULT_FAQS,
} from '@/components/FAQSection'
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
    button1Link: string
    button2Text: string
    button2Link: string
    bgImageMobile: string
    bgImageDesktop: string
  }
  ShopByCategoriesBlock: {
    heading: string
    subheading: string
    categories: CategoryItem[]
  }
  GallerySectionBlock: {
    heading: string
    subheading: string
    items: GalleryItem[]
  }
  InternationalWholesaleBlock: {
    heading: string
    subheading: string
    countries: CountryItem[]
    ctaText: string
    ctaLink: string
    badge1Title: string
    badge1Subtitle: string
    badge2Title: string
    badge2Subtitle: string
    badge3Title: string
    badge3Subtitle: string
  }
  ManufacturerComparisonBlock: {
    heading: string
    subheading: string
    companyName: string
    otherName: string
    rows: ComparisonRow[]
  }
  FactoryStoryBlock: {
    headlineLine1: string
    headlineLine2: string
    description: string
    badge1: string
    badge2: string
    badge3: string
    buttonText: string
    buttonLink: string
  }
  ManufacturingProcessBlock: {
    heading: string
    subheading: string
    steps: ProcessStep[]
  }
  VideoShoppingCTABlock: {
    heading: string
    subheading: string
    buttonText: string
    buttonLink: string
  }
  TestimonialsBlock: {
    heading: string
    subheading: string
    reviews: ReviewItem[]
  }
  FAQSectionBlock: {
    heading: string
    subheading: string
    faqs: FAQItem[]
  }
  WholesaleLeadCTABlock: {
    title: string
    description: string
    button1Text: string
    button1Link: string
    button2Text: string
    button2Link: string
    badge1: string
    badge2: string
    badge3: string
    modelImage: string
    contactTitle: string
    contactPhone: string
  }
  FooterBlock: {
    companyName: string
    tagline: string
    logoUrl: string
    addressLine1: string
    addressLine2: string
    addressLine3: string
    copyright: string
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
        phoneNumber: { type: 'text', label: 'Phone Number' },
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
        point1: { type: 'text', label: 'Bullet Point 1' },
        point2: { type: 'text', label: 'Bullet Point 2' },
        point3: { type: 'text', label: 'Bullet Point 3' },
        point4: { type: 'text', label: 'Bullet Point 4' },
        button1Text: { type: 'text', label: 'Primary Button Label' },
        button1Link: { type: 'text', label: 'Primary Button Link' },
        button2Text: { type: 'text', label: 'Secondary Button Label' },
        button2Link: { type: 'text', label: 'Secondary Button Link' },
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
        button1Link: '#categories',
        button2Text: 'View Catalog',
        button2Link: '/collections/all',
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
        button1Link = '#categories',
        button2Text,
        button2Link = '/collections/all',
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
                href={button1Link || '#categories'}
                className="w-full inline-flex items-center justify-center py-3.5 sm:py-4 px-8 rounded-full bg-[#195799] hover:bg-[#124378] text-white font-bold text-[16px] tracking-wide shadow-lg transition-all text-center"
              >
                {button1Text}
              </a>
              <Link
                href={button2Link || '/collections/all'}
                className="w-full inline-flex items-center justify-center py-3.5 sm:py-4 px-8 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-[16px] tracking-wide border-2 border-white/90 transition-all text-center"
              >
                {button2Text}
              </Link>
            </div>
          </div>
        </section>
      ),
    },

    // 4. Shop by Categories
    ShopByCategoriesBlock: {
      label: '4. Shop by Categories (Detailed Grid)',
      fields: {
        heading: { type: 'text', label: 'Section Heading' },
        subheading: { type: 'text', label: 'Subheading' },
        categories: {
          type: 'array',
          label: 'Categories (Edit Names, Images & Links)',
          getItemSummary: (item: any, idx?: number) =>
            item?.title || `Category ${(idx ?? 0) + 1}`,
          defaultItemProps: {
            title: 'New Category',
            slug: 'new-category',
            image: '/images/categories/cat-premium-earrings.jpg',
          },
          arrayFields: {
            title: { type: 'text', label: 'Category Name (e.g. Kundan, Studs)' },
            slug: { type: 'text', label: 'Collection URL or Slug (e.g. kundan-earrings)' },
            image: {
              type: 'custom',
              render: ({ value, onChange }) => (
                <ImageUploadField label="Category Image" value={value} onChange={onChange} />
              ),
            },
          },
        },
      },
      defaultProps: {
        heading: 'Shop By Categories',
        subheading: 'Explore our premium brass jewellery collections',
        categories: DEFAULT_CATEGORIES,
      },
      render: ({ heading, subheading, categories }) => (
        <ShopByCategories
          heading={heading}
          subheading={subheading}
          categories={categories}
        />
      ),
    },

    // 5. Trending Gallery Section
    GallerySectionBlock: {
      label: '5. Wholesale Gallery (Cards & Videos)',
      fields: {
        heading: { type: 'text', label: 'Section Heading' },
        subheading: { type: 'text', label: 'Subheading' },
        items: {
          type: 'array',
          label: 'Gallery Cards (Add / Upload / Reorder)',
          getItemSummary: (item: any, idx?: number) =>
            item?.title || `Gallery Card ${(idx ?? 0) + 1}`,
          defaultItemProps: {
            title: 'New Gallery Item',
            image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
            speedTag: '',
          },
          arrayFields: {
            title: { type: 'text', label: 'Card Title' },
            speedTag: { type: 'text', label: 'Tag (e.g. 1.00)' },
            image: {
              type: 'custom',
              render: ({ value, onChange }) => (
                <ImageUploadField label="Card Image / Thumbnail" value={value} onChange={onChange} />
              ),
            },
          },
        },
      },
      defaultProps: {
        heading: "Explore Shyambaba's Gallery",
        subheading: 'The Art Of Adornment',
        items: DEFAULT_GALLERY_ITEMS,
      },
      render: ({ heading, subheading, items }) => (
        <GallerySection heading={heading} subheading={subheading} items={items} />
      ),
    },

    // 6. International Wholesale
    InternationalWholesaleBlock: {
      label: '6. International Wholesale (Countries & Trust)',
      fields: {
        heading: { type: 'text', label: 'Heading' },
        subheading: { type: 'text', label: 'Subheading' },
        ctaText: { type: 'text', label: 'CTA Button Text' },
        ctaLink: { type: 'text', label: 'CTA WhatsApp Link' },
        badge1Title: { type: 'text', label: 'Trust Badge 1 Title' },
        badge1Subtitle: { type: 'text', label: 'Trust Badge 1 Subtitle' },
        badge2Title: { type: 'text', label: 'Trust Badge 2 Title' },
        badge2Subtitle: { type: 'text', label: 'Trust Badge 2 Subtitle' },
        badge3Title: { type: 'text', label: 'Trust Badge 3 Title' },
        badge3Subtitle: { type: 'text', label: 'Trust Badge 3 Subtitle' },
        countries: {
          type: 'array',
          label: 'Countries List (Add / Edit Flags & Slugs)',
          getItemSummary: (item: any, idx?: number) =>
            item?.country || `Country ${(idx ?? 0) + 1}`,
          defaultItemProps: {
            country: 'New Country',
            slug: 'new-country',
            flag: 'https://flagcdn.com/w80/us.png',
          },
          arrayFields: {
            country: { type: 'text', label: 'Country Name' },
            slug: { type: 'text', label: 'Slug (e.g. united-states)' },
            flag: {
              type: 'custom',
              render: ({ value, onChange }) => (
                <ImageUploadField label="Flag Image URL" value={value} onChange={onChange} />
              ),
            },
          },
        },
      },
      defaultProps: {
        heading: 'We Serve Retailers Worldwide',
        subheading: 'Delivering Premium Jewellery to Your Country',
        ctaText: 'We ship to 50+ countries →',
        ctaLink: 'https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20am%20an%20international%20buyer%20and%20want%20to%20order%20wholesale%20jewellery%20with%20doorstep%20export%20to%20my%20country.',
        badge1Title: '50+ Countries',
        badge1Subtitle: 'Direct Export',
        badge2Title: '100% Insured',
        badge2Subtitle: 'Air Cargo',
        badge3Title: 'Customs Clear',
        badge3Subtitle: 'Documentation',
        countries: DEFAULT_COUNTRIES,
      },
      render: ({
        heading,
        subheading,
        countries,
        ctaText,
        ctaLink,
        badge1Title,
        badge1Subtitle,
        badge2Title,
        badge2Subtitle,
        badge3Title,
        badge3Subtitle,
      }) => (
        <InternationalWholesale
          heading={heading}
          subheading={subheading}
          countries={countries}
          ctaText={ctaText}
          ctaLink={ctaLink}
          badge1Title={badge1Title}
          badge1Subtitle={badge1Subtitle}
          badge2Title={badge2Title}
          badge2Subtitle={badge2Subtitle}
          badge3Title={badge3Title}
          badge3Subtitle={badge3Subtitle}
        />
      ),
    },

    // 7. Manufacturer vs Trader Comparison
    ManufacturerComparisonBlock: {
      label: '7. Manufacturer vs Trader Comparison',
      fields: {
        heading: { type: 'text', label: 'Section Heading' },
        subheading: { type: 'text', label: 'Subheading' },
        companyName: { type: 'text', label: 'Your Brand Column Name' },
        otherName: { type: 'text', label: 'Competitor Column Name' },
        rows: {
          type: 'array',
          label: 'Comparison Features (Add / Toggle Rows)',
          getItemSummary: (item: any, idx?: number) =>
            item?.feature || `Feature ${(idx ?? 0) + 1}`,
          defaultItemProps: {
            feature: 'Custom Requirement Support',
            shyambaba: true,
            others: false,
          },
          arrayFields: {
            feature: { type: 'text', label: 'Feature Description' },
            shyambaba: {
              type: 'radio',
              label: 'ShyamBaba Has It?',
              options: [
                { label: 'Yes (✓ Green Check)', value: true },
                { label: 'No (✕ Red Cross)', value: false },
              ],
            },
            others: {
              type: 'radio',
              label: 'Other Traders Have It?',
              options: [
                { label: 'Yes (✓ Green Check)', value: true },
                { label: 'No (✕ Red Cross)', value: false },
              ],
            },
          },
        },
      },
      defaultProps: {
        heading: 'ShyamBabaWholesale vs Other Suppliers',
        subheading: 'Why 10,000+ Retailers Choose Direct Manufacturing',
        companyName: 'ShyamBabaWholesale',
        otherName: 'Other Suppliers',
        rows: DEFAULT_COMPARISON_ROWS,
      },
      render: ({ heading, subheading, companyName, otherName, rows }) => (
        <ManufacturerComparison
          heading={heading}
          subheading={subheading}
          companyName={companyName}
          otherName={otherName}
          rows={rows}
        />
      ),
    },

    // 8. Factory Story ("We Don't Source. We Are Manufacture.")
    FactoryStoryBlock: {
      label: '8. Factory Story (We Don\'t Source. We Are Manufacture.)',
      fields: {
        headlineLine1: { type: 'text', label: 'Headline Line 1' },
        headlineLine2: { type: 'text', label: 'Headline Line 2' },
        description: { type: 'textarea', label: 'Story Description' },
        badge1: { type: 'text', label: 'Trust Badge 1' },
        badge2: { type: 'text', label: 'Trust Badge 2' },
        badge3: { type: 'text', label: 'Trust Badge 3' },
        buttonText: { type: 'text', label: 'Visit Factory Button Text' },
        buttonLink: { type: 'text', label: 'Visit Factory WhatsApp Link' },
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
        buttonLink:
          'https://wa.me/919680865791?text=Hello%20Shyambaba%20Wholesale%2C%20I%20want%20to%20visit%20your%20Jaipur%20manufacturing%20unit.',
      },
      render: ({
        headlineLine1,
        headlineLine2,
        description,
        badge1,
        badge2,
        badge3,
        buttonText,
        buttonLink,
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
                href={buttonLink || 'https://wa.me/919680865791'}
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

    // 9. Manufacturing Process Steps
    ManufacturingProcessBlock: {
      label: '9. Manufacturing Process Steps',
      fields: {
        heading: { type: 'text', label: 'Section Heading' },
        subheading: { type: 'text', label: 'Subheading' },
        steps: {
          type: 'array',
          label: 'Process Steps (Add / Upload Photos / Edit Descriptions)',
          getItemSummary: (item: any, idx?: number) =>
            item?.title ? `Step ${item.num || idx! + 1}: ${item.title}` : `Step ${(idx ?? 0) + 1}`,
          defaultItemProps: {
            num: 6,
            title: 'Packaging & Dispatch',
            desc: 'Secure 5-ply export packaging ready for worldwide cargo delivery.',
            image: '/images/process/step-5-final.png',
          },
          arrayFields: {
            num: { type: 'number', label: 'Step Number' },
            title: { type: 'text', label: 'Step Title' },
            desc: { type: 'textarea', label: 'Step Description' },
            image: {
              type: 'custom',
              render: ({ value, onChange }) => (
                <ImageUploadField label="Step Photo" value={value} onChange={onChange} />
              ),
            },
          },
        },
      },
      defaultProps: {
        heading: 'From Sketch To Stunning Jewellery',
        subheading: 'Our 5-Step Precision Manufacturing Pipeline',
        steps: DEFAULT_PROCESS_STEPS,
      },
      render: ({ heading, subheading, steps }) => (
        <ManufacturingProcess heading={heading} subheading={subheading} steps={steps} />
      ),
    },

    // 10. Video Shopping CTA
    VideoShoppingCTABlock: {
      label: '10. Live Video Call Shopping CTA',
      fields: {
        heading: { type: 'text', label: 'Card Title' },
        subheading: { type: 'text', label: 'Card Subheading' },
        buttonText: { type: 'text', label: 'Button Label' },
        buttonLink: { type: 'text', label: 'WhatsApp Direct Link' },
      },
      defaultProps: {
        heading: 'Book a Live Video Call',
        subheading: 'See products in real before ordering',
        buttonText: 'Book Now →',
        buttonLink:
          'https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20would%20like%20to%20Book%20a%20Live%20Video%20Call%20shopping%20session%20now.',
      },
      render: ({ heading, subheading, buttonText, buttonLink }) => (
        <VideoShoppingCTA
          heading={heading}
          subheading={subheading}
          buttonText={buttonText}
          buttonLink={buttonLink}
        />
      ),
    },

    // 11. Customer Testimonials
    TestimonialsBlock: {
      label: '11. Retailer Testimonials',
      fields: {
        heading: { type: 'text', label: 'Section Heading' },
        subheading: { type: 'text', label: 'Subheading' },
        reviews: {
          type: 'array',
          label: 'Customer Reviews (Add / Edit / Reorder)',
          getItemSummary: (item: any, idx?: number) =>
            item?.author ? `${item.author} (${item.location || 'Buyer'})` : `Review ${(idx ?? 0) + 1}`,
          defaultItemProps: {
            author: 'Happy Retailer',
            location: 'Boutique Owner, Mumbai',
            tag: 'Bulk Buyer',
            text: 'Outstanding quality and very smooth process. The finish of the jewellery is exceptional!',
          },
          arrayFields: {
            author: { type: 'text', label: 'Client / Store Name' },
            location: { type: 'text', label: 'Location / City' },
            tag: { type: 'text', label: 'Badge Tag (e.g. Regular Buyer)' },
            text: { type: 'textarea', label: 'Review Testimonial Text' },
          },
        },
      },
      defaultProps: {
        heading: 'Trusted by 10,000+ Retailers & Boutiques Worldwide',
        subheading: 'Real feedback from boutique owners and resellers worldwide',
        reviews: DEFAULT_REVIEWS,
      },
      render: ({ heading, subheading, reviews }) => (
        <Testimonials heading={heading} subheading={subheading} reviews={reviews} />
      ),
    },

    // 12. Wholesale FAQ Accordion
    FAQSectionBlock: {
      label: '12. Wholesale FAQ Section',
      fields: {
        heading: { type: 'text', label: 'Section Heading' },
        subheading: { type: 'text', label: 'Subheading' },
        faqs: {
          type: 'array',
          label: 'FAQs (Add / Edit Questions & Answers)',
          getItemSummary: (item: any, idx?: number) =>
            item?.question || `FAQ ${(idx ?? 0) + 1}`,
          defaultItemProps: {
            question: 'New Wholesale Question?',
            answer: 'Here is the detailed answer explaining terms, pricing, or policy.',
          },
          arrayFields: {
            question: { type: 'text', label: 'Question' },
            answer: { type: 'textarea', label: 'Answer (Supports multi-line text)' },
          },
        },
      },
      defaultProps: {
        heading: 'Frequently Asked Questions',
        subheading: 'Everything You Need to Know About Ordering Wholesale',
        faqs: DEFAULT_FAQS,
      },
      render: ({ heading, subheading, faqs }) => (
        <FAQSection heading={heading} subheading={subheading} faqs={faqs} />
      ),
    },

    // 13. Wholesale Lead CTA (Bottom Banner + Model + Contact)
    WholesaleLeadCTABlock: {
      label: '13. Bottom Wholesale CTA Banner & Contact',
      fields: {
        title: { type: 'text', label: 'Headline' },
        description: { type: 'textarea', label: 'Subtitle Description' },
        button1Text: { type: 'text', label: 'Button 1 Text' },
        button1Link: { type: 'text', label: 'Button 1 Link' },
        button2Text: { type: 'text', label: 'Button 2 Text' },
        button2Link: { type: 'text', label: 'Button 2 Link' },
        badge1: { type: 'text', label: 'Trust Badge 1' },
        badge2: { type: 'text', label: 'Trust Badge 2' },
        badge3: { type: 'text', label: 'Trust Badge 3' },
        modelImage: {
          type: 'custom',
          render: ({ value, onChange }) => (
            <ImageUploadField label="Model Photo / Banner Image" value={value} onChange={onChange} />
          ),
        },
        contactTitle: { type: 'text', label: 'Contact Box Title' },
        contactPhone: { type: 'text', label: 'WhatsApp Phone Number' },
      },
      defaultProps: {
        title: "Boost your sales with Shyambaba's premium brass earrings",
        description:
          'Join thousands of retailers worldwide who trust SHYAMBABA for premium quality & designer brass jewellery.',
        button1Text: 'Shop Wholesale',
        button1Link: '#categories',
        button2Text: 'Contact Us',
        button2Link:
          'https://wa.me/919680865791?text=Hello%20Shyambaba%20Wholesale%2C%20I%20want%20to%20contact%20you%20regarding%20wholesale%20partnership.',
        badge1: 'Premium Quality',
        badge2: '10000+ Retailers',
        badge3: 'Worldwide Shipping',
        modelImage: '/images/cta/model_jewellery_perfect.png',
        contactTitle: 'Contact Us',
        contactPhone: '+91 96808 65791',
      },
      render: ({
        title,
        description,
        button1Text,
        button1Link,
        button2Text,
        button2Link,
        badge1,
        badge2,
        badge3,
        modelImage,
        contactTitle,
        contactPhone,
      }) => (
        <WholesaleLeadCTA
          title={title}
          description={description}
          button1Text={button1Text}
          button1Link={button1Link}
          button2Text={button2Text}
          button2Link={button2Link}
          badge1={badge1}
          badge2={badge2}
          badge3={badge3}
          modelImage={modelImage}
          contactTitle={contactTitle}
          contactPhone={contactPhone}
        />
      ),
    },

    // 14. Website Footer
    FooterBlock: {
      label: '14. Website Footer',
      fields: {
        companyName: { type: 'text', label: 'Company Name' },
        tagline: { type: 'text', label: 'Brand Tagline' },
        logoUrl: {
          type: 'custom',
          render: ({ value, onChange }) => (
            <ImageUploadField label="Footer Brand Logo" value={value} onChange={onChange} />
          ),
        },
        addressLine1: { type: 'text', label: 'Address Line 1' },
        addressLine2: { type: 'text', label: 'Address Line 2' },
        addressLine3: { type: 'text', label: 'PIN / Postal Code' },
        copyright: { type: 'text', label: 'Copyright Text' },
      },
      defaultProps: {
        companyName: 'ShyamBaba Wholesale Jewellery',
        tagline: 'Style In Bulk, Profit In Every Piece',
        logoUrl: '/images/logo.png',
        addressLine1: 'Shop no, 206, Johari Bazar Rd,',
        addressLine2: 'Pink City, Jaipur, Rajasthan',
        addressLine3: '302003',
        copyright: '© 2025 Shyambabawholesale. All Rights Reserved.',
      },
      render: ({
        companyName,
        tagline,
        logoUrl,
        addressLine1,
        addressLine2,
        addressLine3,
        copyright,
      }) => (
        <Footer
          companyName={companyName}
          tagline={tagline}
          logoUrl={logoUrl}
          addressLine1={addressLine1}
          addressLine2={addressLine2}
          addressLine3={addressLine3}
          copyright={copyright}
        />
      ),
    },
  },
}

export default puckConfig
