"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

const galleryItems = [
  {
    title: "Workshop Facilitation",
    image: "/images/hero-background.webp",
  },
  {
    title: "Client Engagement",
    image: "/images/prosci-malaysia-logo.jpg",
  },
  {
    title: "Training Cohort",
    image: "/images/kpintar-prosci-logo.png",
  },
  {
    title: "Leadership Alignment",
    image: "/images/hero-background.webp",
  },
]

export function InsightsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-[#1e3a5f] text-center mb-12">
          Gallery
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="relative rounded-sm overflow-hidden h-56 group"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-sm font-semibold tracking-wide uppercase">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="bg-[#5b4b82] hover:bg-[#4a3d6b] text-white uppercase text-sm tracking-wide"
          >
            View Gallery
          </Button>
        </div>
      </div>
    </section>
  )
}
