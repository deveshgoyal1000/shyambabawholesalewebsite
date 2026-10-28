'use client'

import React, { useState } from 'react'
import { Puck, type Data } from '@measured/puck'
import '@measured/puck/puck.css'
import { puckConfig, type ComponentProps } from '@/puck.config'

const initialData: Data<ComponentProps> = {
  content: [
    {
      type: 'AnnouncementBarBlock',
      props: {
        id: 'announcement-1',
        highlight: 'Low MOV ₹3,000 / $50',
        text: 'Direct Jaipur Manufacturer Wholesale Pricing',
        phoneNumber: '+91 96808 65791',
      },
    },
    {
      type: 'HeroBannerBlock',
      props: {
        id: 'hero-1',
        headlineLine1: "We Don't Source.",
        headlineLine2: 'We Are Manufacture.',
        description:
          'From our manufacturing unit in Jaipur, every piece is designed, crafted and quality-checked by our skilled artisans.',
        badge1: '50+ Countries Direct Export',
        badge2: '100% Insured Air Cargo',
        badge3: 'Customs Clear Documentation',
        buttonText: 'Explore Wholesale Collections',
        buttonLink: '/collections/all',
      },
    },
    {
      type: 'CategoryBannerBlock',
      props: {
        id: 'category-1',
        title: 'Earrings Collection',
        badge: 'Direct Factory Wholesale',
      },
    },
    {
      type: 'JewelleryCardBlock',
      props: {
        id: 'card-1',
        name: 'American Diamond Earrings',
        code: 'SB-450D7AF5',
        imageUrl:
          '/images/catalog/earrings/american-diamond-earrings/american-diamond-earrings-001.jpg',
      },
    },
    {
      type: 'CallToActionBlock',
      props: {
        id: 'cta-1',
        title: 'Boost your sales with Shyambaba’s premium brass earrings',
        description:
          'Join thousands of retailers worldwide who trust SHYAMBABA for premium quality & designer brass jewellery.',
        buttonText: 'Order on WhatsApp',
        whatsappText:
          'Hello Shyambaba Wholesale, I want to discuss wholesale catalog.',
      },
    },
  ],
  root: {
    props: {
      title: 'Shyambaba Wholesale Demo',
    },
  },
}

export default function EditorPage() {
  const [data, setData] = useState<Data<ComponentProps>>(initialData)
  const [saveStatus, setSaveStatus] = useState<string>('')

  const handlePublish = async (savedData: Data<ComponentProps>) => {
    setData(savedData)
    setSaveStatus('✓ Changes published successfully!')
    setTimeout(() => setSaveStatus(''), 4000)
  }

  return (
    <div className="w-full h-screen flex flex-col bg-neutral-900">
      {saveStatus && (
        <div className="fixed top-4 right-4 z-50 bg-emerald-600 text-white font-semibold px-4 py-2 rounded-lg shadow-lg text-sm animate-fade-in">
          {saveStatus}
        </div>
      )}
      <div className="flex-1 overflow-hidden">
        <Puck
          config={puckConfig}
          data={data}
          onPublish={handlePublish}
        />
      </div>
    </div>
  )
}
