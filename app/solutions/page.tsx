import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

type ProgramItem = {
  title: string
  objective: string[]
  whoShouldAttend: string[]
  image?: string
}

const roleBasedPrograms: ProgramItem[] = [
  {
    title: "Sponsor Briefing",
    image: "/images/sponsor-briefing-video-placeholder.jpg",
    objective: [
      "Equip sponsors with change management concepts and skills.",
      "Enable sponsors to lead projects successfully in their change management role.",
    ],
    whoShouldAttend: ["Project Sponsors", "Business Leaders"],
  },
  {
    title: "Leading Your Team Through Change",
    image: "/images/image-office.avif",
    objective: [
      "Equip People Managers with change management skills to help team members transition successfully.",
    ],
    whoShouldAttend: ["People Managers", "Middle Managers"],
  },
  {
    title: "Delivering Project Results",
    image: "/images/5f47555c7835392156cba14bf7c44d0aaa6876d3-6717x4295.avif",
    objective: [
      "Expose Project Managers to the people side of change.",
      "Provide change management knowledge to integrate with project management.",
      "Drive projects more successfully towards desired outcomes.",
    ],
    whoShouldAttend: ["Project Managers", "Project team members"],
  },
  {
    title: "Taking Charge of Change",
    image: "/images/istockphoto-1400928172-612x612.jpg",
    objective: [
      "Provide employees with people-side-of-change knowledge.",
      "Prepare employees to embrace change and support organizational outcomes.",
    ],
    whoShouldAttend: ["Impacted groups", "Employees"],
  },
]

function ProgramCard({ program }: { program: ProgramItem }) {
  return (
    <article className="bg-white rounded-md border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {program.image && (
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-r from-[#1e3a5f] to-[#007b8a]">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      {!program.image && (
        <div className="h-48 w-full bg-gradient-to-r from-[#1e3a5f] to-[#007b8a] flex items-center justify-center text-white text-sm font-medium">
          {program.title}
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#1e3a5f] mb-4">{program.title}</h3>
        <div className="mb-5">
          <h4 className="text-sm uppercase tracking-wide text-[#007b8a] font-semibold mb-2">Objective</h4>
          <ul className="space-y-2 text-gray-700 text-sm list-disc pl-5">
            {program.objective.map((item, index) => (
              <li key={`${program.title}-objective-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-wide text-[#007b8a] font-semibold mb-2">Who Should Attend</h4>
          <ul className="space-y-2 text-gray-700 text-sm list-disc pl-5">
            {program.whoShouldAttend.map((item, index) => (
              <li key={`${program.title}-attendee-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Header />

      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero-background.webp')`,
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#5b4b82]/70 via-[#1e3a5f]/70 to-[#007b8a]/70" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 py-20 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-balance leading-tight">
            Integrated Change Success Solutions
          </h1>
          <p className="text-base md:text-lg mb-2 opacity-95 leading-relaxed">
            Prosci combines research, methodology, and experience to tackle change from every angle. Whether you need training, advice,
          </p>
          <p className="text-base md:text-lg opacity-95 leading-relaxed">
            or both, we offer tailored solutions that drive transformation by focusing on the human side of change.
          </p>
          <p className="text-base md:text-lg mt-4 opacity-90 font-light">
            Most importantly, we're with you every step of the way.
          </p>
        </div>
      </section>

      <section id="individuals" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-serif text-[#1e3a5f] mb-2">Solutions For Individuals</h2>

        <div className="bg-white border border-gray-200 rounded-md p-6 mt-8 mb-8 shadow-sm">
          <h3 className="text-2xl text-[#1e3a5f] font-semibold mb-3">Certification Programs</h3>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Prosci Change Management Certification Program (Virtual & Physical)</span>
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm uppercase tracking-wide text-[#007b8a] font-semibold mb-2">Objective</h4>
              <ul className="space-y-2 text-gray-700 text-sm list-disc pl-5">
                <li>Benchmark existing knowledge against Prosci Methodology.</li>
                <li>Provide change management methodology.</li>
                <li>Provide best practices.</li>
                <li>Globally recognized certification.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wide text-[#007b8a] font-semibold mb-2">Who Should Attend</h4>
              <ul className="space-y-2 text-gray-700 text-sm list-disc pl-5">
                <li>Change Analysts</li>
                <li>Change Leaders/Managers</li>
                <li>Project Managers</li>
                <li>Members of DTO</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="mailto:contact@proscimalaysia.com?subject=Brochure%20Request%20-%20Prosci%20Change%20Management%20Certification"
              className="inline-flex items-center justify-center bg-[#007b8a] hover:bg-[#006070] text-white h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Request Brochure
            </a>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl text-[#1e3a5f] font-semibold mb-4">Role-Based Certification Programs</h3>
          <p className="text-gray-700 mb-6">Specialized pathways tailored to the responsibilities of each stakeholder group.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {roleBasedPrograms.map((program) => (
              <ProgramCard key={program.title} program={program} />
            ))}
          </div>
          <div className="mt-6">
            <a
              href="mailto:contact@proscimalaysia.com?subject=Brochure%20Request%20-%20Role-Based%20Certification%20Programs"
              className="inline-flex items-center justify-center border border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Request Role-Based Brochure
            </a>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm">
          <h3 className="text-2xl text-[#1e3a5f] font-semibold mb-3">Membership</h3>
          <p className="text-gray-700 leading-relaxed">
            Extend your learning journey through a Prosci-focused membership with continued access to insights, tools, and practice support.
          </p>
        </div>
      </section>

      <section id="organizations" className="bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl font-serif text-[#1e3a5f] mb-8">Solution For Organizations</h2>

          <div className="bg-[#f8fafc] border border-gray-200 rounded-md p-6">
            <h3 className="text-2xl font-semibold text-[#1e3a5f] mb-4">Enterprise Change Management Boot Camp</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm uppercase tracking-wide text-[#007b8a] font-semibold mb-2">Objective</h4>
                <ul className="space-y-2 text-gray-700 text-sm list-disc pl-5">
                  <li>Help organizations understand the value of change management in transformation.</li>
                  <li>Help business leaders understand their change maturity level.</li>
                  <li>Provide the approach and strategy to establish change management capability.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-wide text-[#007b8a] font-semibold mb-2">Who Should Attend</h4>
                <ul className="space-y-2 text-gray-700 text-sm list-disc pl-5">
                  <li>Business leaders building change management capability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="advisory" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-serif text-[#1e3a5f] mb-4">Advisory</h2>
        <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm">
          <p className="text-gray-700 leading-relaxed">
            Our advisory team partners with leadership and project teams to design and execute practical change strategies, improve adoption, and build long-term internal capability.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
