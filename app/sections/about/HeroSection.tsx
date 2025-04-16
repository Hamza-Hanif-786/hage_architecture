import Image from 'next/image'
import React from 'react'
import heroimage from '@/public/images/about_hero_image.webp'

const HeroSection = () => {
  return (
    <div className='px-8 py-24 inline-flex flex-col justify-start items-start gap-7 xl:gap-10'>
        <div className='flex flex-col justify-start items-start gap-4 sm:gap-6 md:gap-7 xl:gap-10'>
            <h1 className="uppercase text-black text-5xl sm:text-5xl md:text-[4rem] lg:text-[5.5rem] xl:text-9xl font-bold font-['Satoshi'] leading-12 md:leading-14 lg:leading-24 xl:leading-28">
                Welcome to <span className='text-carot'> Hage</span>.
            </h1>
            <p className="text-black font-normal text-base md:text-lg lg:text-xl font-['Satoshi'] md:w-[90%] lg:w-1/2">
                We are Hage, a passionate team inspired by the power of design to transform the world around us. 
                Since the inception of our journey, we have built a strong foundation on innovation, dedication, and visionary outlook.
            </p>
        </div>
        <div>
            <Image alt='Hero Image' src={heroimage} className='aspect-video' />
        </div>
    </div>
  )
}

export default HeroSection