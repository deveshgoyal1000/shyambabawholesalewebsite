export interface CountryWholesaleInfo {
  slug: string
  country: string
  flag: string
  currency: string
  minOrderValue: string
  deliveryTime: string
  courierPartner: string
  customsInfo: string
  popular: boolean
  tagline: string
  videoUrl: string
  videoPoster: string
  aboutCountryExport: string
  keyBenefits: string[]
  processSteps: {
    number: string
    title: string
    description: string
  }[]
  customsFAQ: {
    q: string
    a: string
  }[]
}

export const internationalCountries: Record<string, CountryWholesaleInfo> = {
  'united-states': {
    slug: 'united-states',
    country: 'United States',
    flag: 'https://flagcdn.com/w80/us.png',
    currency: 'USD ($)',
    minOrderValue: '₹3,000 (~$36 USD)',
    deliveryTime: '4 to 6 Business Days',
    courierPartner: 'FedEx International Priority & DHL Express',
    customsInfo: 'Duty-free on orders up to $800 USD under Section 321 De Minimis exemption. Full commercial invoice with HSN code 711790 provided.',
    popular: true,
    tagline: 'Direct Jaipur Manufacturer Wholesale to US Boutiques & Resellers',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop',
    aboutCountryExport: 'We supply over 2,500+ Indian jewellery boutiques, flea-market sellers, and online Etsy/Shopify merchants across California, Texas, New York, New Jersey, and Illinois. All orders are packed in heavy-duty 5-ply export master cartons with individual barcode labels and anti-tarnish protective wrapping for immediate retail display.',
    keyBenefits: [
      'Zero US import duty on shipments valued under $800 USD (Section 321)',
      'Doorstep courier delivery via FedEx / DHL Express with real-time tracking',
      'Wholesale factory pricing directly from our Jaipur foundry with zero middlemen',
      'Low minimum order value of just ₹3,000 (~$36 USD) to start testing styles'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Select Designs from 5,000+ Codes',
        description: 'Browse our website catalogue or request our complete PDF product sheet. Send codes directly on WhatsApp.'
      },
      {
        number: '02',
        title: 'Live Video Call & Final Inspection',
        description: 'We hold a live WhatsApp video call from our Jaipur showroom to inspect the finish, stones, and quality of every single piece before packing.'
      },
      {
        number: '03',
        title: '5-Ply Export Packaging & Barcoding',
        description: 'Each item is sealed in moisture-proof zip pouches, bubble-wrapped, and packed in reinforced export-grade master cartons.'
      },
      {
        number: '04',
        title: 'Air Cargo Dispatch & US Doorstep Delivery',
        description: 'Dispatched via FedEx/DHL air cargo. Arrives at your US doorstep in 4–6 business days with complete clearance documents.'
      }
    ],
    customsFAQ: [
      {
        q: 'Do I have to pay import duties in the USA?',
        a: 'Most wholesale orders under $800 USD qualify for the Section 321 duty-free de minimis exemption. For larger commercial shipments, we classify every item under HSN code 711790 (Imitation Jewellery) with proper commercial declarations for rapid clearance.'
      },
      {
        q: 'How do I pay from the United States?',
        a: 'We accept international wire transfer (SWIFT), Wise (formerly TransferWise), Western Union, and major digital bank transfers for quick confirmation.'
      }
    ]
  },

  'united-kingdom': {
    slug: 'united-kingdom',
    country: 'United Kingdom',
    flag: 'https://flagcdn.com/w80/gb.png',
    currency: 'GBP (£)',
    minOrderValue: '₹3,000 (~£29 GBP)',
    deliveryTime: '4 to 6 Business Days',
    courierPartner: 'DHL Express UK & FedEx International',
    customsInfo: 'Compliant UK commercial invoice provided. Full HSN 711790 classification with transparent airway bill documentation.',
    popular: true,
    tagline: 'Supplying UK Asian Wedding Boutiques & High Street Retailers',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1611591475870-0f2d80d21051?q=80&w=1200&auto=format&fit=crop',
    aboutCountryExport: 'We export high-grade brass bridal sets, Kundan jhumkis, and antique finish jewellery to prominent retailers across London (Southall, Wembley), Leicester, Birmingham, Manchester, and Bradford. Our pieces are crafted with skin-safe, nickel-free plating compliant with UK consumer standards.',
    keyBenefits: [
      'Express air cargo delivered directly to your UK high street shop or residence',
      'Authentic Rajasthani craftsmanship favored by UK Asian wedding shoppers',
      'No minimum quantity per piece — pick assorted designs to test client demand',
      'Complete Air Waybill (AWB) and digital tracking notifications'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Assorted Order Selection',
        description: 'Pick mixed styles across Kundan, Polki, Rajwadi, and Oxidised Silver with a low starting order value of ₹3,000.'
      },
      {
        number: '02',
        title: 'Video Showroom Verification',
        description: 'Connect with our Jaipur factory team over video call to see the exact weight, shine, and craftsmanship.'
      },
      {
        number: '03',
        title: 'Customs Compliant Packaging',
        description: 'Export invoice and packing slip attached with individual tamper-proof packaging.'
      },
      {
        number: '04',
        title: 'UK Doorstep Handover',
        description: 'Fast delivery via DHL Express right to your address in 4–6 business days.'
      }
    ],
    customsFAQ: [
      {
        q: 'How does UK VAT and customs clearance work?',
        a: 'We provide comprehensive commercial invoices with HSN 711790 classification. DHL Express handles customs clearance at UK borders, and any applicable import VAT is collected directly via DHL with full receipts.'
      },
      {
        q: 'Can I order single pieces of multiple designs?',
        a: 'Yes! As a manufacturer, we allow assorted selection so UK boutique owners can curate diverse collections without holding excessive dead inventory.'
      }
    ]
  },

  'bangladesh': {
    slug: 'bangladesh',
    country: 'Bangladesh',
    flag: 'https://flagcdn.com/w80/bd.png',
    currency: 'BDT (৳)',
    minOrderValue: '₹3,000 (~৳4,200 BDT)',
    deliveryTime: '3 to 5 Business Days',
    courierPartner: 'Direct Dhaka Air Cargo & Border Express Logistics',
    customsInfo: 'Doorstep Dhaka & Chittagong delivery. Dedicated Bangladesh logistics partner with customs handling included.',
    popular: true,
    tagline: 'Direct Jaipur Factory Supply for Dhaka & Chittagong Jewellers',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop',
    aboutCountryExport: 'Bangladesh is one of our largest international export markets. Resellers in Gausia Market, New Market Dhaka, Sylhet, and Chittagong rely on Shyambaba for authentic Jaipur antique gold, matte finish bridal jewellery, and lightweight daily wear brass earrings.',
    keyBenefits: [
      'Fast 3 to 5 business day transit from Jaipur directly to Dhaka',
      'Hassle-free customs clearing and doorstep cargo handling',
      'Popular matte gold and antique polish tailored for Bangladeshi bridal tastes',
      'Flexible payment options and dedicated Bengali/Hindi speaking customer support'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Select Wholesale Catalogue',
        description: 'Choose your desired jewellery codes from our online collection or catalogue sheet.'
      },
      {
        number: '02',
        title: 'Video Call Product Inspection',
        description: 'Inspect every piece on WhatsApp video call before dispatch to verify polish and stone settings.'
      },
      {
        number: '03',
        title: 'Export Packing & Cargo Booking',
        description: 'Packed securely in master cartons and handed over to specialized Bangladesh cross-border air cargo.'
      },
      {
        number: '04',
        title: 'Doorstep Delivery in Bangladesh',
        description: 'Delivered directly to your shop in Dhaka, Chittagong, Sylhet, or other districts.'
      }
    ],
    customsFAQ: [
      {
        q: 'Do I need an import license to receive parcels in Bangladesh?',
        a: 'For wholesale orders shipped via our cargo logistics partner, all customs procedures are handled smoothly end-to-end, delivering directly to your commercial or residential address.'
      },
      {
        q: 'How do customers in Bangladesh make payments?',
        a: 'We support international wire transfer, digital remittances, and established trade payment channels.'
      }
    ]
  },

  'canada': {
    slug: 'canada',
    country: 'Canada',
    flag: 'https://flagcdn.com/w80/ca.png',
    currency: 'CAD ($)',
    minOrderValue: '₹3,000 (~$49 CAD)',
    deliveryTime: '4 to 7 Business Days',
    courierPartner: 'FedEx International & DHL Express Canada',
    customsInfo: 'Complete CBSA compliant commercial declaration with exact weight, itemized counts, and HSN 711790.',
    popular: false,
    tagline: 'Supplying Canadian Retailers in Toronto, Vancouver, Calgary & Surrey',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1200&auto=format&fit=crop',
    aboutCountryExport: 'We ship regularly to Indian jewellery stores, bridal makeup artists, and festival pop-up sellers across Greater Toronto Area (Brampton, Mississauga), Surrey (British Columbia), Calgary, and Edmonton. Our jewellery offers premium micro-gold plating that withstands climate variations.',
    keyBenefits: [
      'Reliable delivery to Ontario, British Columbia, Alberta, and Quebec',
      'Full tracking updates from Jaipur departure to Canadian delivery',
      'High-grade Kundan, Meenakari, and Temple brass jewellery',
      'Direct factory rates ensuring healthy retail profit margins for Canadian sellers'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Order Placement',
        description: 'Send item codes on WhatsApp. Mix designs freely across different jewellery categories.'
      },
      {
        number: '02',
        title: 'Video Call Inspection',
        description: 'Review physical items on video call to confirm colour, clasp mechanism, and finish.'
      },
      {
        number: '03',
        title: 'Protective Packaging',
        description: 'Double-bubble wrapping and sealed master export box with water-resistant outer taping.'
      },
      {
        number: '04',
        title: 'Canadian Doorstep Delivery',
        description: 'FedEx / DHL express clears customs and delivers to your Canadian address in 4–7 business days.'
      }
    ],
    customsFAQ: [
      {
        q: 'What are the customs requirements for Canada?',
        a: 'Shipments are accompanied by an itemized commercial invoice with HSN code 711790. GST/HST is settled cleanly via the carrier upon clearance.'
      },
      {
        q: 'Can Canadian retailers brand the items with their own tags?',
        a: 'Yes! Items are supplied in clean transparent unbranded zip pouches, ready for you to attach your own boutique logo and pricing tags.'
      }
    ]
  },

  'dubai': {
    slug: 'dubai',
    country: 'Dubai (United Arab Emirates)',
    flag: 'https://flagcdn.com/w80/ae.png',
    currency: 'AED (د.إ)',
    minOrderValue: '₹3,000 (~132 AED)',
    deliveryTime: '3 to 5 Business Days',
    courierPartner: 'Aramex & DHL Express Middle East',
    customsInfo: 'Fast UAE customs clearance via Dubai Cargo Village. Duty-free eligibility for low-value personal/boutique imports.',
    popular: true,
    tagline: 'Supplying Gold Souk, Meena Bazaar & Karama Retailers in Dubai',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1200&auto=format&fit=crop',
    aboutCountryExport: 'With daily direct flights between Jaipur and Dubai, delivery is exceptionally fast. We partner with Indian jewellery traders in Deira, Bur Dubai, Sharjah, and Abu Dhabi who demand authentic 22K yellow gold matte polish and Polki designs.',
    keyBenefits: [
      'Ultra-fast 3 to 5 business day door-to-door delivery across Dubai and all UAE Emirates',
      'Direct factory pricing giving you an edge over local Dubai wholesale traders',
      'Finest 22K gold look plating identical in shade to authentic gold jewellery',
      'Daily WhatsApp support synchronized with UAE business hours'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Select From Catalogue',
        description: 'Browse our exclusive bridal & fashion jewellery collection on WhatsApp or website.'
      },
      {
        number: '02',
        title: 'Video Call Inspection',
        description: 'Live HD video review of your order pieces direct from our Jaipur factory showroom.'
      },
      {
        number: '03',
        title: 'Export Packaging',
        description: 'Boxed in 5-ply export grade master cartons with individual pouches.'
      },
      {
        number: '04',
        title: 'Express UAE Delivery',
        description: 'Shipped via Aramex/DHL directly to your Dubai, Sharjah, or Abu Dhabi address.'
      }
    ],
    customsFAQ: [
      {
        q: 'How fast is delivery to Dubai and Abu Dhabi?',
        a: 'Because of frequent direct air connections between Rajasthan and UAE hubs, parcels typically clear customs and reach your doorstep within 3 to 5 business days.'
      },
      {
        q: 'What payment methods are supported for UAE buyers?',
        a: 'We accept bank wire transfers, exchange house remittances, and international online payments.'
      }
    ]
  },

  'malaysia': {
    slug: 'malaysia',
    country: 'Malaysia',
    flag: 'https://flagcdn.com/w80/my.png',
    currency: 'MYR (RM)',
    minOrderValue: '₹3,000 (~170 MYR)',
    deliveryTime: '4 to 6 Business Days',
    courierPartner: 'DHL Express Malaysia & SF Express',
    customsInfo: 'Itemized commercial invoice with HS code classification for smooth Royal Malaysian Customs Department clearance.',
    popular: false,
    tagline: 'Jaipur Brass Jewellery for Brickfields, Klang & Penang Boutiques',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop',
    aboutCountryExport: 'Supplying established Malaysian Indian boutiques in Little India Brickfields, Klang, Penang, and Johor Bahru. Our temple jewellery, antique necklaces, and South Indian bridal designs are crafted specifically for festival and wedding demand.',
    keyBenefits: [
      'Direct doorstep air cargo delivery to Peninsular and East Malaysia',
      'Authentic Indian temple, coin, and mango mala designs in high demand locally',
      'Significant profit margins compared to local Malaysian wholesale intermediaries',
      'Transparent tracking and dedicated shipment handling'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Pick Assorted Styles',
        description: 'Choose temple, bridal, or everyday pieces from our catalogue with low ₹3,000 MOV.'
      },
      {
        number: '02',
        title: 'Video Call Inspection',
        description: 'Inspect stones, plating luster, and weight on live WhatsApp video.'
      },
      {
        number: '03',
        title: 'Safe Export Packing',
        description: 'Individual zip locks, bubble wraps, and sealed export master packaging.'
      },
      {
        number: '04',
        title: 'Malaysian Doorstep Handover',
        description: 'Delivered directly to your store or residence in 4–6 business days.'
      }
    ],
    customsFAQ: [
      {
        q: 'Can Malaysian sellers order mixed items?',
        a: 'Absolutely! You can choose 1 piece of 30 different designs to build a diverse showcase for your customers.'
      },
      {
        q: 'How does shipping to Malaysia work?',
        a: 'We ship through DHL Express Air Cargo with complete documentation for prompt customs clearance.'
      }
    ]
  },

  'australia': {
    slug: 'australia',
    country: 'Australia',
    flag: 'https://flagcdn.com/w80/au.png',
    currency: 'AUD ($)',
    minOrderValue: '₹3,000 (~$55 AUD)',
    deliveryTime: '5 to 7 Business Days',
    courierPartner: 'DHL Express Australia & FedEx Express',
    customsInfo: 'Duty-free on commercial imports under $1,000 AUD. Full Australian Department of Home Affairs compliant invoice.',
    popular: false,
    tagline: 'Direct Manufacturer Supply to Sydney, Melbourne & Brisbane Jewellers',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop',
    aboutCountryExport: 'Serving boutique owners, Diwali exhibition sellers, and bridal stylists across Sydney (Parramatta, Harris Park), Melbourne (Dandenong, Tarneit), Brisbane, and Perth. Our jewellery is nickel-free and lead-free.',
    keyBenefits: [
      'Duty-free threshold up to $1,000 AUD for easy, low-cost importing',
      'Doorstep delivery via DHL Express with signature confirmation',
      'Direct factory rates from Jaipur guaranteeing high gross margins',
      'Live video call verification before every shipment'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Catalogue Selection',
        description: 'Send selected codes from our website or comprehensive PDF wholesale sheet.'
      },
      {
        number: '02',
        title: 'Live Video Check',
        description: 'Check finishing and stone brilliance with our showroom team on WhatsApp video.'
      },
      {
        number: '03',
        title: 'Insured Master Packaging',
        description: 'Export-grade packaging designed to withstand long-haul international air transit.'
      },
      {
        number: '04',
        title: 'Australian Doorstep Delivery',
        description: 'Arrives in 5–7 business days with end-to-end digital tracking.'
      }
    ],
    customsFAQ: [
      {
        q: 'Are orders to Australia duty-free?',
        a: 'Yes, goods imported into Australia with a customs value under $1,000 AUD generally enter free of customs duty and import processing charges.'
      },
      {
        q: 'What is the shipping cost to Australia?',
        a: 'Air cargo shipping rates depend on the actual volumetric weight of your order. We pass through exact DHL/FedEx wholesale partner rates with zero markup.'
      }
    ]
  },

  'singapore': {
    slug: 'singapore',
    country: 'Singapore',
    flag: 'https://flagcdn.com/w80/sg.png',
    currency: 'SGD ($)',
    minOrderValue: '₹3,000 (~$48 SGD)',
    deliveryTime: '3 to 5 Business Days',
    courierPartner: 'DHL Express Singapore & FedEx',
    customsInfo: 'Fast Singapore Customs clearance. Full itemized commercial invoice with HSN code 711790.',
    popular: false,
    tagline: 'Wholesale Indian Jewellery for Little India & Online Boutiques in Singapore',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop',
    aboutCountryExport: 'We export fine brass oxidised and gold-plated jewellery to retailers in Little India Serangoon Road, Jurong, and digital boutique owners across Singapore. High turnover, premium finish, and quick 3–5 day delivery.',
    keyBenefits: [
      'Rapid 3 to 5 business day transit from Jaipur to Singapore',
      'Small batch ordering with low ₹3,000 MOV — perfect for testing fast trends',
      'Premium micro-plating suitable for humid tropical weather',
      'Live WhatsApp video call inspection prior to dispatch'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Select Styles',
        description: 'Choose earrings, necklaces, bangles, and bridal sets from our catalogue.'
      },
      {
        number: '02',
        title: 'Video Call Inspection',
        description: 'Inspect actual physical items in real time over WhatsApp video call.'
      },
      {
        number: '03',
        title: 'Export Packaging',
        description: 'Secure moisture-sealed zip pouches inside reinforced cartons.'
      },
      {
        number: '04',
        title: 'Doorstep Delivery in Singapore',
        description: 'Prompt delivery via DHL Express directly to your store or residence.'
      }
    ],
    customsFAQ: [
      {
        q: 'How fast is shipment to Singapore?',
        a: 'Due to daily flight connectivity, parcels arrive at your Singapore doorstep within 3 to 5 business days.'
      },
      {
        q: 'Can I request customized packaging or barcodes?',
        a: 'Yes, we can provide customized barcoding and packaging arrangements for repeat wholesale clients.'
      }
    ]
  }
}

