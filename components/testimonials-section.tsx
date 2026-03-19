"use client"

import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "A Prosci license was critical to building enterprise-wide change capability. The license gave us both the structure to standardize Prosci's change management approach and the flexibility to integrate change management into our established strategy, leadership development and project process.",
    author: "Carla Howard",
    title: "Director",
    company: "Change Management Centre of Excellence, Anet"
  },
  {
    quote: "I think what really made our partnership with Prosci a success is we stuck to it. We said, 'This is a journey, and we want to do this with you.' It's not a one-day thing.",
    author: "Roel Mous",
    title: "Sr. Manager",
    company: "Operations Transformation Office, Thermo Fisher Scientific"
  },
  {
    quote: "Change management creates a competitive advantage for our customers, and it achieves business outcomes and ROI at a greater rate than we would have seen otherwise. It made sense to move to a globally recognized methodology. We call Prosci the global leader in the professional discipline of change management.",
    author: "Alistair G. Lowe-Norris",
    title: "Global Director of Adoption & Change Management Strategy",
    company: "Microsoft"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#f5f0e8]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-[#1e3a5f] text-center mb-12">
          Testimonials
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-sm shadow-sm border-t-4 border-[#c4a052]"
            >
              <p className="text-sm text-[#4a4a4a] leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-[#1e3a5f]">— {testimonial.author}</p>
                <p className="text-xs text-[#666]">{testimonial.title}</p>
                <p className="text-xs text-[#666]">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            className="border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white uppercase text-sm tracking-wide"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
