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



const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Interior Design",
      description: "Redefine your built environment with our innovative architectural design solutions. Whether you're planning a new construction project or renovating an existing space.",
      image: service1
    },
    {
      id: 2,
      title: "Architectural Design",
      description: "Redefine your built environment with our innovative architectural design solutions. Whether you're planning a new construction project or renovating an existing space.",
      image: service2
    },
    {
      id: 3,
      title: "Space Planning",
      description: "Redefine your built environment with our innovative architectural design solutions. Whether you're planning a new construction project or renovating an existing space.",
      image: service3
    },
    {
      id: 4,
      title: "Project Management",
      description: "Redefine your built environment with our innovative architectural design solutions. Whether you're planning a new construction project or renovating an existing space.",
      image: service4
    },
    {
      id: 5,
      title: "Consultation and Collaboration",
      description: "Redefine your built environment with our innovative architectural design solutions. Whether you're planning a new construction project or renovating an existing space.",
      image: service5
    },
    {
      id: 6,
      title: "Decoration",
      description: "Redefine your built environment with our innovative architectural design solutions. Whether you're planning a new construction project or renovating an existing space.",
      image: service6
    }
  ]

  return (
    <div className='px-8 py-24'>
      <Accordion type="single" collapsible className="w-full">
        {services.map((service) => (
          <div key={service.id} className='p-5 border-y border-neutral-500'>
            <AccordionItem value={service.title}>
              <AccordionTrigger className='text-3xl sm:text-4xl xl:text-5xl text-black font-bold font-["Satoshi"] rounded-none cursor-pointer hover:no-underline border-none'>{service.title}</AccordionTrigger>
              <AccordionContent className='flex flex-col gap-8'> 
                <div className='w-full lg:w-1/2'>
                  <p className='text-base sm:text-lg xl:text-xl text-black font-normal font-["Satoshi"]'>{service.description}</p>
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