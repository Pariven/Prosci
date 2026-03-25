"use client"

import { Button } from "@/components/ui/button"

const upcomingEvents = [
  {
    title: "ACMC 2026",
    type: "Conference",
    description:
      "Join the ASEAN Change Management Conference for practical insights, industry perspectives, and regional networking.",
    cta: "Visit ACMC",
    href: "https://aseanchangemanagementconference.com",
  },
  {
    title: "UNSCRIPTED: Change Management @ Work",
    type: "Podcast",
    description:
      "Real conversations with practitioners and leaders sharing lessons, wins, and hard-earned change stories.",
    cta: "Explore Podcast",
    href: "/resources#podcast",
  },
  {
    title: "Live Webinar Series",
    type: "Webinar",
    description:
      "Attend upcoming webinars focused on organizational readiness, sponsorship, and people-first transformation strategies.",
    cta: "View Webinars",
    href: "/resources#webinars",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#f5f0e8]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-[#1e3a5f] text-center mb-12">
          Upcoming Events
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {upcomingEvents.map((event, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-sm shadow-sm border-t-4 border-[#c4a052]"
            >
              <p className="text-xs uppercase tracking-wider text-[#007b8a] font-semibold mb-3">
                {event.type}
              </p>
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">{event.title}</h3>
              <p className="text-sm text-[#4a4a4a] leading-relaxed mb-6">{event.description}</p>
              <div className="border-t pt-4">
                <a
                  href={event.href}
                  target={event.href.startsWith("http") ? "_blank" : undefined}
                  rel={event.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm font-semibold text-[#1e3a5f] hover:text-[#c4a052] transition-colors"
                >
                  {event.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            className="border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white uppercase text-sm tracking-wide"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  )
}
