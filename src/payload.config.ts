import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Categories } from './collections/Categories'
import { Products } from './collections/Products'
import { Banners } from './collections/Banners'
import { Pages } from './collections/Pages'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    suppressHydrationWarning: true,
    meta: {
      titleSuffix: '— Shyambaba Wholesale Jewellery CMS',
    },
  },
  collections: [
    Users,
    Media,
    Categories,
    Products,
    Banners,
    Pages,
  ],
  globals: [
    SiteSettings,
  ],
  sharp,
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'shyambaba-secret',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./shyambaba.db',
    },
  }),
  upload: {
    limits: {
      fileSize: 10000000, // 10MB
    },
  },
})
