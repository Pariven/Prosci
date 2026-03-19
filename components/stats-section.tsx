export function StatsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Intro Text */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl text-[#1e3a5f] leading-relaxed">
              We empower leaders and teams to succeed at change.
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-[#5b4b82] leading-relaxed">
              No matter the change you are facing, from the introduction of a new system to an office move, we are on the journey to success with you. We are your partner in driving lasting and effective change that works for your people.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <StatItem 
            number="25+"
            label="YEARS OF CHANGE MANAGEMENT RESEARCH"
          />
          <StatItem 
            number="267k+"
            label="PEOPLE EMPOWERED TO DRIVE CHANGE SUCCESS"
          />
          <StatItem 
            number="80"
            label="COUNTRIES WITH PROSCI TEAMS AND PARTNERS"
          />
        </div>
      </div>
    </section>
  )
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-5xl md:text-6xl font-bold text-[#5b4b82] mb-4">
        {number}
      </span>
      <span className="text-xs md:text-sm font-semibold text-[#1e3a5f] tracking-wider uppercase max-w-[200px]">
        {label}
      </span>
    </div>
  )
}
