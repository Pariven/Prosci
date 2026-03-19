'use client'

import React, { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function WhatIsChangeManagementPage() {
  const [activeTab, setActiveTab] = useState('what-is')

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Background Image */}
      <div className="relative h-80 md:h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=500&fit=crop')" }}>
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(79, 65, 137, 0.65)' }}></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Change Management
          </h1>
          <p className="text-lg md:text-xl text-gray-100">
            Driving change success by preparing, equipping and supporting individuals to thrive through change.
          </p>
        </div>
      </div>

      {/* Contents Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-8">
            <button
              onClick={() => setActiveTab('contents')}
              className={`py-4 px-2 font-medium transition-colors border-b-2 ${
                activeTab === 'contents'
                  ? 'text-[#1e3a5f] border-[#c4a052]'
                  : 'text-gray-600 border-transparent hover:text-[#1e3a5f]'
              }`}
            >
              Contents
            </button>
            <button
              onClick={() => setActiveTab('what-is')}
              className={`py-4 px-2 font-medium transition-colors border-b-2 ${
                activeTab === 'what-is'
                  ? 'text-[#c4a052] border-[#c4a052]'
                  : 'text-gray-600 border-transparent hover:text-[#1e3a5f]'
              }`}
            >
              What is Change Management?
            </button>
            <button
              onClick={() => setActiveTab('why')}
              className={`py-4 px-2 font-medium transition-colors border-b-2 ${
                activeTab === 'why'
                  ? 'text-[#c4a052] border-[#c4a052]'
                  : 'text-gray-600 border-transparent hover:text-[#1e3a5f]'
              }`}
            >
              Why Change Management?
            </button>
            <button
              onClick={() => setActiveTab('process')}
              className={`py-4 px-2 font-medium transition-colors border-b-2 ${
                activeTab === 'process'
                  ? 'text-[#c4a052] border-[#c4a052]'
                  : 'text-gray-600 border-transparent hover:text-[#1e3a5f]'
              }`}
            >
              Change Management Process
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Content Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">What is Change Management?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Left Column - Main Text */}
            <div className="md:col-span-2">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Change management as a discipline has evolved and matured over the past quarter of a century. Prosci research tells us that for changes to be successful, we must prepare, equip and support individuals moving through changes so that they successfully adopt the changes. Without adoption, changes will not be successful and we will not deliver the desired outcomes.
              </p>
            </div>

            {/* Right Column - Highlighted Box */}
            <div className="md:col-span-1">
              <div className="bg-teal-100 border-l-4 border-teal-500 p-6 rounded h-full flex items-center">
                <p className="text-teal-800 font-semibold text-center text-lg">
                  Change management is an enabling framework for managing the people side of change.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4 mt-8">More than just communications</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Managing change is often simply comprised of a communications plan, where executive leaders or project managers communicate to the organization that there's change coming (typically on short notice). But change management is much more than communicating what is changing, such as a system implementation or an acquisition.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                We must support people in the organization through their transitions from the current state to the future state, and understand what is needed to influence each person to embrace and adopt the change. In this way, organizations can significantly increase the chances of project success and their project investments paying off.
              </p>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop" alt="Team collaboration" className="rounded-lg shadow-lg mb-4" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white rounded-full shadow-lg p-2">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&h=150&fit=crop" alt="Process diagram" className="w-full h-full rounded-full object-cover" />
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#1e3a5f] mb-8 mt-16">The need for a structured, flexible methodology</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
            <div className="order-2 md:order-1">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop" alt="Structured methodology" className="rounded-lg shadow-lg" />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Organizations adopt the discipline of change management in different ways depending on their business needs. For instance, they have a must-win technology implementation that can benefit from change management, or they decide to invest in change management as an organizational capability to support aggressive business growth. In other words, change management can vary in scope and purpose, and one organization might define and implement it differently than another.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                So it's especially important that companies leverage a <span className="font-semibold text-[#1e3a5f]">structured yet flexible approach</span> to managing change in their organizations.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-[#f0f4f8] p-6 rounded-lg">
              <h4 className="font-bold text-[#1e3a5f] mb-3">Change management at the project level</h4>
              <p className="text-gray-700">
                The application of the structured process and set of tools for leading the people side of change to achieve a desired outcome on our project.
              </p>
            </div>
            <div className="bg-[#f0f4f8] p-6 rounded-lg">
              <h4 className="font-bold text-[#1e3a5f] mb-3">Change management at the organizational level</h4>
              <p className="text-gray-700">
                A leadership competency for enabling change within our organization and a strategic capability designed to increase our change capability and responsiveness.
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Whatever change management might look like, the end goal is to help individuals make a change to help the organization be more successful.
          </p>
        </section>

        {/* Why Change Management Section */}
        <section className="mb-16 mt-12">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Why Change Management?</h2>
              <p className="text-gray-700 leading-relaxed">
                How you manage change impacts the things that matter most to your organization, including your employees, your customers and your profitability. Given that organizations are facing faster and more complex changes than ever before, the reasons for change management are only growing. But more than anything, change management prepares, equips and supports employees, so they can engage, adopt and use the change successfully.
              </p>
            </div>
            <div className="md:col-span-1">
              <div className="bg-teal-100 border-l-4 border-teal-500 p-6 rounded h-full flex items-center">
                <div className="text-center">
                  <p className="text-teal-800 font-bold mb-2">The Key Question:</p>
                  <p className="text-teal-700 font-semibold text-sm">
                    What percentage of overall results and outcomes depends on adoption and usage of the change?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Improving Project Outcomes Section */}
          <h3 className="text-3xl font-bold text-[#1e3a5f] mb-8">Improving project outcomes</h3>
          
          <div className="grid md:grid-cols-2 gap-12 mb-8">
            {/* Left Column - Text and Chart */}
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Project management, which focuses on the technical side of change, and change management, which focuses on the people side of change, both play critical roles in change success. When using a best-practices approach to managing change such implementing a new accounting platform to streamline processes, how much can you improve the likelihood of meeting your project objectives? By a whopping <span className="font-bold text-[#4a7ba7]">7X</span>, according to Prosci's research, where we've been surveying practitioners around the globe for more than 25 years.
              </p>

              {/* Chart Image - Correlation of Change Management */}
              <div className="bg-white rounded-lg p-6 mb-6 h-96 flex items-center justify-center border border-gray-200">
                <svg viewBox="0 0 600 400" className="w-full h-full">
                  {/* Axes */}
                  <line x1="80" y1="320" x2="550" y2="320" stroke="#333" strokeWidth="2" />
                  <line x1="80" y1="320" x2="80" y2="40" stroke="#333" strokeWidth="2" />
                  
                  {/* Y-axis labels */}
                  <text x="20" y="325" fontSize="12" fill="#666">0</text>
                  <text x="10" y="215" fontSize="12" fill="#666">20</text>
                  <text x="10" y="105" fontSize="12" fill="#666">100</text>
                  
                  {/* Y-axis label */}
                  <text x="20" y="30" fontSize="13" fontWeight="bold" fill="#1e3a5f">Percentage That Met</text>
                  <text x="20" y="50" fontSize="13" fontWeight="bold" fill="#1e3a5f">or Exceeded Targets</text>
                  
                  {/* X-axis labels */}
                  <text x="60" y="350" fontSize="12" fill="#666">Poor</text>
                  <text x="180" y="350" fontSize="12" fill="#666">Fair</text>
                  <text x="310" y="350" fontSize="12" fill="#666">Good</text>
                  <text x="430" y="350" fontSize="12" fill="#666">Excellent</text>
                  
                  {/* X-axis label */}
                  <text x="280" y="385" fontSize="13" fontWeight="bold" fill="#1e3a5f">Effectiveness of Change Management Program</text>
                  
                  {/* Grid lines */}
                  <line x1="80" y1="280" x2="550" y2="280" stroke="#e0e0e0" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="80" y1="160" x2="550" y2="160" stroke="#e0e0e0" strokeWidth="1" strokeDasharray="5,5" />
                  
                  {/* Data points and line */}
                  <polyline points="110,300 220,240 330,160 440,80" stroke="#4a7ba7" strokeWidth="3" fill="none" />
                  
                  {/* Points */}
                  <circle cx="110" cy="300" r="5" fill="#4a7ba7" />
                  <circle cx="220" cy="240" r="5" fill="#4a7ba7" />
                  <circle cx="330" cy="160" r="5" fill="#4a7ba7" />
                  <circle cx="440" cy="80" r="5" fill="#4a7ba7" />
                  
                  {/* Data labels at points */}
                  <text x="100" y="330" fontSize="12" fill="#666">13%</text>
                  <text x="210" y="270" fontSize="12" fill="#666">39%</text>
                  <text x="320" y="190" fontSize="12" fill="#666">73%</text>
                  <text x="430" y="70" fontSize="12" fill="#666">88%</text>
                  
                  {/* Multiplier circles */}
                  {/* 3X Circle */}
                  <circle cx="220" cy="220" r="35" fill="none" stroke="#2c3e7f" strokeWidth="2" />
                  <text x="205" y="235" fontSize="24" fontWeight="bold" fill="#2c3e7f">3X</text>
                  
                  {/* 7X Circle */}
                  <circle cx="440" cy="50" r="35" fill="none" stroke="#2c3e7f" strokeWidth="2" />
                  <text x="425" y="65" fontSize="24" fontWeight="bold" fill="#2c3e7f">7X</text>
                </svg>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The costs and risks of mismanaging change by ignoring the people side of change can be significant, impacting not just project outcomes, but timelines, budgets and more.
              </p>
            </div>

            {/* Right Column - Statistics Circles */}
            <div className="flex flex-col justify-center gap-8">
              <p className="text-gray-700 leading-relaxed text-center">
                Prosci's research consistently shows that organizations with excellent change management achieve greater success with change.
              </p>

              {/* 7X Circle */}
              <div className="flex justify-center">
                <div className="w-40 h-40 rounded-full bg-amber-100 border-4 border-[#4a7ba7] flex flex-col items-center justify-center text-center p-4 shadow-lg">
                  <p className="text-4xl font-bold text-[#4a7ba7] mb-2">7X</p>
                  <p className="text-sm text-gray-700 font-semibold">More likely to achieve project objectives</p>
                </div>
              </div>

              {/* 4.6X Circle */}
              <div className="flex justify-center">
                <div className="w-40 h-40 rounded-full bg-amber-100 border-4 border-[#4a7ba7] flex flex-col items-center justify-center text-center p-4 shadow-lg">
                  <p className="text-4xl font-bold text-[#4a7ba7] mb-2">4.6X</p>
                  <p className="text-sm text-gray-700 font-semibold">More likely to stay on or ahead of schedule</p>
                </div>
              </div>

              {/* 1.4X Circle */}
              <div className="flex justify-center">
                <div className="w-40 h-40 rounded-full bg-amber-100 border-4 border-[#4a7ba7] flex flex-col items-center justify-center text-center p-4 shadow-lg">
                  <p className="text-4xl font-bold text-[#4a7ba7] mb-2">1.4X</p>
                  <p className="text-sm text-gray-700 font-semibold">More likely to stay on or under budget</p>
                </div>
              </div>
            </div>
          </div>

          {/* Without vs With Change Management */}
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h4 className="font-bold text-red-700 mb-3">Without Change Management</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3">•</span>
                  <span>Employees feel surprised and besieged by change</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3">•</span>
                  <span>Failed project results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3">•</span>
                  <span>Extended project timelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3">•</span>
                  <span>Additional project costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3">•</span>
                  <span>Low adoption and usage</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h4 className="font-bold text-green-700 mb-3">With Change Management</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">•</span>
                  <span>Employees feel prepared, equipped and supported</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">•</span>
                  <span>Likely to meet project objectives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">•</span>
                  <span>Likely to stay on schedule</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">•</span>
                  <span>Likely to stay on budget</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">•</span>
                  <span>People-dependent ROI achieved</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#f0f4f8] p-6 rounded-lg my-8">
            <h4 className="font-bold text-[#1e3a5f] mb-3">With excellent change management, employees:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#c4a052] font-bold mr-3">✓</span>
                <span>Adopt changes faster, more completely and more proficiently</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#c4a052] font-bold mr-3">✓</span>
                <span>Stay engaged in the organization during disruptive change</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#c4a052] font-bold mr-3">✓</span>
                <span>Understand why the change is happening</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#c4a052] font-bold mr-3">✓</span>
                <span>Have the time and tools to get on board and feel heard and supported</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Applying the principles of change management before, during and after a project can go a long way in helping you achieve the desired returns on your project investments.
          </p>

          <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4 mt-8">Building change capability</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            You can increase your organization's capacity for change and better prepare for future change by building your overall change capability. We refer to this capability as enterprise change management:
          </p>

          <div className="bg-[#f0f4f8] p-6 rounded-lg mb-6">
            <h4 className="font-bold text-[#1e3a5f] mb-3">What is Enterprise Change Management?</h4>
            <p className="text-gray-700 mb-4">
              Basically, enterprise change management is the systematic deployment of change management skills, tools and processes throughout an organization. You can gain these capabilities through avenues such as formally training key roles in your organization or getting hands-on support from outside experts to build those capabilities internally.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
