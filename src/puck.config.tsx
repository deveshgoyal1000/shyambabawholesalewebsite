import type { Config } from '@measured/puck'
import React from 'react'
import Link from 'next/link'
import {
  Sparkles,
  Phone,
  Globe,
  ShieldCheck,
  Award,
  ArrowRight,
  Tag,
  Factory,
} from 'lucide-react'

export type ComponentProps = {
  AnnouncementBarBlock: {
    highlight: string
    text: string
    phoneNumber: string
  }
  HeroBannerBlock: {
    headlineLine1: string
    headlineLine2: string
    description: string
    badge1: string
    badge2: string
    badge3: string
    buttonText: string
    buttonLink: string
  }
  CategoryBannerBlock: {
    title: string
    badge: string
  }
  JewelleryCardBlock: {
    name: string
    code: string
    imageUrl: string
  }
  CallToActionBlock: {
    title: string
    description: string
    buttonText: string
    whatsappText: string
  }
}

export const puckConfig: Config<ComponentProps> = {
  components: {
    AnnouncementBarBlock: {
      label: 'Top Announcement Bar',
      fields: {
        highlight: { type: 'text', label: 'Highlight Text' },
        text: { type: 'text', label: 'Subtext' },
        phoneNumber: { type: 'text', label: 'WhatsApp Phone Number' },
      },
      defaultProps: {
        highlight: 'Low MOV ₹3,000 / $50',
        text: 'Direct Jaipur Manufacturer Wholesale Pricing',
        phoneNumber: '+91 96808 65791',
      },
      render: ({ highlight, text, phoneNumber }) => (
        <div className="bg-white border-b border-[#ECE6DC] text-[#121212] px-4 py-2.5 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C9A84C]" />
            <strong className="font-semibold text-[#121212]">{highlight}</strong>
            <span className="text-neutral-400">•</span>
            <span className="text-neutral-600 hidden sm:inline">{text}</span>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-600 font-medium">
            <Phone className="w-3.5 h-3.5 text-[#195799]" />
            <span>{phoneNumber}</span>
          </div>
        </div>
      ),
    },

    HeroBannerBlock: {
      label: 'Hero Manufacturing Banner',
      fields: {
        headlineLine1: { type: 'text', label: 'Headline Line 1' },
        headlineLine2: { type: 'text', label: 'Headline Line 2' },
        description: { type: 'textarea', label: 'Description' },
        badge1: { type: 'text', label: 'Trust Badge 1' },
        badge2: { type: 'text', label: 'Trust Badge 2' },
        badge3: { type: 'text', label: 'Trust Badge 3' },
        buttonText: { type: 'text', label: 'Button Label' },
        buttonLink: { type: 'text', label: 'Button Link' },
      },
      defaultProps: {
        headlineLine1: "We Don't Source.",
        headlineLine2: 'We Are Manufacture.',
        description:
          'From our manufacturing unit in Jaipur, every piece is designed, crafted and quality-checked by our skilled artisans.',
        badge1: '50+ Countries Direct Export',
        badge2: '100% Insured Air Cargo',
        badge3: 'Customs Clear Documentation',
        buttonText: 'Explore Wholesale Collections',
        buttonLink: '/collections/all',
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
        <section className="bg-gradient-to-b from-white to-[#FAF8F5] py-8 sm:py-14 px-4 sm:px-6 border-b border-[#EAE3D8]">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-[26px] sm:text-[40px] md:text-[48px] font-bold text-[#121212] leading-[1.15] mb-4 tracking-tight"
            >
              <span>{headlineLine1}</span>
              <br />
              <span className="text-[#195799]">{headlineLine2}</span>
            </h1>

            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] max-w-2xl mx-auto mb-6 leading-relaxed">
              {description}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-7 text-xs sm:text-sm">
              <span className="px-3.5 py-1.5 rounded-full bg-[#F5EFE6] text-[#195799] font-semibold border border-[#D4C7B4]">
                ✓ {badge1}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#F5EFE6] text-[#195799] font-semibold border border-[#D4C7B4]">
                ✓ {badge2}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#F5EFE6] text-[#195799] font-semibold border border-[#D4C7B4]">
                ✓ {badge3}
              </span>
            </div>

            <a
              href={buttonLink}
              className="inline-flex items-center justify-center py-3.5 px-8 rounded-full bg-[#195799] hover:bg-[#124378] text-white font-bold text-[15px] sm:text-[17px] tracking-wide shadow-md transition-all"
            >
              {buttonText}
            </a>
          </div>
        </section>
      ),
    },

    CategoryBannerBlock: {
      label: 'Category Title Banner (Theme Blue)',
      fields: {
        title: { type: 'text', label: 'Category Title' },
        badge: { type: 'text', label: 'Small Badge/Tag' },
      },
      defaultProps: {
        title: 'Earrings',
        badge: 'Direct Factory Wholesale',
      },
      render: ({ title, badge }) => (
        <div className="w-full bg-[#195799] border-b-2 border-[#C9A84C] py-4 sm:py-5 px-4 text-center shadow-sm">
          <div className="max-w-7xl mx-auto">
            {badge && (
              <span className="inline-block text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#C9A84C] uppercase mb-1">
                {badge}
              </span>
            )}
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-[20px] sm:text-[28px] md:text-[32px] font-bold text-white tracking-wide"
            >
              {title}
            </h2>
          </div>
        </div>
      ),
    },

    JewelleryCardBlock: {
      label: 'Jewellery Product Card',
      fields: {
        name: { type: 'text', label: 'Design Name' },
        code: { type: 'text', label: 'Design Code' },
        imageUrl: { type: 'text', label: 'Image URL' },
      },
      defaultProps: {
        name: 'American Diamond Earrings',
        code: 'SB-450D7AF5',
        imageUrl: '/images/catalog/earrings/american-diamond-earrings/american-diamond-earrings-001.jpg',
      },
      render: ({ name, code, imageUrl }) => (
        <div className="max-w-sm mx-auto rounded-2xl overflow-hidden bg-white border-2 border-[#D4C7B4] shadow-[0_4px_16px_rgba(0,0,0,0.06)] my-4">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#F7F4EE]">
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          </div>
          <div className="p-3.5 text-center bg-white border-t-2 border-[#D4C7B4]">
            <span className="text-[12px] font-bold text-[#195799] font-mono block mb-1">
              CODE: {code}
            </span>
            <h3
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-[15px] font-bold text-[#121212] leading-tight"
            >
              {name}
            </h3>
          </div>
        </div>
      ),
    },

    CallToActionBlock: {
      label: 'Wholesale Call to Action Banner',
      fields: {
        title: { type: 'text', label: 'CTA Heading' },
        description: { type: 'textarea', label: 'Description' },
        buttonText: { type: 'text', label: 'Button Text' },
        whatsappText: { type: 'text', label: 'WhatsApp Pre-filled Message' },
      },
      defaultProps: {
        title: 'Boost your sales with Shyambaba’s premium brass earrings',
        description:
          'Join thousands of retailers worldwide who trust SHYAMBABA for premium quality & designer brass jewellery.',
        buttonText: 'Order on WhatsApp',
        whatsappText: 'Hello Shyambaba Wholesale, I want to discuss wholesale catalog.',
      },
      render: ({ title, description, buttonText, whatsappText }) => (
        <section className="bg-[#FAF8F5] border-t border-[#EAE3D8] py-10 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-[22px] sm:text-[30px] font-bold text-[#121212] mb-3"
            >
              {title}
            </h2>
            <p className="text-[14px] sm:text-[16px] text-neutral-600 mb-6">
              {description}
            </p>
            <a
              href={`https://wa.me/919680865791?text=${encodeURIComponent(whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-full bg-[#195799] hover:bg-[#124378] text-white font-bold text-[15px] shadow-md transition-all"
            >
              {buttonText}
            </a>
          </div>
        </section>
      ),
    },
  },
}

export default puckConfig
