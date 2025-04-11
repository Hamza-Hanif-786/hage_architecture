import React from 'react'
import Image from 'next/image'

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    city: string;
    year: string;
    type: string;
    direction?: 'ltr' | 'rtl';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, city, year, type, direction = 'ltr' }) => {
  return (
    <div className='border-black border-1 border-x-0'>
        <div className='py-11'>
            <div className={`w-full flex ${direction === 'rtl' ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col justify-between gap-5 `}>
                <div className='w-full md:w-1/2 lg:w-[40%]'>
                    <div className='flex flex-col justify-between h-full gap-8'>
                        <div className='space-y-1.5 lg:space-y-3 xl:space-y-5'>
                            <h3 className="text-black text-xl sm:text-2xl lg:text-4xl font-medium font-['Satoshi'] uppercase">
                                {title}
                            </h3>
                            <p className="text-black text-base sm:text-lg lg:text-xl font-normal font-['Satoshi']">
                                {description}
                            </p>
                        </div>
                        <div className='space-y-1.5 lg:space-y-3 xl:space-y-5'>
                            <h4 className="text-black text-lg sm:text-xl lg:text-2xl font-medium font-['Satoshi']">
                                {type} Architecture
                            </h4>
                            <p className="text-neutral-500 text-base sm:text-lg lg:text-xl font-normal font-['Satoshi']">
                                {city} /{year}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-[60%]'>
                    <Image className='aspect-tablet-landscape' src={imageUrl} alt={title} width={900} height={500} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard