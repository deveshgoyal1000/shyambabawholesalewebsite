export interface CountryWholesaleInfo {
  slug: string
  country: string
  flag: string
  currency: string
  minOrderValue: string
  deliveryTime: string
  courierPartner: string
  videoUrl: string
  videoPoster: string
  overviewText: string
}

export const internationalCountries: Record<string, CountryWholesaleInfo> = {
  'united-states': {
    slug: 'united-states',
    country: 'United States',
    flag: 'https://flagcdn.com/w80/us.png',
    currency: 'USD ($)',
    minOrderValue: '₹3,000 (~$36 USD)',
    deliveryTime: '4 to 6 Business Days',
    courierPartner: 'FedEx & DHL Express',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop',
    overviewText: 'Supplying Indian jewellery boutiques, flea-market sellers, and online Etsy & Shopify stores across California, Texas, New York, New Jersey, and Illinois. Shipped with full commercial invoices for duty-free US clearance on orders under $800.',
  },

  'united-kingdom': {
    slug: 'united-kingdom',
    country: 'United Kingdom',
    flag: 'https://flagcdn.com/w80/gb.png',
    currency: 'GBP (£)',
    minOrderValue: '₹3,000 (~£29 GBP)',
    deliveryTime: '4 to 6 Business Days',
    courierPartner: 'DHL Express UK',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1611591475870-0f2d80d21051?q=80&w=1200&auto=format&fit=crop',
    overviewText: 'Supplying South Asian bridal boutiques and high street retailers across London (Southall, Wembley), Leicester, Birmingham, and Manchester with skin-safe, nickel-free brass jewellery.',
  },

  'bangladesh': {
    slug: 'bangladesh',
    country: 'Bangladesh',
    flag: 'https://flagcdn.com/w80/bd.png',
    currency: 'BDT (৳)',
    minOrderValue: '₹3,000 (~৳4,200 BDT)',
    deliveryTime: '3 to 5 Business Days',
    courierPartner: 'Dhaka Air Cargo & Express',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop',
    overviewText: 'Serving jewellery retailers in Gausia Market, New Market Dhaka, Sylhet, and Chittagong with popular matte gold bridal jewellery and lightweight daily wear jhumkis.',
  },

  'canada': {
    slug: 'canada',
    country: 'Canada',
    flag: 'https://flagcdn.com/w80/ca.png',
    currency: 'CAD ($)',
    minOrderValue: '₹3,000 (~$49 CAD)',
    deliveryTime: '4 to 7 Business Days',
    courierPartner: 'FedEx & DHL Express Canada',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1200&auto=format&fit=crop',
    overviewText: 'Delivering to Indian jewellery retailers and bridal stylists across the Greater Toronto Area (Brampton, Mississauga), Surrey (BC), Calgary, and Edmonton.',
  },

  'dubai': {
    slug: 'dubai',
    country: 'Dubai (UAE)',
    flag: 'https://flagcdn.com/w80/ae.png',
    currency: 'AED (د.إ)',
    minOrderValue: '₹3,000 (~132 AED)',
    deliveryTime: '3 to 5 Business Days',
    courierPartner: 'Aramex & DHL Express',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1200&auto=format&fit=crop',
    overviewText: 'Frequent direct flight shipments to Indian jewellery boutiques in Deira Gold Souk, Bur Dubai, Meena Bazaar, and Sharjah with authentic 22K gold look plating.',
  },

  'malaysia': {
    slug: 'malaysia',
    country: 'Malaysia',
    flag: 'https://flagcdn.com/w80/my.png',
    currency: 'MYR (RM)',
    minOrderValue: '₹3,000 (~170 MYR)',
    deliveryTime: '4 to 6 Business Days',
    courierPartner: 'DHL Express Malaysia',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop',
    overviewText: 'Exporting traditional temple jewellery, antique jhumkis, and South Indian bridal designs to Little India boutiques in Brickfields, Klang, and Penang.',
  },

  'australia': {
    slug: 'australia',
    country: 'Australia',
    flag: 'https://flagcdn.com/w80/au.png',
    currency: 'AUD ($)',
    minOrderValue: '₹3,000 (~$55 AUD)',
    deliveryTime: '5 to 7 Business Days',
    courierPartner: 'DHL Express Australia',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop',
    overviewText: 'Serving boutique owners and exhibition sellers across Sydney (Harris Park, Parramatta), Melbourne, and Brisbane with lead-free, nickel-free brass jewellery. Duty-free threshold under $1,000 AUD.',
  },

  'singapore': {
    slug: 'singapore',
    country: 'Singapore',
    flag: 'https://flagcdn.com/w80/sg.png',
    currency: 'SGD ($)',
    minOrderValue: '₹3,000 (~$48 SGD)',
    deliveryTime: '3 to 5 Business Days',
    courierPartner: 'DHL Express Singapore',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop',
    overviewText: 'Supplying retail boutiques in Little India Serangoon Road and online stores in Singapore with quick 3 to 5-day delivery and low MOV ₹3,000 to test fast trends.',
  },
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
    courierPartner: 'FedEx & DHL Express',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop',
    overviewText: `Direct Jaipur manufacturer export to retail jewellers, online boutiques, and bridal stylists in ${cleanName}. Every piece is inspected via live video call before dispatch.`,
  }
}
