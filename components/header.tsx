"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronRight, Calendar, ShoppingCart, Globe, User, Menu, X } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="w-full">
      <div className="bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-end gap-4 py-2">
          <Link href="#" className="flex items-center gap-2 text-sm hover:text-[#c4a052] transition-colors">
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">{t('header.storeAccount')}</span>
            <ChevronDown className="w-3 h-3" />
          </Link>
          <LanguageDropdown currentLanguage={language} onLanguageChange={setLanguage} t={t} />
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
              {t('header.home')}
            </Link>
            <ChangeManagementDropdown t={t} />
            <MethodologyDropdown t={t} />
            <SolutionsDropdown t={t} />
            <Link
              href="https://aseanchangemanagementconference.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e3a5f] font-medium hover:text-[#c4a052] transition-colors whitespace-nowrap shrink-0 leading-none"
            >
              ACMC
            </Link>
            <ResourcesDropdown t={t} />
            <AboutUsDropdown t={t} />
          </nav>

          <div className="hidden md:flex items-center shrink-0">
            <Link
              href="#"
              className="flex items-center gap-2 bg-[#007b8a] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#006070] transition-colors"
            >
              <Calendar className="w-4 h-4" />
              {t('header.training')}
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
              {t('header.home')}
            </Link>
            <MobileMenuDropdown title={t('header.changeManagement')} links={[
              { label: t('header.whatIsChangeManagement'), href: "/what-is-change-management" },
              { label: t('header.whyChangeManagement'), href: "/why-change-management" },
            ]} />
            <MobileMenuDropdown title={t('header.methodology')} links={[
              { label: t('header.posciMethodologyOverview'), href: "#" },
              { label: t('header.pctModel'), href: "#" },
              { label: t('header.adkarModel'), href: "#" },
              { label: t('header.threePhaseProcess'), href: "#" },
            ]} />
            <MobileMenuDropdown title={t('header.solutions')} links={[
              { label: t('header.solutionsForIndividuals'), href: "/solutions#individuals" },
              { label: t('header.solutionsForOrganizations'), href: "/solutions#organizations" },
              { label: t('header.advisoryServices'), href: "#" },
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
            <MobileMenuDropdown title={t('header.resources')} links={[
              { label: t('header.podcast'), href: "/resources#podcast" },
              { label: t('header.webinars'), href: "/resources#webinars" },
            ]} />
            <MobileMenuDropdown title={t('header.aboutUs')} links={[
              { label: t('header.contactUs'), href: "#" },
              { label: t('header.aboutProsci'), href: "/about-us" },
              { label: t('header.whyChooseProsci'), href: "#" },
            ]} />
            <div className="pt-2 md:hidden">
              <Link
                href="#"
                className="flex items-center gap-2 bg-[#007b8a] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#006070] transition-colors w-full justify-center"
              >
                <Calendar className="w-4 h-4" />
                {t('header.training')}
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

function MethodologyDropdown({ t }: { t: (key: string) => string }) {
  const [isOpen, setIsOpen] = useState(false)

  const methodologyLinks = [
    { key: 'header.posciMethodologyOverview', href: "#" },
    { key: 'header.pctModel', href: "#" },
    { key: 'header.adkarModel', href: "#" },
    { key: 'header.threePhaseProcess', href: "#" },
  ]

  return (
    <div className="relative shrink-0" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="inline-flex items-center gap-1 text-[#1e3a5f] font-medium hover:text-[#c4a052] transition-colors whitespace-nowrap leading-none">
        {t('header.methodology')}
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-0 bg-white shadow-lg border border-gray-200 rounded-b-lg min-w-[280px] z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <span className="inline-block bg-[#c4a052] text-white text-xs px-2 py-1 rounded">{t('header.methodology')}</span>
          </div>

          <div className="px-4 py-4">
            <ul className="space-y-2">
              {methodologyLinks.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} className="text-gray-600 hover:text-[#c4a052] transition-colors">
                    {t(link.key)}
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

function ResourcesDropdown({ t }: { t: (key: string) => string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative shrink-0" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="inline-flex items-center gap-1 text-[#1e3a5f] font-medium hover:text-[#c4a052] transition-colors whitespace-nowrap leading-none">
        {t('header.resources')}
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-0 bg-white shadow-lg border border-gray-200 rounded-b-lg min-w-[260px] z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <span className="inline-block bg-[#c4a052] text-white text-xs px-2 py-1 rounded">{t('header.resources')}</span>
          </div>

          <div className="px-4 py-4">
            <ul className="space-y-2">
              <li>
                <Link href="/resources#podcast" className="text-gray-600 hover:text-[#c4a052] transition-colors">
                  {t('header.podcast')}
                </Link>
              </li>
              <li>
                <Link href="/resources#webinars" className="text-gray-600 hover:text-[#c4a052] transition-colors">
                  {t('header.webinars')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

function AboutUsDropdown({ t }: { t: (key: string) => string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative shrink-0" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="inline-flex items-center gap-1 text-[#1e3a5f] font-medium hover:text-[#c4a052] transition-colors whitespace-nowrap leading-none">
        {t('header.aboutUs')}
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-0 bg-white shadow-lg border border-gray-200 rounded-b-lg min-w-[320px] z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <span className="inline-block bg-[#c4a052] text-white text-xs px-2 py-1 rounded">{t('header.aboutUs')}</span>
          </div>

          <div className="px-4 py-4">
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#c4a052] transition-colors">
                  {t('header.contactUs')}
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-600 hover:text-[#c4a052] transition-colors">
                  {t('header.aboutProsci')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#c4a052] transition-colors">
                  {t('header.whyChooseProsci')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

function SolutionsDropdown({ t }: { t: (key: string) => string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative shrink-0" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="inline-flex items-center gap-1 text-[#1e3a5f] font-medium hover:text-[#c4a052] transition-colors whitespace-nowrap leading-none">
        {t('header.solutions')}
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-0 bg-white shadow-lg border border-gray-200 rounded-b-lg min-w-[780px] z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <span className="inline-block bg-[#c4a052] text-white text-xs px-2 py-1 rounded">{t('header.solutions')}</span>
          </div>

          <div className="px-4 py-3 border-b border-gray-100">
            <Link href="/solutions" className="flex items-center gap-2 text-[#1e3a5f] hover:text-[#c4a052] py-1 font-medium">
              {t('header.solutionsOverview')}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 px-4 py-4">
            <div>
              <Link href="/solutions#individuals" className="flex items-center gap-2 text-[#007b8a] font-semibold mb-3 hover:text-[#c4a052]">
                {t('header.solutionsForIndividuals')}
                <ChevronRight className="w-4 h-4" />
              </Link>
              <ul className="space-y-2">
                <li><Link href="/solutions#individuals" className="text-gray-600 hover:text-[#c4a052] transition-colors">{t('header.certificationPrograms')}</Link></li>
                <li><Link href="/solutions#individuals" className="text-gray-600 hover:text-[#c4a052] transition-colors">{t('header.roleBasedCertificationPrograms')}</Link></li>
                <li><Link href="/solutions#individuals" className="text-gray-600 hover:text-[#c4a052] transition-colors">{t('header.membership')}</Link></li>
              </ul>
            </div>

            <div>
              <Link href="/solutions#organizations" className="flex items-center gap-2 text-[#007b8a] font-semibold mb-3 hover:text-[#c4a052]">
                {t('header.solutionsForOrganizations')}
                <ChevronRight className="w-4 h-4" />
              </Link>
              <ul className="space-y-2">
                <li><Link href="/solutions#organizations" className="text-gray-600 hover:text-[#c4a052] transition-colors">{t('header.enterpriseChangeManagementBootCamp')}</Link></li>
              </ul>
            </div>

            <div>
              <Link href="/solutions#advisory" className="flex items-center gap-2 text-[#007b8a] font-semibold mb-3 hover:text-[#c4a052]">
                {t('header.advisory')}
                <ChevronRight className="w-4 h-4" />
              </Link>
              <ul className="space-y-2">
                <li><Link href="/solutions#advisory" className="text-gray-600 hover:text-[#c4a052] transition-colors">{t('header.advisoryServices')}</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ChangeManagementDropdown({ t }: { t: (key: string) => string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative shrink-0" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="inline-flex items-center gap-1 text-[#1e3a5f] font-medium hover:text-[#c4a052] transition-colors whitespace-nowrap leading-none">
        {t('header.changeManagement')}
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-0 bg-white shadow-lg border border-gray-200 rounded-b-lg min-w-[360px] z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <span className="inline-block bg-[#c4a052] text-white text-xs px-2 py-1 rounded">{t('header.changeManagement')}</span>
          </div>

          <div className="px-4 py-4">
            <ul className="space-y-2">
              <li>
                <Link href="/what-is-change-management" className="flex items-center gap-2 text-[#1e3a5f] hover:text-[#c4a052] py-1 font-medium">
                  {t('header.whatIsChangeManagement')}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </li>
              <li>
                <Link href="/why-change-management" className="flex items-center gap-2 text-[#1e3a5f] hover:text-[#c4a052] py-1 font-medium">
                  {t('header.whyChangeManagement')}
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

function LanguageDropdown({ currentLanguage, onLanguageChange, t }: { currentLanguage: "EN" | "MS"; onLanguageChange: (lang: "EN" | "MS") => void; t: (key: string) => string }) {
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "EN", label: t('common.english') },
    { code: "MS", label: t('common.bahasaMelayu') },
  ] as const

  const currentLabel = languages.find((lang) => lang.code === currentLanguage)?.label || t('common.english')

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center gap-2 text-sm hover:text-[#c4a052] transition-colors">
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLabel}</span>
        <ChevronDown className="w-3 h-3" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-0 bg-white shadow-lg border border-gray-200 rounded-b-lg min-w-[180px] z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <span className="inline-block bg-[#c4a052] text-white text-xs px-2 py-1 rounded">{t('header.language')}</span>
          </div>

          <div className="px-4 py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  onLanguageChange(lang.code)
                  setIsOpen(false)
                }}
                className={`block w-full text-left py-2 px-2 rounded transition-colors ${
                  currentLanguage === lang.code
                    ? "bg-[#c4a052] text-white font-medium"
                    : "text-gray-700 hover:bg-gray-100 hover:text-[#c4a052]"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
