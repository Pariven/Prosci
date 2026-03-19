'use client'

import React, { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Facebook, Linkedin, Twitter, Mail } from 'lucide-react'

export default function WhyChangeManagementPage() {
  const [activeFilter, setActiveFilter] = useState('latest')

  const navigationLinks = [
    { id: 'intro', title: 'Why is change management important?' },
    { id: 'organizational', title: 'The importance of change management' },
    { id: 'addresses', title: 'Addresses different aspects of change' },
    { id: 'three-levels', title: 'Three key levels affecting people' },
    { id: 'common-language', title: 'Provide a common language and method' },
    { id: 'resistance', title: 'Resistance can occur as a result...' },
    { id: 'change-capability', title: 'Increase change capability' },
    { id: 'conclusion', title: 'Conclusion' },
  ]

  const filterTabs = [
    { id: 'latest', label: 'Latest Posts' },
    { id: 'individuals', label: 'Individuals' },
    { id: 'projects', label: 'Projects and Initiatives' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'archives', label: 'Archives' },
  ]


  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Filter Navigation Tabs */}
      <div className="border-b border-gray-300 bg-white sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8 overflow-x-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`py-4 px-1 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                  activeFilter === tab.id
                    ? 'text-[#1e3a5f] border-[#1e3a5f]'
                    : 'text-gray-600 border-transparent hover:text-[#1e3a5f]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Article Grid Layout: Left Sidebar | Main Content | Right Sidebar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Sidebar - Navigation Links */}
          <aside className="md:col-span-1 order-2 md:order-1">
            <div className="sticky top-40 space-y-4">
              <h3 className="font-semibold text-[#1e3a5f] text-sm mb-6 uppercase tracking-wide">
                Article Sections
              </h3>
              <nav className="space-y-2">
                {navigationLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="block text-xs md:text-sm text-gray-600 hover:text-[#c4a052] transition-colors font-light leading-relaxed"
                  >
                    {link.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <article className="md:col-span-2 order-1 md:order-2">
            {/* Article Header */}
            <header className="mb-10">
              <h1 className="text-4xl md:text-5xl font-light text-gray-700 mb-8 leading-tight">
                Why Change Management Is Important
              </h1>

              {/* Author and Metadata */}
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c4a052] to-[#8b7355] flex items-center justify-center text-white font-bold">
                    TC
                  </div>
                  <div>
                    <p className="font-semibold text-[#1e3a5f]">Tim Creasey</p>
                    <p className="text-sm text-gray-600">7 Mins</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-600 font-light">Updated: November 20, 2025</p>
                  <p className="text-xs text-gray-500">Published: May 30, 2021</p>
                </div>
              </div>

              {/* Featured Image */}
              <div className="w-full h-80 md:h-96 bg-gray-100 rounded-lg mb-10 overflow-hidden">
                <img
                  src="/Change Management Plan Creating a Change Management Project Charter.webp"
                  alt="Team collaboration in office"
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none space-y-8">
              {/* Why is change management important section */}
              <section id="why-important" className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Why is change management important?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Because change is continually impacting organizations today. But primarily because it focuses on the people side of change, which is essential for achieving successful outcomes.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  New projects and initiatives emerge daily to boost performance, increase profits, and sharpen the competitive edge. Whether you're implementing technology for a mobile workforce, reengineering processes for compliance, or transforming the customer experience, one factor remains crucial: people. They are the key to achieving your intended outcomes—and that's why change management is so important.
                </p>
              </section>

              {/* What Is Organizational Change Management section */}
              <section id="organizational-cm" className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  What Is Organizational Change Management?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Organizational change management is the application of a structured change management process and set of tools focused on leading the people side of change to achieve a desired outcome.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Through organizational change management, you can maximize the people-dependent portion of a project's return on investment (ROI)—the portion of total ROI that results from employees adopting and using the solution.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  To achieve the ROI goals and other benefits, organizations can use the Prosci Methodology, which includes the Prosci Change Triangle (PCT) Model, Prosci ADKAR® Model, and Prosci 3-Phase Process:
                </p>

                {/* Prosci PCT Model */}
                <div className="bg-[#f0f4f8] p-6 rounded-lg mb-6 border-l-4 border-[#c4a052]">
                  <h3 className="font-semibold text-[#1e3a5f] mb-3 text-lg">The Prosci Change Triangle (PCT) Model</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Prosci Change Triangle (PCT) Model is designed to ensure that all the critical aspects of a change initiative are aligned and healthy. This model is used by teams to assess and improve the overall health of a project by focusing on four key areas: success, leadership/sponsorship, project management and change management. By examining these aspects, the PCT Model provides a structured way to ensure that all necessary elements for change are in place and working together harmoniously.
                  </p>
                </div>

                {/* Prosci ADKAR Model */}
                <div className="bg-[#f0f4f8] p-6 rounded-lg mb-6 border-l-4 border-[#c4a052]">
                  <h3 className="font-semibold text-[#1e3a5f] mb-3 text-lg">The Prosci ADKAR Model</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Prosci ADKAR Model is an essential tool for understanding and managing individual change. ADKAR is an acronym for Awareness, Desire, Knowledge, Ability and Reinforcement. These are the five elements that individuals need to have for change to be successful. The model is used to identify where people might be struggling in their change journey and what support they need to progress. By focusing on these elements, our ADKAR Model helps facilitate a smoother transition for individuals within an organization.
                  </p>
                </div>

                {/* Prosci 3-Phase Process */}
                <div className="bg-[#f0f4f8] p-6 rounded-lg mb-6 border-l-4 border-[#c4a052]">
                  <h3 className="font-semibold text-[#1e3a5f] mb-3 text-lg">The Prosci 3-Phase Process</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Lastly, the Prosci 3-Phase Process serves as a comprehensive roadmap for managing change effectively across an organization. This process is divided into phases that guide change practitioners in planning, implementing and sustaining change efforts. This ensures that both the technical and people sides of change are addressed. And because successful organizational change starts at the individual level, change managers use the Prosci 3-Phase Process to scale ADKAR across organizations of all sizes.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Although change starts at the individual level, leadership plays an important role in the organization's success. Equipping leaders with the necessary skills and information needed to lead the change is imperative.
                  </p>
                </div>
              </section>

              <section id="importance" className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                  The Importance of Change Management
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8 text-center">
                  Change management is necessary because it guides how we prepare, equip, and support individuals to successfully adopt change, driving organizational success. Adopting change management practices has many advantages for organizations. By helping people through their individual change journeys, you can:
                </p>

                {/* Address different impacts section */}
                <div className="bg-gray-100 p-6 rounded-lg mb-12 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Address different impacts on people and teams
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Your projects and initiatives significantly impact the ways individual people do their work on a day-to-day basis.
                </p>

                <p className="text-gray-700 leading-relaxed mb-10">
                  Change can impact processes, systems, tools, job roles, workflows, mindsets, behaviors and more. Each change impacts different groups within your organization differently. A new electronic medical records system will affect people in the IT department in some ways and clinical users in completely different ways, while the change may be insignificant to the finance team.
                </p>

                {/* Prosci 16 Aspects Diagram */}
                <div className="my-12 flex justify-center px-4">
                  <div className="w-full max-w-2xl">
                    <img 
                      src="/10-Aspects-Change-Impact-Model-150.webp" 
                      alt="Prosci - Aspects of a Person's Job You Can Impact"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-10">
                  To manage these impacts during times of change, change management professionals employ a structured approach that includes helpful knowledge, processes and tools.
                </p>

                {/* Thrive in an ever-changing world section */}
                <div className="bg-gray-100 p-6 rounded-lg mb-12 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Thrive in an ever-changing world
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  The days of implementing one large change every 36 months are long gone. Organizations are facing faster, more complex, more interdependent, and more cross-functional change than ever before. By applying change management, organizations deliver results on each change more effectively, even while managing multiple unique changes.
                </p>

                <p className="text-gray-700 leading-relaxed mb-12">
                  An organization that works to build change competencies in its people will improve over time, maturing into a change-ready organization with the capacity to handle faster, more complex, more interdependent, and more cross-functional change and achieve strategic advantages.
                </p>

                {/* Deliver people-dependent ROI section */}
                <div className="bg-gray-100 p-6 rounded-lg mb-8 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Deliver people-dependent ROI
                  </h3>
                </div>
              </section>

              <section id="organizational">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  The importance of change management
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Change management focuses on the people side of organizational change. It recognizes that successful change implementation depends not just on technical execution, but on how well people understand, accept, and adopt the changes. When organizations overlook this critical aspect, they face resistance, reduced adoption, and failed project outcomes.
                </p>
              </section>

              <section id="addresses">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Addresses different aspects of change
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Effective change management addresses different aspects that impact people at various levels. It provides structured support, clear communication, and practical tools to help individuals navigate change successfully. This comprehensive approach ensures that change initiatives don't just get implemented technically, but actually create the desired impact across the organization.
                </p>
              </section>

              <section id="three-levels">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Three key levels affecting people and results
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Change management operates at three distinct levels, all critical for organizational success:
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-[#f0f4f8] p-6 rounded-lg border-l-4 border-[#c4a052]">
                    <h4 className="font-semibold text-[#1e3a5f] mb-2">Individual Level</h4>
                    <p className="text-gray-700 text-sm">Supporting employees through awareness, understanding, and adoption of change</p>
                  </div>
                  <div className="bg-[#f0f4f8] p-6 rounded-lg border-l-4 border-[#c4a052]">
                    <h4 className="font-semibold text-[#1e3a5f] mb-2">Team Level</h4>
                    <p className="text-gray-700 text-sm">Creating alignment and shared commitment across teams and departments</p>
                  </div>
                  <div className="bg-[#f0f4f8] p-6 rounded-lg border-l-4 border-[#c4a052]">
                    <h4 className="font-semibold text-[#1e3a5f] mb-2">Organizational Level</h4>
                    <p className="text-gray-700 text-sm">Building institutional change capability and resilience for ongoing transformation</p>
                  </div>
                </div>
              </section>

              <section id="common-language">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Provide a common language and method
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Change management provides a common language and structured methodology that all stakeholders can understand and follow. This standardization reduces confusion, improves communication, and ensures consistent execution across the organization. When everyone speaks the same language of change, adoption accelerates dramatically.
                </p>
              </section>

              <section id="resistance">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Resistance can occur as a result of change
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  When change management is not properly implemented, resistance is inevitable. This resistance can take many forms—from passive disengagement to active opposition. However, resistance is not inherently negative; when properly understood and managed, it provides valuable feedback about implementation gaps and areas requiring additional support.
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h4 className="font-semibold text-red-800 mb-3">Common Signs of Resistance</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 font-bold">•</span>
                      <span>Low adoption rates and continued use of old processes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 font-bold">•</span>
                      <span>Negative feedback and complaints about the change</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 font-bold">•</span>
                      <span>Employee disengagement and morale issues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 font-bold">•</span>
                      <span>Loss of key talent and increased turnover</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="change-capability">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Increase change capability
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Organizations can systematically build change capability by implementing structured change management practices. This involves training managers, developing change leadership, creating change networks, and establishing change management offices. With increased capability, organizations become more adaptable and resilient.
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h4 className="font-semibold text-green-800 mb-3">Benefits of Strong Change Capability</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 font-bold">✓</span>
                      <span>Faster implementation of strategic initiatives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 font-bold">✓</span>
                      <span>Higher adoption rates and sustained usage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 font-bold">✓</span>
                      <span>Improved employee engagement and satisfaction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 font-bold">✓</span>
                      <span>Greater competitive advantage in dynamic markets</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="conclusion">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Conclusion
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Change management is not a luxury or an afterthought in organizational transformation—it's a fundamental requirement for success. As organizations face accelerating change, the importance of managing the people side of change becomes increasingly critical. By investing in change management capabilities, organizations position themselves to navigate uncertainty, drive adoption, and achieve their strategic objectives in an ever-changing business environment.
                </p>
              </section>
            </div>
          </article>

          {/* Right Sidebar - Social Sharing */}
          <aside className="md:col-span-1 order-3">
            <div className="sticky top-40 space-y-6">
              <div>
                <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-widest mb-6">
                  Share
                </h3>
                <div className="space-y-4">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/share.php?u=https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center"
                    title="Share on Facebook"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#c4a052] hover:bg-[#d9b866] transition-colors flex items-center justify-center text-white cursor-pointer">
                      <Facebook size={20} />
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/sharing/share-offsite/?url=https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center"
                    title="Share on LinkedIn"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#c4a052] hover:bg-[#d9b866] transition-colors flex items-center justify-center text-white cursor-pointer">
                      <Linkedin size={20} />
                    </div>
                  </a>

                  {/* Twitter */}
                  <a
                    href="https://twitter.com/intent/tweet?url=https://example.com&text=Why Change Management Is Important"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center"
                    title="Share on Twitter"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#c4a052] hover:bg-[#d9b866] transition-colors flex items-center justify-center text-white cursor-pointer">
                      <Twitter size={20} />
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:?subject=Why Change Management Is Important&body=Check out this article"
                    className="flex justify-center"
                    title="Share via Email"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#c4a052] hover:bg-[#d9b866] transition-colors flex items-center justify-center text-white cursor-pointer">
                      <Mail size={20} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Next Section Preview */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-light text-gray-700">
            What Is Organizational Change Management?
          </h2>
        </section>
      </main>

      <Footer />
    </div>
  )
}
