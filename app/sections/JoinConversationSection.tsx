import Link from 'next/link'
import React from 'react'

const JoinConversationSection = () => {
  return (
    <div className='px-4 sm:px-6 md:px-8 py-24 bg-carot'>
        <div className='flex flex-col gap-7 sm:gap-9 md:gap-11'>
            <div className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-['Satoshi'] uppercase sm:leading-16 md:leading-20 lg:leading-24 xl:leading-28">
                Join the Conversation
            </div>
            <div className='flex flex-col md:flex-row gap-11 w-full'>
                <div className='w-full md:w-[70%] lg:w-[60%] xl:w-1/2'>
                    <p className="text-white text-base sm:text-lg lg:text-xl font-normal font-['Satoshi']">
                        Explore the breadth and depth of our design expertise through a curated selection of our standout projects. 
                        From residential havens to commercial landmarks, each project showcases our commitment to excellence, innovation, and client satisfaction.
                    </p>
                </div>
                <div className='w-full md:w-[30%] lg:w-[40%] xl:w-1/2 relative'>
                    <Link className="absolute top-0 left-0 text-center uppercase bg-black px-8 py-[18px] text-sm sm:text-base font-medium text-white font-['Inter'] rounded-none hover:scale-105 transition-all duration-300 ease-in" href="/contact">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JoinConversationSection