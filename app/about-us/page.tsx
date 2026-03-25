import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="bg-[#1e3a5f] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">About Us</h1>
          <p className="text-white/90 max-w-3xl">About Prosci Malaysia (KPINTAR X PROSCI)</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="bg-[#f8fafc] border border-gray-200 rounded-md p-6 md:p-8">
          <h2 className="text-3xl font-serif text-[#1e3a5f] mb-4">About Prosci Malaysia</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            KPINTAR and Prosci collaborate in Malaysia to support organizations in building lasting change capability through globally recognized methodology and practical local execution.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We support leaders, project teams, and people managers with certification pathways, enterprise capability programs, and advisory services for transformation success.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our focus is on helping organizations prepare, equip, and support people through change so business outcomes are achieved consistently.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
