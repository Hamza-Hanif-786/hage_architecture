import React from 'react'
import Image from 'next/image'
import serviceimage from '@/public/images/home_service_image.webp'
import { ChevronsRight } from 'lucide-react'
import Link from 'next/link'


const ServiceSection = () => {
    const servicelinks = [
        { name: 'Interior Design', link: '/services/servicedetail' },
        { name: 'Architectural Design', link: '/services/servicedetail' },
        { name: 'Space Planning', link: '/services/servicedetail' },
        { name: 'Project Management', link: '/services/servicedetail' },
        { name: 'Consultation and Collaboration', link: '/services/servicedetail' },
    ]
  return (
    <div className='px-8 py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div>
                <Image src={serviceimage} alt='service image' className='h-full w-[750px] aspect-tablet' />
            </div>
            <div className='flex flex-col justify-between h-full gap-20 lg:gap-0'>
                <div className='flex flex-col gap-5 md:gap-5 lg:gap-9 xl:gap-11'>
                    <h4 className="uppercase text-lg md:text-xl lg:text-2xl font-normal font-['Satoshi'] text-carot">/03 Our Service</h4>
                    <p className="text-black text-lg lg:text-xl font-normal font-['Satoshi']">
                        At Hage, we offer a comprehensive range of services aimed at fulfilling your design needs and exceeding your expectations. Explore our array of offerings tailored to bring your vision to life with creativity, expertise, and attention to detail.
                    </p>
                </div>
                <div>
                    <ul className='space-y-2 lg:space-y-4'>
                        {servicelinks.map((service, index) => (
                            <Link href={service.link} key={index} className='group cursor-pointer flex items-center justify-between border-neutral-500 border-b pb-3 xl:pb-5 text-black text-xl xl:text-2xl font-normal font-["Satoshi"]'>
                                <div className='flex items-center gap-4'>
                                    <div className='size-3 bg-carot rounded-full' />
                                    {service.name}
                                </div>
                                <ChevronsRight className='w-6 h-6 group-hover:translate-x-1 duration-300 ease-in' />
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceSection