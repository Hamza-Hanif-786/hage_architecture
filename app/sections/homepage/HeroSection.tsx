import Image from 'next/image'
import React from 'react'
import heroimage from '@/public/images/home_hero_image.webp'

const HeroSection = () => {
  return (
    <div className='px-8 py-24 inline-flex flex-col justify-start items-start gap-7 xl:gap-10'>
        <div className='flex flex-col justify-start items-start gap-4 sm:gap-6 md:gap-7 xl:gap-10'>
            <h4 className="uppercase text-lg md:text-xl lg:text-2xl font-normal font-['Satoshi'] text-[#E44F39]">/01 Index</h4>
            <h1 className="uppercase text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold font-['Satoshi'] leading-10 md:leading-14 lg:leading-[4.5rem] xl:leading-28">
                Architects that design <span className='text-[#E44F39]'> for future</span>.
            </h1>
            <p className="text-black font-normal text-sm md:text-lg lg:text-xl font-['Satoshi'] md:w-[90%] lg:w-1/2">
                On our website, we offer a captivating journey into the world of inspiring interior design and architecture. With a focus on innovation, elegance, and functionality, we present a portfolio that blends aesthetic beauty with practicality.
            </p>
        </div>
        <div>
            <Image alt='Hero Image' src={heroimage} className='aspect-video' />
        </div>
    </div>
  )
}

export default HeroSection