"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const experts = [
  {
    name: "Shane Tyrell",
    title: "Head of Service Delivery",
    location: "Australia",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Euridice Negreios",
    title: "Service Manager",
    location: "Mexico & Central America",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Debbie McCarthy",
    title: "Vice President Advisory Services",
    location: "Prosci Global Coverage",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
  }
]

export function ExpertsSection() {
  return (
    <section className="py-20 bg-[#f8f6fb]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-[#1e3a5f] text-center mb-4">
          Your Change Experts
        </h2>
        <p className="text-center text-[#666] max-w-2xl mx-auto mb-12">
          With over 30 years of experience studying people and change, our team has an unprecedented understanding of how to thrive through transformation.
        </p>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 text-[#666] hover:text-[#1e3a5f] transition-colors hidden md:block">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 text-[#666] hover:text-[#1e3a5f] transition-colors hidden md:block">
            <ChevronRight className="w-8 h-8" />
          </button>
          
          {/* Expert cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {experts.map((expert, index) => (
              <div 
                key={index}
                className="bg-white rounded-sm shadow-sm overflow-hidden border-l-4 border-[#5b4b82]"
              >
                <div className="aspect-square relative">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-[#1e3a5f]">{expert.name}</h3>
                  <p className="text-sm text-[#666]">{expert.title}</p>
                  <p className="text-sm text-[#666]">{expert.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            className="border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white uppercase text-sm tracking-wide"
          >
            Find An Expert
          </Button>
        </div>
      </div>
    </section>
  )
}
