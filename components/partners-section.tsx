"use client"

import { useEffect, useRef } from "react"

const partners = [
  { name: "Gonzaga University", text: "GONZAGA" },
  { name: "JM Family Enterprises", text: "JM Family" },
  { name: "Cepheid", text: "Cepheid" },
  { name: "PepsiCo", text: "PEPSICO" },
  { name: "Harvard Business School", text: "Harvard Business School" },
  { name: "Microsoft", text: "Microsoft" },
  { name: "Accenture", text: "Accenture" },
  { name: "Deloitte", text: "Deloitte" },
]

export function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 0.5
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] text-center mb-12">
          Our Partners Across the Globe
        </h2>

        <div
          ref={scrollRef}
          className="flex gap-12 overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
        >
          {/* Duplicate the partners for seamless loop */}
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center min-w-[150px] h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            >
              <span className="text-lg font-semibold text-[#4a5568] whitespace-nowrap">
                {partner.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
