import React from 'react'
import JoinConversationSection from '@/app/sections/JoinConversationSection'
import service2 from "@/public/images/services/architectural_design.webp"
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div className='px-4 sm:px-6 md:px-8 py-24 inline-flex flex-col justify-start items-start gap-7 xl:gap-11'>
        <div className='flex flex-col justify-start items-start gap-4 sm:gap-6 md:gap-7 xl:gap-10'>
          <h1 className="uppercase text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold font-['Satoshi'] leading-10 md:leading-14 lg:leading-[4.5rem] xl:leading-28">
            ARCHITECTURAL DESIGN
          </h1>
          <p className="text-black font-normal text-base md:text-lg lg:text-xl font-['Satoshi']">
            At Hage, we offer comprehensive architectural design services tailored to meet the unique needs of each client and project. 
            Our team of experienced architects combines creativity, technical expertise, and a deep understanding of architectural principles to deliver innovative and functional designs that surpass expectations.
          </p>
        </div>
        <div>
          <Image alt='Hero Image' src={service2} className='aspect-video' />
        </div>
      </div>
      <div className='px-4 sm:px-6 md:px-8 py-24 flex flex-col gap-12 items-center'>
        <div className='gap-12 w-full md:w-[80%] lg:w-[70%] xl:w-[60%] flex flex-col items-center'>

          <div className='space-y-5'>
            <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">
              Our Architectural Design Process:
            </h3>
            <ol className="list-decimal space-y-3 pl-7">
              <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                Initial Consultation: We begin by meeting with you to discuss your project goals, budget, and timeline. 
                During this consultation, we&apos;ll also assess the site and gather any relevant information needed to proceed.
              </li>
              <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                Concept Development: Using the information gathered during the initial consultation, our team will develop initial design concepts that reflect your vision and objectives. 
                We&apos;ll present these concepts to you for feedback and discussion, ensuring that we&apos;re on the right track before moving forward.
              </li>
              <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                Design Development: Once a concept is approved, we&apos;ll refine the design and develop detailed architectural drawings and plans. 
                This phase may include 3D modeling to provide a clear visualization of the project.
              </li>
              <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                Permitting and Approvals: We&apos;ll work closely with local authorities to obtain necessary permits and approvals for the project, ensuring compliance with building codes and regulations.
              </li>
              <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                Construction Documentation: Our team will prepare comprehensive construction documentation, including detailed drawings, specifications, and schedules, to guide contractors through the construction process.
              </li>
              <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                Construction Administration: Throughout the construction phase, we&apos;ll provide ongoing support and oversight to ensure that the project is executed according to the design intent and meets quality standards.
              </li>
            </ol>
          </div>

          <div className='space-y-5'>
            <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">
              Our Architectural Design Services Include:
            </h3>
            <ul className="list-disc space-y-3 pl-7">
              <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                New Construction Design
              </li>
              <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                Renovation and Restoration Design              
              </li>
              <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                Site Planning and Development
              </li>
              <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                Interior Space Planning
              </li>
              <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                Sustainable Design Solutions
              </li>
              <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                Historic Preservation
              </li>
              <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                Building Information Modeling (BIM)
              </li>
            </ul>
          </div>

          <div className='space-y-5'>
            <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">
              Why Choose Hage for Your Architectural Design Needs?
            </h3>
            <ul className="list-disc space-y-3 pl-7">
              <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                Experience: Our team brings years of experience and a diverse portfolio of projects across various industries.
              </li>
              <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                Innovation: We&apos;re committed to pushing the boundaries of design and exploring innovative solutions that enhance the built environment.
              </li>
              <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                Collaboration: We believe in the power of collaboration and work closely with clients, consultants, and stakeholders to achieve shared goals.
              </li>
              <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                Quality: We&apos;re dedicated to delivering high-quality designs that meet the needs of our clients and stand the test of time.
              </li>
            </ul>
          </div>

        </div>
      </div>
      <JoinConversationSection />
    </div>
  )
}

export default page