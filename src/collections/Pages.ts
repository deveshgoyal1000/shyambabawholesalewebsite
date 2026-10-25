import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', '_status'],
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Page Title',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      required: true,
      unique: true,
      admin: {
        description: 'URL path for this page (e.g. about-us, contact)',
      },
    },
    {
      name: 'seoTitle',
      type: 'text',
      label: 'SEO Title',
      admin: {
        description: 'Shown in browser tab and search results. Leave blank to use page title.',
      },
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'Meta Description',
      admin: {
        description: 'Short description shown in search results (150–160 characters recommended)',
      },
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Page Content',
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Content Sections',
      admin: {
        description: 'Reusable sections that build the page layout',
      },
      fields: [
        {
          name: 'sectionType',
          type: 'select',
          label: 'Section Type',
          options: [
            { label: 'Text Block', value: 'text' },
            { label: 'Image + Text', value: 'image_text' },
            { label: 'Full Width Image', value: 'full_image' },
            { label: 'Call to Action', value: 'cta' },
            { label: 'FAQ', value: 'faq' },
            { label: 'Team / People', value: 'team' },
          ],
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Section Heading',
        },
        {
          name: 'body',
          type: 'richText',
          label: 'Section Body',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Section Image',
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'Button Text',
        },
        {
          name: 'buttonUrl',
          type: 'text',
          label: 'Button URL',
        },
      ],
    },
  ],
}
