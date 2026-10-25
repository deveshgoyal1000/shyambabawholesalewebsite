import type { CollectionConfig } from 'payload'

export const Banners: CollectionConfig = {
  slug: 'banners',
  labels: {
    singular: 'Banner',
    plural: 'Banners',
  },
  admin: {
    useAsTitle: 'heading',
    defaultColumns: ['heading', 'isActive', 'displayOrder'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
    {
      name: 'desktopImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Desktop Image',
      required: true,
      admin: {
        description: 'Recommended: 1920 x 700 px',
      },
    },
    {
      name: 'mobileImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Mobile Image',
      admin: {
        description: 'Recommended: 768 x 500 px. If blank, desktop image is used.',
      },
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Text',
      admin: {
        description: 'e.g. Shop Now, Explore Collection',
      },
    },
    {
      name: 'buttonUrl',
      type: 'text',
      label: 'Button Destination URL',
      admin: {
        description: 'e.g. /products or /categories/earrings',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active (Show on website)',
      defaultValue: true,
    },
    {
      name: 'displayOrder',
      type: 'number',
      label: 'Display Order',
      defaultValue: 0,
      admin: {
        description: 'Lower numbers appear first',
      },
    },
  ],
}
