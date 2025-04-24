import React from 'react'
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import service1 from "@/public/images/services/interior_design.webp"
import service2 from "@/public/images/services/architectural_design.webp"
import service3 from "@/public/images/services/space_planning.webp"
import service4 from "@/public/images/services/project_management.webp"
import service5 from "@/public/images/services/consultation_collaboration.webp"
import service6 from "@/public/images/services/decoration.webp"
import Link from 'next/link';



const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Interior Design",
      description: "Redefine your built environment with our innovative architectural design solutions. Whether you're planning a new construction project or renovating an existing space.",
      image: service1,
      link: "/services/servicedetail"
    },
    {
      id: 2,
      title: "Architectural Design",
      description: "Redefine your built environment with our innovative architectural design solutions. Whether you're planning a new construction project or renovating an existing space.",
      image: service2,
      link: "/services/servicedetail"
    },
    {
      id: 3,
      title: "Space Planning",
      description: "Redefine your built environment with our innovative architectural design solutions. Whether you're planning a new construction project or renovating an existing space.",
      image: service3,
      link: "/services/servicedetail"
    },
    {
      id: 4,
      title: "Project Management",
      description: "Redefine your built environment with our innovative architectural design solutions. Whether you're planning a new construction project or renovating an existing space.",
      image: service4,
      link: "/services/servicedetail"
    },
    {
      id: 5,
      title: "Consultation and Collaboration",
      description: "Redefine your built environment with our innovative architectural design solutions. Whether you're planning a new construction project or renovating an existing space.",
      image: service5,
      link: "/services/servicedetail"
    },
    {
      id: 6,
      title: "Decoration",
      description: "Redefine your built environment with our innovative architectural design solutions. Whether you're planning a new construction project or renovating an existing space.",
      image: service6,
      link: "/services/servicedetail"
    }
  ]

  return (
    <div className='px-4 sm:px-6 md:px-8 py-24'>
      <Accordion type="single" collapsible className="w-full">
        {services.map((service) => (
          <div key={service.id} className='p-5 border-y border-neutral-500'>
            <AccordionItem value={service.title}>
              <AccordionTrigger className='text-3xl sm:text-4xl xl:text-5xl text-black font-bold font-["Satoshi"] rounded-none cursor-pointer hover:no-underline border-none'>{service.title}</AccordionTrigger>
              <AccordionContent className='flex flex-col gap-8'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-3 w-full'>
                  <div className='w-full lg:w-1/2'>
                    <p className='text-base sm:text-lg xl:text-xl text-black font-normal font-["Satoshi"]'>{service.description}</p>
                  </div>
                  <Link href={service.link} className="w-full lg:w-auto text-center uppercase bg-carot px-3 py-2.5 md:px-4 md:py-3 text-sm sm:text-base font-medium text-white font-['Inter'] rounded-none hover:bg-black transition-all duration-300 ease-in">
                    View More
                  </Link>
                </div> 
                
                <div>
                  <Image src={service.image} alt={service.title} className='w-full h-full object-cover aspect-video' />
                </div>
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </div>
  )
}

export default ServicesSection