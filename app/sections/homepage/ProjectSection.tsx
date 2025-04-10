import Link from 'next/link'
import React from 'react'

const ProjectSection = () => {
  return (
    <div className="px-8 py-24">
        <div className='flex flex-col gap-11'>
            <div className='flex flex-col gap-9 sm:gap-11'>
                <div className='flex flex-row items-center justify-between w-full'>
                    <h4 className="uppercase text-lg md:text-xl lg:text-2xl font-normal font-['Satoshi'] text-[#E44F39]">/04 Latest Project</h4>
                    <Link className="uppercase bg-[#E44F39] px-2.5 py-2 md:px-4 md:py-3 text-sm sm:text-base font-medium text-white font-['Inter'] rounded-none hover:bg-black transition-all duration-300 ease-in" href="/project">
                        More Project
                    </Link>
                </div>
                <div className='w-full md:w-1/2'>
                    <p className="text-black text-lg sm:text-xl font-normal font-['Satoshi']">
                        Explore the breadth and depth of our design expertise through a curated selection of our standout projects. From residential havens to commercial landmarks, each project showcases our commitment to excellence, innovation, and client satisfaction.
                    </p>
                </div>
            </div>

        
            <div></div>
        </div>
    </div>
  )
}

export default ProjectSection