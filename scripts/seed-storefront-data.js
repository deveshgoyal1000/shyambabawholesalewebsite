import { createClient } from '@libsql/client'

async function seed() {
  // Login to Payload API
  const loginRes = await fetch('http://localhost:3000/api/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'admin@shyambabawholesale.com', password: 'admin' })
  })
  const { token } = await loginRes.json()
  console.log('Login OK, seeding rich catalogue...')

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token
  }

  // Categories list matching krishazwholesale
  const categoriesToSeed = [
    { name: 'Premium Earrings', slug: 'premium-earrings', displayOrder: 1, showInNav: true, featureOnHomepage: true },
    { name: 'Silver Oxidised Earrings', slug: 'silver-earrings', displayOrder: 2, showInNav: true, featureOnHomepage: true },
    { name: 'Studs & Tops', slug: 'studs', displayOrder: 3, showInNav: true, featureOnHomepage: true },
    { name: 'Kundan Earrings', slug: 'kundan-earrings', displayOrder: 4, showInNav: true, featureOnHomepage: true },
    { name: 'New Arrivals', slug: 'new-arrivals', displayOrder: 5, showInNav: true, featureOnHomepage: true },
    { name: 'Anti Tarnish Collection', slug: 'anti-tarnish', displayOrder: 6, showInNav: true, featureOnHomepage: true },
    { name: 'Rajwadi Collection', slug: 'rajwadi', displayOrder: 7, showInNav: true, featureOnHomepage: true },
    { name: 'Ear-Chain (Kanchain)', slug: 'ear-chain', displayOrder: 8, showInNav: true, featureOnHomepage: true },
    { name: 'Bangles & Kadas', slug: 'bangles', displayOrder: 9, showInNav: true, featureOnHomepage: true },
    { name: 'Bridal Necklaces & Chokers', slug: 'necklaces', displayOrder: 10, showInNav: true, featureOnHomepage: true },
  ]

  const categoryMap = {}

  for (const cat of categoriesToSeed) {
    const existing = await fetch(`http://localhost:3000/api/categories?where[slug][equals]=${cat.slug}`, { headers })
    const data = await existing.json()
    if (data.docs && data.docs.length > 0) {
      categoryMap[cat.slug] = data.docs[0].id
      console.log(`Category exists: ${cat.name} (ID: ${data.docs[0].id})`)
    } else {
      const createRes = await fetch('http://localhost:3000/api/categories', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          ...cat,
          description: `Handcrafted wholesale ${cat.name} from our Jaipur manufacturing unit.`
        })
      })
      const newCat = await createRes.json()
      categoryMap[cat.slug] = newCat.doc.id
      console.log(`Created Category: ${cat.name} (ID: ${newCat.doc.id})`)
    }
  }

  // Sample Products with codes
  const productsToSeed = [
    {
      name: 'Mayurika Peacock Golden Jhumki Earrings',
      productCode: 'ER-4272',
      slug: 'mayurika-peacock-golden-jhumki-earrings',
      category: [categoryMap['premium-earrings'] || categoryMap['new-arrivals']],
      availability: 'in_stock',
      isFeatured: true,
      isNewArrival: true,
      specifications: [
        { label: 'Metal Base', value: 'Virgin Brass (Skin Friendly)' },
        { label: 'Plating', value: '22K Micro Gold Plating + Anti-Tarnish Lacquer' },
        { label: 'Stone / Pearls', value: 'Kundan & Natural Lustre Shell Pearls' },
        { label: 'Earring Type', value: 'Heavy Traditional Jhumka' },
        { label: 'Weight (Pair)', value: '38 grams' },
        { label: 'Minimum Order', value: '12 Pairs (Wholesale Pack)' }
      ]
    },
    {
      name: 'Reetu Royal Silver Oxidised Dangler Earrings',
      productCode: 'ER-4655',
      slug: 'reetu-royal-silver-oxidised-dangler-earrings',
      category: [categoryMap['silver-earrings'] || categoryMap['new-arrivals']],
      availability: 'in_stock',
      isFeatured: true,
      isNewArrival: true,
      specifications: [
        { label: 'Metal Base', value: 'High Density Brass' },
        { label: 'Plating', value: 'German Silver Oxidised Antique Finish' },
        { label: 'Stone Type', value: 'Emerald Green Synthetic Crystal' },
        { label: 'Length', value: '8.5 cm' },
        { label: 'Minimum Order', value: '12 Pairs' }
      ]
    },
    {
      name: 'Kishori Heritage Gold Plated Ear-Chain Set',
      productCode: 'ER-4800',
      slug: 'kishori-heritage-gold-plated-ear-chain-set',
      category: [categoryMap['ear-chain'] || categoryMap['rajwadi']],
      availability: 'in_stock',
      isFeatured: true,
      isNewArrival: true,
      specifications: [
        { label: 'Metal Base', value: 'Premium Alloy Brass' },
        { label: 'Plating', value: 'Antique 22K High Micron Gold' },
        { label: 'Chain Type', value: 'Triple Layer Pearl Kanchain' },
        { label: 'Occasion', value: 'Bridal, Wedding, Festive' },
        { label: 'Minimum Order', value: '6 Sets' }
      ]
    },
    {
      name: 'Padmavati Rajwadi Kundan Meenakari Choker Set',
      productCode: 'NK-1020',
      slug: 'padmavati-rajwadi-kundan-meenakari-choker-set',
      category: [categoryMap['necklaces'] || categoryMap['rajwadi']],
      availability: 'in_stock',
      isFeatured: true,
      isNewArrival: false,
      specifications: [
        { label: 'Metal Base', value: 'Cast Brass with Back Meenakari' },
        { label: 'Plating', value: 'Gold Micro Finish' },
        { label: 'Includes', value: 'Choker Necklace + Matching Earrings + Maang Tikka' },
        { label: 'Dori / Back', value: 'Adjustable Zari Thread Tassel' },
        { label: 'Minimum Order', value: '3 Sets' }
      ]
    },
    {
      name: 'Virasat Anti-Tarnish Daily Wear Studs (Assorted)',
      productCode: 'ST-3012',
      slug: 'virasat-anti-tarnish-daily-wear-studs',
      category: [categoryMap['studs'] || categoryMap['anti-tarnish']],
      availability: 'in_stock',
      isFeatured: false,
      isNewArrival: true,
      specifications: [
        { label: 'Metal Base', value: 'Medical-grade Brass' },
        { label: 'Technology', value: 'Advanced PVD Anti-Tarnish Seal (Water Resistant)' },
        { label: 'Stone', value: 'AAA Grade Cubic Zirconia' },
        { label: 'Minimum Order', value: '24 Pairs Assorted Box' }
      ]
    },
    {
      name: 'Meera Openable Temple Bangle Kada Pair',
      productCode: 'BG-2045',
      slug: 'meera-openable-temple-bangle-kada-pair',
      category: [categoryMap['bangles'] || categoryMap['rajwadi']],
      availability: 'in_stock',
      isFeatured: true,
      isNewArrival: false,
      specifications: [
        { label: 'Metal Base', value: 'Solid Brass Casting' },
        { label: 'Lock Type', value: 'Screw Lock / Openable' },
        { label: 'Plating', value: 'Temple Antique Matte Gold' },
        { label: 'Sizes Available', value: '2.4, 2.6, 2.8' },
        { label: 'Minimum Order', value: '6 Pairs' }
      ]
    }
  ]

  for (const prod of productsToSeed) {
    const existing = await fetch(`http://localhost:3000/api/products?where[productCode][equals]=${prod.productCode}`, { headers })
    const data = await existing.json()
    if (data.docs && data.docs.length > 0) {
      console.log(`Product ${prod.productCode} already exists`)
    } else {
      const createRes = await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          ...prod,
          images: [
            {
              image: 1, // Uses existing media ID 1
              altText: prod.name,
              isPrimary: true
            }
          ],
          _status: 'published'
        })
      })
      const newProd = await createRes.json()
      console.log(`Created Product ${prod.productCode}: ${prod.name}`)
    }
  }

  console.log('✅ Seeding completed successfully!')
}

seed().catch(console.error)
