import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Image
              src="/images/kpintar-prosci-logo.png"
              alt="KPintar x Prosci"
              width={180}
              height={50}
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-sm text-white/70 leading-relaxed">
              Your partner in driving lasting and effective change management solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-[#c4a052]">Solutions</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Enterprise Change</FooterLink>
              <FooterLink href="#">Training Programs</FooterLink>
              <FooterLink href="#">Certification</FooterLink>
              <FooterLink href="#">Consulting</FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-[#c4a052]">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Research</FooterLink>
              <FooterLink href="#">Webinars</FooterLink>
              <FooterLink href="#">Case Studies</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-[#c4a052]">Contact</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Prosci Malaysia</li>
              <li>contact@proscimalaysia.com</li>
              <li>+60 3-1234 5678</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="hover:text-[#c4a052] transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-[#c4a052] transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-[#c4a052] transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-[#c4a052] transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © 2026 Prosci Malaysia. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-white/70 hover:text-[#c4a052] transition-colors">
        {children}
      </Link>
    </li>
  )
}
