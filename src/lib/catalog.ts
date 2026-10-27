import catalogData from '@/data/catalog.json'

export interface ProductImage {
  id: string
  code: string
  rawFilename: string
  src: string
}

export interface Subcategory {
  slug: string
  name: string
  description: string
  parentSlug: string
  parentName: string
  coverImage: string
  itemCount: number
  images: ProductImage[]
}

export interface Category {
  slug: string
  aliases: string[]
  name: string
  description: string
  hasSubcategories: boolean
  coverImage: string
  totalItems: number
  subcategories?: Subcategory[]
  images?: ProductImage[]
}

const categories: Category[] = catalogData as Category[]

// Quick lookup map including aliases
const slugMap = new Map<string, Category>()

categories.forEach((cat) => {
  slugMap.set(cat.slug.toLowerCase(), cat)
  cat.aliases.forEach((alias) => {
    slugMap.set(alias.toLowerCase(), cat)
  })
})

export function getAllCategories(): Category[] {
  return categories
}

export function getCategoryBySlug(slug: string): Category | undefined {
  if (!slug) return undefined
  const normalized = decodeURIComponent(slug).toLowerCase().trim()
  return slugMap.get(normalized)
}

export function getSubcategory(
  categorySlug: string,
  subSlug: string
): { category: Category; subcategory: Subcategory } | undefined {
  const cat = getCategoryBySlug(categorySlug)
  if (!cat || !cat.subcategories) return undefined

  const normSub = decodeURIComponent(subSlug).toLowerCase().trim()
  const sub = cat.subcategories.find(
    (s) => s.slug.toLowerCase() === normSub || s.name.toLowerCase() === normSub
  )

  if (!sub) return undefined
  return { category: cat, subcategory: sub }
}

export function findCategoryOrSubcategory(slug: string): {
  type: 'category-with-subs' | 'category-direct' | 'subcategory'
  category: Category
  subcategory?: Subcategory
} | undefined {
  const norm = decodeURIComponent(slug).toLowerCase().trim()

  // 1. Check if it's a main category
  const mainCat = slugMap.get(norm)
  if (mainCat) {
    if (mainCat.hasSubcategories) {
      return { type: 'category-with-subs', category: mainCat }
    }
    return { type: 'category-direct', category: mainCat }
  }

  // 2. Check if it's a subcategory slug directly (e.g., /collections/meenakari-earrings)
  for (const cat of categories) {
    if (cat.subcategories) {
      const sub = cat.subcategories.find((s) => s.slug.toLowerCase() === norm)
      if (sub) {
        return { type: 'subcategory', category: cat, subcategory: sub }
      }
    }
  }

  return undefined
}
