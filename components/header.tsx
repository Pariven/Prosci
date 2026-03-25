"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronRight, Calendar, ShoppingCart, Globe, User, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full">
      <div className="bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-end gap-4 py-2">
          <Link href="#" className="flex items-center gap-2 text-sm hover:text-[#c4a052] transition-colors">
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Store Account</span>
            <ChevronDown className="w-3 h-3" />
          </Link>
          <Link href="#" className="flex items-center gap-2 text-sm hover:text-[#c4a052] transition-colors">
            <Globe className="w-4 h-4" />
            <span className="hidden sm:inline">English</span>
            <ChevronDown className="w-3 h-3" />
          </Link>
          <Link href="#" className="flex items-center justify-center w-8 h-8 rounded-full border border-[#007b8a] hover:bg-[#007b8a] transition-colors">
            <User className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4 gap-6">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/kpintar-prosci-logo.png"
              alt="KPintar x Prosci"
              width={120}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 items-center justify-start flex-nowrap gap-6 whitespace-nowrap min-w-0">
            <Link href="/" className="text-[#1e3a5f] font-medium hover:text-[#c4a052] transition-colors whitespace-nowrap shrink-0 leading-none">
              Home
            </Link>
            <ChangeManagementDropdown />
            <MethodologyDropdown />
            <SolutionsDropdown />
            <Link
              href="https://aseanchangemanagementconference.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e3a5f] font-medium hover:text-[#c4a052] transition-colors whitespace-nowrap shrink-0 leading-none"
            >
              ACMC
            </Link>
            <ResourcesDropdown />
            <AboutUsDropdown />
          </nav>

          <div className="hidden md:flex items-center shrink-0">
            <Link
              href="#"
              className="flex items-center gap-2 bg-[#007b8a] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#006070] transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Training
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex h-[34px] w-[34px] cursor-pointer items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-[#1e3a5f]" /> : <Menu className="h-6 w-6 text-[#1e3a5f]" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3 max-h-[calc(100vh-120px)] overflow-y-auto">
            <Link
              href="/"
              className="block text-[#1e3a5f] font-medium hover:text-[#c4a052] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <MobileMenuDropdown title="Change Management" links={[
              { label: "What Is Change Management", href: "/what-is-change-management" },
              { label: "Why Change Management", href: "/why-change-management" },
            ]} />
            <MobileMenuDropdown title="Methodology" links={[
              { label: "Prosci Methodology Overview", href: "#" },
              { label: "PCT Model", href: "#" },
              { label: "ADKAR Model", href: "#" },
              { label: "3-Phase Process", href: "#" },
            ]} />
            <MobileMenuDropdown title="Solutions" links={[
              { label: "Solutions For Individuals", href: "/solutions#individuals" },
              { label: "Solutions For Organizations", href: "/solutions#organizations" },
              { label: "Advisory Services", href: "#" },
            ]} />
            <Link
              href="https://aseanchangemanagementconference.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#1e3a5f] font-medium hover:text-[#c4a052] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              ACMC
            </Link>
            <MobileMenuDropdown title="Resources" links={[
              { label: "Podcast (UNSCRIPTED: Change Management @ Work)", href: "/resources#podcast" },
              { label: "Webinars", href: "/resources#webinars" },
            ]} />
            <MobileMenuDropdown title="About Us" links={[
              { label: "Contact Us", href: "#" },
              { label: "About Prosci Malaysia (KPINTAR X PROSCI)", href: "/about-us" },
              { label: "Why Choose Prosci", href: "#" },
            ]} />
            <div className="pt-2 md:hidden">
              <Link
                href="#"
                className="flex items-center gap-2 bg-[#007b8a] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#006070] transition-colors w-full justify-center"
              >
                <Calendar className="w-4 h-4" />
                Training
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

