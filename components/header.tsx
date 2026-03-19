"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronRight, Calendar, ShoppingCart, Globe, User } from "lucide-react"
import { useState } from "react"

export function Header() {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-end gap-4 py-2">
          <Link href="#" className="flex items-center gap-2 text-sm hover:text-[#c4a052] transition-colors">
            <ShoppingCart className="w-4 h-4" />
            Store Account
            <ChevronDown className="w-3 h-3" />
          </Link>
          <Link href="#" className="flex items-center gap-2 text-sm hover:text-[#c4a052] transition-colors">
            <Globe className="w-4 h-4" />
            English
            <ChevronDown className="w-3 h-3" />
          </Link>
          <Link href="#" className="flex items-center justify-center w-8 h-8 rounded-full border border-[#007b8a] hover:bg-[#007b8a] transition-colors">
            <User className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/kpintar-prosci-logo.png"
                alt="KPintar x Prosci Global Affiliate Network"
                width={200}
                height={50}
                className="object-contain"
                style={{ height: '48px', width: 'auto' }}
                loading="eager"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            <ChangeManagementDropdown />
            <MethodologyDropdown />
            <SolutionsDropdown />
            <ResourcesDropdown />
            <AboutUsDropdown />
          </nav>

          {/* Training Button */}
          <div className="hidden md:flex items-center">
            <Link 
              href="#" 
              className="flex items-center gap-2 bg-[#007b8a] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#006070] transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Training
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

function MethodologyDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  const methodologyLinks = [
    "Prosci Methodology Overview",
    "PCT Model",
    "ADKAR Model",
    "3-Phase Process"
  ]

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="flex items-center gap-1 text-[#1e3a5f] font-medium hover:text-[#c4a052] transition-colors"
      >
        Methodology
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-0 bg-white shadow-lg border border-gray-200 rounded-b-lg min-w-[280px] z-50">
          {/* Header Label */}
          <div className="px-4 py-2 border-b border-gray-100">
            <span className="inline-block bg-[#c4a052] text-white text-xs px-2 py-1 rounded">
              Methodology
            </span>
          </div>

          {/* Links */}
          <div className="px-4 py-4">
            <ul className="space-y-2">
              {methodologyLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-600 hover:text-[#c4a052] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

function ResourcesDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  const resourcesLinks = [
    "Overview",
    "Prosci Blog",
    "Live and On-Demand Webinars",
    "Podcasts",
    "Research Insights, Worksheets, and More",
    "Case Studies",
    "Research Opportunities"
  ]

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="flex items-center gap-1 text-[#1e3a5f] font-medium hover:text-[#c4a052] transition-colors"
      >
        Resources
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-0 bg-white shadow-lg border border-gray-200 rounded-b-lg min-w-[320px] z-50">
          {/* Header Label */}
          <div className="px-4 py-2 border-b border-gray-100">
            <span className="inline-block bg-[#c4a052] text-white text-xs px-2 py-1 rounded">
              Resources
            </span>
          </div>

          {/* Links */}
          <div className="px-4 py-4">
            <ul className="space-y-2">
              {resourcesLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-600 hover:text-[#c4a052] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

function AboutUsDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  const aboutLinks = [
    "Contact Us",
    "About Prosci",
    "Why Choose Prosci",
    "Our Team",
    "Global Coverage"
  ]

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="flex items-center gap-1 text-[#1e3a5f] font-medium hover:text-[#c4a052] transition-colors"
      >
        About Us
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-0 bg-white shadow-lg border border-gray-200 rounded-b-lg min-w-[220px] z-50">
          {/* Header Label */}
          <div className="px-4 py-2 border-b border-gray-100">
            <span className="inline-block bg-[#c4a052] text-white text-xs px-2 py-1 rounded">
              About Us
            </span>
          </div>

          {/* Links */}
          <div className="px-4 py-4">
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-600 hover:text-[#c4a052] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

function SolutionsDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  const individualsLinks = [
    "Certification Program",
    "Membership",
    "Training Programs",
    "Advanced Offerings",
    "Tools and Resources"
  ]

  const organizationsLinks = [
    "ERP Implementations",
    "AI Enterprise Solutions",
    "Consulting Services",
    "Enterprise Training",
    "Licensing",
    "Kaiya AI Assistant",
    "eLearning",
    "Speaking Engagements"
  ]

  const industryLinks = [
    "Higher Education",
    "Government",
    "Healthcare",
    "Financial Services",
    "Insurance",
    "Information Technology",
    "Manufacturing",
    "Energy"
  ]

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="flex items-center gap-1 text-[#1e3a5f] font-medium hover:text-[#c4a052] transition-colors"
      >
        Solutions
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-0 bg-white shadow-lg border border-gray-200 rounded-b-lg min-w-[750px] z-50">
          {/* Header Label */}
          <div className="px-4 py-2 border-b border-gray-100">
            <span className="inline-block bg-[#c4a052] text-white text-xs px-2 py-1 rounded">
              Solutions
            </span>
          </div>

          {/* Main Link */}
          <div className="px-4 py-3 border-b border-gray-100">
            <Link href="#" className="flex items-center gap-2 text-[#1e3a5f] hover:text-[#c4a052] py-1 font-medium">
              Solutions
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Three Columns */}
          <div className="grid grid-cols-3 gap-6 px-4 py-4">
            {/* Solutions For Individuals */}
            <div>
              <Link href="#" className="flex items-center gap-2 text-[#007b8a] font-semibold mb-3 hover:text-[#c4a052]">
                Solutions For Individuals
                <ChevronRight className="w-4 h-4" />
              </Link>
              <ul className="space-y-2">
                {individualsLinks.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-600 hover:text-[#c4a052] transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions For Organizations */}
            <div>
              <Link href="#" className="flex items-center gap-2 text-[#007b8a] font-semibold mb-3 hover:text-[#c4a052]">
                Solutions For Organizations
                <ChevronRight className="w-4 h-4" />
              </Link>
              <ul className="space-y-2">
                {organizationsLinks.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-600 hover:text-[#c4a052] transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industry Insights */}
            <div>
              <Link href="#" className="flex items-center gap-2 text-[#007b8a] font-semibold mb-3 hover:text-[#c4a052]">
                Industry Insights
                <ChevronRight className="w-4 h-4" />
              </Link>
              <ul className="space-y-2">
                {industryLinks.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-600 hover:text-[#c4a052] transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ChangeManagementDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  const keyConceptsLinks = [
    "Change Success",
    "Change Saturation", 
    "Change Fatigue",
    "Change Readiness",
    "Change Resistance"
  ]

  const changeInsightsLinks = [
    "Enterprise Change Management",
    "ERP Change Management",
    "Digital Transformation Change Management",
    "AI Change Management",
    "M&A Change Management",
    "Supply Chain Management"
  ]

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="flex items-center gap-1 text-[#1e3a5f] font-medium hover:text-[#c4a052] transition-colors"
      >
        Change Management
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-0 bg-white shadow-lg border border-gray-200 rounded-b-lg min-w-[600px] z-50">
          {/* Header Label */}
          <div className="px-4 py-2 border-b border-gray-100">
            <span className="inline-block bg-[#c4a052] text-white text-xs px-2 py-1 rounded">
              Change Management
            </span>
          </div>

          {/* Main Links */}
          <div className="px-4 py-3 border-b border-gray-100">
            <Link href="/what-is-change-management" className="flex items-center gap-2 text-[#1e3a5f] hover:text-[#c4a052] py-1 font-medium">
              What is Change Management
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/why-change-management" className="flex items-center gap-2 text-[#1e3a5f] hover:text-[#c4a052] py-1 font-medium">
              Why Change Management
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Two Columns */}
          <div className="grid grid-cols-2 gap-8 px-4 py-4">
            {/* Key Concepts */}
            <div>
              <h4 className="text-[#1e3a5f] font-semibold mb-3">Key Concepts</h4>
              <ul className="space-y-2">
                {keyConceptsLinks.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-600 hover:text-[#c4a052] transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Change Insights */}
            <div>
              <h4 className="text-[#1e3a5f] font-semibold mb-3">Change Insights</h4>
              <ul className="space-y-2">
                {changeInsightsLinks.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-600 hover:text-[#c4a052] transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
