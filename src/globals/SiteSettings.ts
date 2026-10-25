import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Global Site Settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      label: 'Site Name',
      defaultValue: 'Shyambaba Wholesale Jewellery',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
    },
    {
      name: 'favicon',
      type: 'upload',
      relationTo: 'media',
      label: 'Favicon',
    },
    {
      label: 'Contact Information',
      type: 'collapsible',
      fields: [
        {
          name: 'phone',
          type: 'text',
          label: 'Phone Number',
        },
        {
          name: 'whatsappNumber',
          type: 'text',
          label: 'WhatsApp Number',
          admin: {
            description: 'With country code, e.g. +919680865791',
          },
        },
        {
          name: 'email',
          type: 'email',
          label: 'Email Address',
        },
        {
          name: 'address',
          type: 'textarea',
          label: 'Business Address',
        },
      ],
    },
    {
      label: 'Social Media Links',
      type: 'collapsible',
      fields: [
        {
          name: 'instagram',
          type: 'text',
          label: 'Instagram URL',
        },
        {
          name: 'facebook',
          type: 'text',
          label: 'Facebook URL',
        },
        {
          name: 'youtube',
          type: 'text',
          label: 'YouTube URL',
        },
        {
          name: 'pinterest',
          type: 'text',
          label: 'Pinterest URL',
        },
      ],
    },
    {
      name: 'announcementBar',
      type: 'group',
      label: 'Announcement Bar',
      fields: [
        {
          name: 'isActive',
          type: 'checkbox',
          label: 'Show Announcement Bar',
          defaultValue: false,
        },
        {
          name: 'message',
          type: 'text',
          label: 'Announcement Message',
        },
        {
          name: 'linkText',
          type: 'text',
          label: 'Link Text',
        },
        {
          name: 'linkUrl',
          type: 'text',
          label: 'Link URL',
        },
      ],
    },
    {
      name: 'footerTagline',
      type: 'text',
      label: 'Footer Tagline',
    },
    {
      name: 'footerCopyright',
      type: 'text',
      label: 'Footer Copyright Text',
      defaultValue: '© 2024 Shyambaba Wholesale Jewellery. All rights reserved.',
    },
  ],
}
