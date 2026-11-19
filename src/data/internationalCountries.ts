export interface CountryWholesaleInfo {
  slug: string
  country: string
  shortName: string
  flagEmoji: string
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
    country: 'USA',
    shortName: 'USA',
    flagEmoji: '🇺🇸',
    flag: 'https://flagcdn.com/w80/us.png',
    currency: 'USD ($)',
    minOrderValue: '₹20,000 (~$240 USD)',
    deliveryTime: '4 to 6 Business Days',
    courierPartner: 'FedEx & DHL Express',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop',
    overviewText: 'Supplying Indian jewellery boutiques, flea-market sellers, and online Etsy & Shopify stores across California, Texas, New York, New Jersey, and Illinois. Shipped with full commercial invoices for duty-free US clearance on orders under $800.',
  },

  'usa': {
    slug: 'usa',
    country: 'USA',
    shortName: 'USA',
    flagEmoji: '🇺🇸',
    flag: 'https://flagcdn.com/w80/us.png',
    currency: 'USD ($)',
    minOrderValue: '₹20,000 (~$240 USD)',
    deliveryTime: '4 to 6 Business Days',
    courierPartner: 'FedEx & DHL Express',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop',
    overviewText: 'Supplying Indian jewellery boutiques, flea-market sellers, and online Etsy & Shopify stores across California, Texas, New York, New Jersey, and Illinois. Shipped with full commercial invoices for duty-free US clearance on orders under $800.',
  },

  'united-kingdom': {
    slug: 'united-kingdom',
    country: 'UK',
    shortName: 'UK',
    flagEmoji: '🇬🇧',
    flag: 'https://flagcdn.com/w80/gb.png',
    currency: 'GBP (£)',
    minOrderValue: '₹20,000 (~£190 GBP)',
    deliveryTime: '4 to 6 Business Days',
    courierPartner: 'DHL Express UK',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1611591475870-0f2d80d21051?q=80&w=1200&auto=format&fit=crop',
    overviewText: 'Supplying South Asian bridal boutiques and high street retailers across London (Southall, Wembley), Leicester, Birmingham, and Manchester with skin-safe, nickel-free brass jewellery.',
  },

  'uk': {
    slug: 'uk',
    country: 'UK',
    shortName: 'UK',
    flagEmoji: '🇬🇧',
    flag: 'https://flagcdn.com/w80/gb.png',
    currency: 'GBP (£)',
    minOrderValue: '₹20,000 (~£190 GBP)',
    deliveryTime: '4 to 6 Business Days',
    courierPartner: 'DHL Express UK',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1611591475870-0f2d80d21051?q=80&w=1200&auto=format&fit=crop',
    overviewText: 'Supplying South Asian bridal boutiques and high street retailers across London (Southall, Wembley), Leicester, Birmingham, and Manchester with skin-safe, nickel-free brass jewellery.',
  },

  'canada': {
    slug: 'canada',
    country: 'Canada',
    shortName: 'Canada',
    flagEmoji: '🇨🇦',
    flag: 'https://flagcdn.com/w80/ca.png',
    currency: 'CAD ($)',
    minOrderValue: '₹20,000 (~$325 CAD)',
    deliveryTime: '4 to 7 Business Days',
    courierPartner: 'FedEx & DHL Express Canada',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1200&auto=format&fit=crop',
    overviewText: 'Delivering to Indian jewellery retailers and bridal stylists across the Greater Toronto Area (Brampton, Mississauga), Surrey (BC), Calgary, and Edmonton.',
  },

  'dubai': {
    slug: 'dubai',
    country: 'UAE',
    shortName: 'UAE',
    flagEmoji: '🇦🇪',
    flag: 'https://flagcdn.com/w80/ae.png',
    currency: 'AED (د.إ)',
    minOrderValue: '₹20,000 (~880 AED)',
    deliveryTime: '3 to 5 Business Days',
    courierPartner: 'Aramex & DHL Express',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1200&auto=format&fit=crop',
    overviewText: 'Frequent direct flight shipments to Indian jewellery boutiques in Deira Gold Souk, Bur Dubai, Meena Bazaar, and Sharjah with authentic 22K gold look plating.',
  },

  'uae': {
    slug: 'uae',
    country: 'UAE',
    shortName: 'UAE',
    flagEmoji: '🇦🇪',
    flag: 'https://flagcdn.com/w80/ae.png',
    currency: 'AED (د.إ)',
    minOrderValue: '₹20,000 (~880 AED)',
    deliveryTime: '3 to 5 Business Days',
    courierPartner: 'Aramex & DHL Express',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1200&auto=format&fit=crop',
    overviewText: 'Frequent direct flight shipments to Indian jewellery boutiques in Deira Gold Souk, Bur Dubai, Meena Bazaar, and Sharjah with authentic 22K gold look plating.',
  },

  'australia': {
    slug: 'australia',
    country: 'Australia',
    shortName: 'Australia',
    flagEmoji: '🇦🇺',
    flag: 'https://flagcdn.com/w80/au.png',
    currency: 'AUD ($)',
    minOrderValue: '₹20,000 (~$365 AUD)',
    deliveryTime: '5 to 7 Business Days',
    courierPartner: 'DHL Express Australia',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop',
    overviewText: 'Serving boutique owners and exhibition sellers across Sydney (Harris Park, Parramatta), Melbourne, and Brisbane with lead-free, nickel-free brass jewellery. Duty-free threshold under $1,000 AUD.',
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
    shortName: cleanName,
    flagEmoji: '🌍',
    flag: 'https://flagcdn.com/w80/un.png',
    currency: 'USD ($)',
    minOrderValue: '₹20,000 (~$240 USD)',
    deliveryTime: '4 to 8 Business Days',
    courierPartner: 'FedEx & DHL Express',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-crafting-a-ring-41584-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop',
    overviewText: `Direct Jaipur manufacturer export to retail jewellers, online boutiques, and bridal stylists in ${cleanName}. Every piece is inspected via live video call before dispatch.`,
  }
}
