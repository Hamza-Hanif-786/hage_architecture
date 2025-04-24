import React from 'react'
import Image from 'next/image'
import aboutimage from '@/public/images/home_about_image.webp'

const AboutSection = () => {
  return (
    <div className='bg-black'>
        <div className='px-4 sm:px-6 md:px-8 py-24 inline-flex flex-col justify-start items-start gap-5 md:gap-7 lg:gap-9 xl:gap-11'>
            <h4 className="uppercase text-lg md:text-xl lg:text-2xl font-normal font-['Satoshi'] text-carot">WHY HAGE?</h4>
            <div className='flex flex-col md:flex-row gap-5 w-full'>
                <div className='w-full md:w-[55%]'>
                    <p className='text-xl md:text-2xl lg:text-4xl xl:text-6xl font-medium font-["Satoshi"] text-[#ECE5DE]'>
                        We believe that every space has the potential to be something extraordinary. 
                        From innovative interior designs to revolutionary architectural solutions, we are committed to creating environments that radiate beauty, functionality, and sustainability. 
                    </p>
                </div>
                <div  className='w-full md:w-[45%]'>
                    <Image alt='About Image' src={aboutimage} className='aspect-tablet' />
                </div>
            </div>
            <h4 className="uppercase text-lg md:text-xl lg:text-2xl font-normal font-['Satoshi'] text-carot">OUR MISSION</h4>
            <p className="w-full justify-start text-stone-200 text-base lg:text-lg xl:text-2xl font-medium font-['Satoshi']">
                Our mission is to merge creativity and functionality to craft spaces that not only meet the needs of today but also anticipate the demands of the future. We aim to push boundaries, challenge norms, and redefine the possibilities in interior design and architecture.
            </p>
        </div>
    </div>
  )
}

export default AboutSection