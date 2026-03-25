import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="bg-[#1e3a5f] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Resources</h1>
          <p className="text-white/90 max-w-3xl">Explore our latest podcast episodes and webinar sessions focused on practical change leadership.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14 space-y-8">
        <article id="podcast" className="bg-[#f8fafc] border border-gray-200 rounded-md p-6">
          <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-3">Podcast</h2>
          <p className="text-[#007b8a] font-medium mb-2">UNSCRIPTED: Change Management @ Work</p>
          <p className="text-gray-700 leading-relaxed">
            Stories and practical conversations from change practitioners, business leaders, and transformation teams.
          </p>
        </article>

        <article id="webinars" className="bg-[#f8fafc] border border-gray-200 rounded-md p-6">
          <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-3">Webinars</h2>
          <p className="text-gray-700 leading-relaxed">
            Attend live and on-demand webinars to learn proven approaches for sponsorship, communication, stakeholder engagement, and adoption.
          </p>
        </article>
      </section>

      <Footer />
    </main>
  )
}
