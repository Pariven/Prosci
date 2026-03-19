"use client"

import { Button } from "@/components/ui/button"

export function MethodologySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1e3a5f] mb-6">
              The Prosci Methodology
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-4">
              Used by thousands of change leaders around the world, our methodology is a results-oriented approach to managing change based on the central idea that change happens one person at a time.
            </p>
            <p className="text-[#4a4a4a] leading-relaxed mb-8">
              The methodology is designed to provide the structure necessary to drive change forward, no matter the roadblocks, while also being adaptable to each organization and individual's specific circumstances. Our approach adapts to achieve success through all kinds of change and in any type or size of organization.
            </p>
            <Button 
              className="bg-[#1e3a5f] hover:bg-[#2a4a6f] text-white uppercase text-sm tracking-wide"
            >
              Learn More
            </Button>
          </div>
          
          {/* Right Content - Methodology Diagram */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              {/* Outer ring labels */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 text-center">
                <span className="text-xs font-semibold text-[#1e3a5f]">Prosci</span>
                <br />
                <span className="text-xs font-semibold text-[#1e3a5f]">Methodology</span>
              </div>
              
              {/* Main circle */}
              <svg viewBox="0 0 300 300" className="w-full h-full">
                {/* Outer ring */}
                <circle cx="150" cy="150" r="140" fill="none" stroke="#e8e8e8" strokeWidth="2" />
                
                {/* Phase segments */}
                {/* Phase 3 - Top right */}
                <path 
                  d="M 150 30 A 120 120 0 0 1 260 150 L 200 150 A 60 60 0 0 0 150 90 Z" 
                  fill="#007b8a"
                />
                <text x="195" y="100" fill="white" fontSize="12" fontWeight="bold">Phase</text>
                <text x="205" y="115" fill="white" fontSize="14" fontWeight="bold">3</text>
                
                {/* Phase 2 - Bottom right */}
                <path 
                  d="M 260 150 A 120 120 0 0 1 150 270 L 150 210 A 60 60 0 0 0 200 150 Z" 
                  fill="#1e3a5f"
                />
                <text x="195" y="200" fill="white" fontSize="12" fontWeight="bold">Phase</text>
                <text x="205" y="215" fill="white" fontSize="14" fontWeight="bold">2</text>
                
                {/* Phase 1 - Bottom left */}
                <path 
                  d="M 150 270 A 120 120 0 0 1 40 150 L 100 150 A 60 60 0 0 0 150 210 Z" 
                  fill="#5b4b82"
                />
                <text x="85" y="200" fill="white" fontSize="12" fontWeight="bold">Phase</text>
                <text x="95" y="215" fill="white" fontSize="14" fontWeight="bold">1</text>
                
                {/* Connecting segment - Top left */}
                <path 
                  d="M 40 150 A 120 120 0 0 1 150 30 L 150 90 A 60 60 0 0 0 100 150 Z" 
                  fill="#c4a052"
                />
                
                {/* Center circle with ADKAR */}
                <circle cx="150" cy="150" r="50" fill="white" stroke="#1e3a5f" strokeWidth="2" />
                <text x="150" y="145" textAnchor="middle" fill="#1e3a5f" fontSize="10" fontWeight="bold">★</text>
                <text x="150" y="160" textAnchor="middle" fill="#1e3a5f" fontSize="12" fontWeight="bold">ADKAR</text>
              </svg>
              
              {/* Side labels */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-right">
                <span className="text-[10px] text-[#666] block">Adoption</span>
                <span className="text-[10px] text-[#666] block">Usage</span>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-left">
                <span className="text-[10px] text-[#666] block">Measure Outcomes</span>
                <span className="text-[10px] text-[#666] block">Sustain Outcomes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