function MobileMenuDropdown({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-[#1e3a5f] font-medium hover:text-[#c4a052] transition-colors py-2 flex items-center justify-between"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="pl-4 space-y-2 bg-gray-50 py-2 px-2 rounded mb-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-gray-600 hover:text-[#c4a052] transition-colors text-sm py-1"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function MethodologyDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  const methodologyLinks = ["Prosci Methodology Overview", "PCT Model", "ADKAR Model", "3-Phase Process"]

  return (
    <div className="relative shrink-0" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="inline-flex items-center gap-1 text-[#1e3a5f] font-medium hover:text-[#c4a052] transition-colors whitespace-nowrap leading-none">
        Methodology
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-0 bg-white shadow-lg border border-gray-200 rounded-b-lg min-w-[280px] z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <span className="inline-block bg-[#c4a052] text-white text-xs px-2 py-1 rounded">Methodology</span>
          </div>

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

  return (
    <div className="relative shrink-0" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="inline-flex items-center gap-1 text-[#1e3a5f] font-medium hover:text-[#c4a052] transition-colors whitespace-nowrap leading-none">
        Resources
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-0 bg-white shadow-lg border border-gray-200 rounded-b-lg min-w-[260px] z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <span className="inline-block bg-[#c4a052] text-white text-xs px-2 py-1 rounded">Resources</span>
          </div>

          <div className="px-4 py-4">
            <ul className="space-y-2">
              <li>
                <Link href="/resources#podcast" className="text-gray-600 hover:text-[#c4a052] transition-colors">
                  Podcast (UNSCRIPTED: Change Management @ Work)
                </Link>
              </li>
              <li>
                <Link href="/resources#webinars" className="text-gray-600 hover:text-[#c4a052] transition-colors">
                  Webinars
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

function AboutUsDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative shrink-0" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="inline-flex items-center gap-1 text-[#1e3a5f] font-medium hover:text-[#c4a052] transition-colors whitespace-nowrap leading-none">
        About{"\u00A0"}Us
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-0 bg-white shadow-lg border border-gray-200 rounded-b-lg min-w-[320px] z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <span className="inline-block bg-[#c4a052] text-white text-xs px-2 py-1 rounded">About Us</span>
          </div>

          <div className="px-4 py-4">
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#c4a052] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-600 hover:text-[#c4a052] transition-colors">
                  About Prosci Malaysia (KPINTAR X PROSCI)
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#c4a052] transition-colors">
                  Why Choose Prosci
                </Link>
              </li>
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
    "Certification Programs",
    "Role-Based Certification Programs",
    "Membership",
  ]

  const organizationsLinks = ["Enterprise Change Management Boot Camp"]

  const advisoryLinks = ["Advisory Services"]

  return (
    <div className="relative shrink-0" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="inline-flex items-center gap-1 text-[#1e3a5f] font-medium hover:text-[#c4a052] transition-colors whitespace-nowrap leading-none">
        Solutions
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-0 bg-white shadow-lg border border-gray-200 rounded-b-lg min-w-[780px] z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <span className="inline-block bg-[#c4a052] text-white text-xs px-2 py-1 rounded">Solutions</span>
          </div>

          <div className="px-4 py-3 border-b border-gray-100">
            <Link href="/solutions" className="flex items-center gap-2 text-[#1e3a5f] hover:text-[#c4a052] py-1 font-medium">
              Solutions Overview
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 px-4 py-4">
            <div>
              <Link href="/solutions#individuals" className="flex items-center gap-2 text-[#007b8a] font-semibold mb-3 hover:text-[#c4a052]">
                Solutions For Individuals
                <ChevronRight className="w-4 h-4" />
              </Link>
              <ul className="space-y-2">
                {individualsLinks.map((link) => (
                  <li key={link}>
                    <Link href="/solutions#individuals" className="text-gray-600 hover:text-[#c4a052] transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Link href="/solutions#organizations" className="flex items-center gap-2 text-[#007b8a] font-semibold mb-3 hover:text-[#c4a052]">
                Solutions For Organizations
                <ChevronRight className="w-4 h-4" />
              </Link>
              <ul className="space-y-2">
                {organizationsLinks.map((link) => (
                  <li key={link}>
                    <Link href="/solutions#organizations" className="text-gray-600 hover:text-[#c4a052] transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Link href="/solutions#advisory" className="flex items-center gap-2 text-[#007b8a] font-semibold mb-3 hover:text-[#c4a052]">
                Advisory
                <ChevronRight className="w-4 h-4" />
              </Link>
              <ul className="space-y-2">
                {advisoryLinks.map((link) => (
                  <li key={link}>
                    <Link href="/solutions#advisory" className="text-gray-600 hover:text-[#c4a052] transition-colors">
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

  return (
    <div className="relative shrink-0" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="inline-flex items-center gap-1 text-[#1e3a5f] font-medium hover:text-[#c4a052] transition-colors whitespace-nowrap leading-none">
        Change{"\u00A0"}Management
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-0 bg-white shadow-lg border border-gray-200 rounded-b-lg min-w-[360px] z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <span className="inline-block bg-[#c4a052] text-white text-xs px-2 py-1 rounded">Change Management</span>
          </div>

          <div className="px-4 py-4">
            <ul className="space-y-2">
              <li>
                <Link href="/what-is-change-management" className="flex items-center gap-2 text-[#1e3a5f] hover:text-[#c4a052] py-1 font-medium">
                  What Is Change Management
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </li>
              <li>
                <Link href="/why-change-management" className="flex items-center gap-2 text-[#1e3a5f] hover:text-[#c4a052] py-1 font-medium">
                  Why Change Management
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
