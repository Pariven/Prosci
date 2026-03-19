import Link from "next/link"

const solutions = [
  {
    title: "METHODOLOGY AND TOOLS",
    description:
      "With our proven change management methodology, the processes, models and tools of change success are in your hands.",
  },
  {
    title: "TRAINING AND CERTIFICATION",
    description:
      "Through learning courses and certifications, we empower your team to build expertise while implementing change.",
  },
  {
    title: "ADVISORY SERVICES AND CONSULTING",
    description:
      "Our experts are committed to listening, understanding, and guiding you to change success. They're in this with you.",
  },
  {
    title: "PRIMARY RESEARCH AND INSIGHTS",
    description:
      "We maintain over 25+ years of insights into change management practices and trends to fuel your change success.",
  },
]

export function SolutionsSection() {
  return (
    <section className="bg-[#e8e6f0] py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <div className="lg:w-2/5">
            <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] leading-tight mb-6">
              Integrated solutions for
              <br />
              enterprises and individuals.
            </h2>
            <p className="text-[#4a5568] leading-relaxed mb-8">
              We offer a wide range of solutions, tailored to meet the specific
              needs and goals of organizations and individuals. We bring
              together research, methodology, and experience to help you find
              the approach to change you need.
            </p>
            <Link
              href="#"
              className="inline-block border border-[#1e3a5f] text-[#1e3a5f] px-6 py-3 text-sm font-medium tracking-wide hover:bg-[#1e3a5f] hover:text-white transition-colors"
            >
              FIND YOUR SOLUTION
            </Link>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:w-3/5">
            <div className="grid md:grid-cols-2 gap-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white p-6 border-t-4 border-[#e8e6f0] hover:border-[#5b4b82] transition-colors"
                >
                  <h3 className="text-[#5b4b82] text-sm font-bold tracking-wide mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-[#4a5568] text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