export function getCountryBySlug(slug: string): CountryWholesaleInfo {
  const normalized = slug.toLowerCase().trim()
  if (internationalCountries[normalized]) {
    return internationalCountries[normalized]
  }

  // Fallback for any other country
  const cleanName = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    slug,
    country: cleanName,
    flag: 'https://flagcdn.com/w80/un.png',
    currency: 'USD ($)',
    minOrderValue: '₹3,000 (~$36 USD)',
    deliveryTime: '4 to 8 Business Days',
    courierPartner: 'FedEx International Priority & DHL Express',
    customsInfo: 'Full commercial invoice with HSN code 711790 (Imitation Jewellery) provided for seamless customs clearance.',
    popular: false,
    tagline: `Direct Jaipur Manufacturer Wholesale to ${cleanName} Jewellers`,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop',
    aboutCountryExport: `We export directly from our Jaipur foundry to retail jewellers, online boutiques, and bridal stylists in ${cleanName}. Every piece is inspected via live video call and packed in 5-ply export master cartons with door-to-door air cargo tracking.`,
    keyBenefits: [
      `Doorstep delivery to ${cleanName} via DHL / FedEx air cargo`,
      'Wholesale factory pricing directly from our Jaipur foundry',
      'Low minimum order value of ₹3,000 (~$36 USD)',
      'Live WhatsApp video call inspection before dispatch'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Select Designs',
        description: 'Choose your designs from 5,000+ codes on our website catalogue.'
      },
      {
        number: '02',
        title: 'Live Video Inspection',
        description: 'Verify piece quality and finish on a live WhatsApp video call.'
      },
      {
        number: '03',
        title: 'Export Packing',
        description: 'Packed in moisture-proof pouches and 5-ply export master cartons.'
      },
      {
        number: '04',
        title: 'Doorstep Delivery',
        description: `Delivered directly to your door in ${cleanName} with real-time tracking.`
      }
    ],
    customsFAQ: [
      {
        q: `How does delivery to ${cleanName} work?`,
        a: `Orders are dispatched via FedEx or DHL Express air cargo with full commercial invoices and tracking numbers.`
      },
      {
        q: 'What is the minimum order value?',
        a: 'The minimum order value is just ₹3,000 (~$36 USD). You can mix any styles across all categories.'
      }
    ]
  }
}
