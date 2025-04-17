import React from 'react'
import Image from 'next/image'
import projectheroimage from '@/public/images/projects_hero_pic.webp'

const page = () => {
  return (
    <div className='px-8 py-24 inline-flex flex-col justify-start items-start gap-7 xl:gap-11'>
        <div className='flex flex-col justify-start items-start gap-4 sm:gap-6 md:gap-7 xl:gap-10'>
            <h1 className="uppercase text-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-['Satoshi']">
                Latest <span className='text-carot'> Project</span>
            </h1>
            <p className="text-black font-normal text-base md:text-lg lg:text-xl font-['Satoshi'] md:w-[90%] lg:w-[60%] xl:w-1/2">
                Explore the breadth and depth of our design expertise through a curated selection of our standout projects. 
                From residential havens to commercial landmarks, each project showcases our commitment to excellence, innovation, and client satisfaction.
            </p>
        </div>
        <div>
            <Image alt='Hero Image' src={projectheroimage} className='aspect-video' />
        </div>
    </div>
  )
}

export default page