"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

const insights = [
  {
    title: "AI Change Readiness Guide",
    description: "Navigate AI transformation with confidence. Discover data-driven insights and practical strategies to help your people adopt GenAI solutions while maximizing opportunities and managing potential risks.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
    color: "from-[#007b8a]/90 to-[#5b4b82]/90"
  },
  {
    title: "ERP Success Through Change Management",
    description: "Drive successful ERP adoption with proven change management strategies. Learn how organizations achieve better outcomes and higher user acceptance through structured, people-focused implementation approaches.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    color: "from-[#1e3a5f]/90 to-[#5b4b82]/90"
  }
]

export function InsightsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-[#1e3a5f] text-center mb-12">
          Insights
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          {insights.map((insight, index) => (
            <div 
              key={index}
              className="relative rounded-sm overflow-hidden h-64 group"
            >
              {/* Background image */}
              <Image
                src={insight.image}
                alt={insight.title}
                fill
                className="object-cover"
              />
              
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${insight.color}`} />
              
              {/* Content */}
              <div className="relative h-full flex">
                {/* Left side - image peek */}
                <div className="w-1/3" />
                
                {/* Right side - content */}
                <div className="w-2/3 p-6 flex flex-col justify-center text-white">
                  <h3 className="text-xl font-semibold mb-3">{insight.title}</h3>
                  <p className="text-sm opacity-90 mb-4 line-clamp-4">{insight.description}</p>
                  <div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-white text-white hover:bg-white hover:text-[#1e3a5f] uppercase text-xs tracking-wide"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#1e3a5f]" />
          <div className="w-2 h-2 rounded-full bg-[#ccc]" />
          <div className="w-2 h-2 rounded-full bg-[#ccc]" />
        </div>
        
        <div className="text-center">
          <Button 
            className="bg-[#5b4b82] hover:bg-[#4a3d6b] text-white uppercase text-sm tracking-wide"
          >
            Explore Prosci Insights
          </Button>
        </div>
      </div>
    </section>
  )
}
