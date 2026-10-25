import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: 'Product',
    plural: 'Products',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'productCode', 'category', 'availability', '_status'],
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Product Name',
      required: true,
    },
    {
      name: 'productCode',
      type: 'text',
      label: 'Unique Product Code',
      required: true,
      unique: true,
      admin: {
        description: 'e.g. ER-001, NK-045 — displayed instead of price',
      },
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier (auto-generate from name)',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description',
    },
    {
      name: 'images',
      type: 'array',
      label: 'Product Images',
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Image',
        },
        {
          name: 'altText',
          type: 'text',
          label: 'Alt Text',
        },
        {
          name: 'isPrimary',
          type: 'checkbox',
          label: 'Primary Image',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      label: 'Category',
      hasMany: true,
      required: true,
    },
    {
      name: 'specifications',
      type: 'array',
      label: 'Product Specifications',
      admin: {
        description: 'Add key-value specifications like Material, Weight, Size, etc.',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Specification Label',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          label: 'Specification Value',
          required: true,
        },
      ],
    },
    {
      name: 'availability',
      type: 'select',
      label: 'Availability Status',
      required: true,
      defaultValue: 'in_stock',
      options: [
        { label: 'In Stock', value: 'in_stock' },
        { label: 'Out of Stock', value: 'out_of_stock' },
        { label: 'Made to Order', value: 'made_to_order' },
        { label: 'Discontinued', value: 'discontinued' },
      ],
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      label: 'Featured Product',
      defaultValue: false,
    },
    {
      name: 'isNewArrival',
      type: 'checkbox',
      label: 'New Arrival',
      defaultValue: false,
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Tags',
      fields: [
        {
          name: 'tag',
          type: 'text',
          label: 'Tag',
        },
      ],
    },
    {
      name: 'seoTitle',
      type: 'text',
      label: 'SEO Title',
      admin: {
        description: 'Leave blank to use product name',
      },
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'Meta Description',
    },
  ],
}
