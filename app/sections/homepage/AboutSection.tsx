import React from 'react'
import Image from 'next/image'
import aboutimage from '@/public/images/home_about_image.webp'

const AboutSection = () => {
  return (
    <div className='bg-black'>
        <div className='px-8 py-24 inline-flex flex-col justify-start items-start gap-5 md:gap-7 lg:gap-9 xl:gap-11'>
            <h4 className="uppercase text-lg md:text-xl lg:text-2xl font-normal font-['Satoshi'] text-[#E44F39]">/02 About</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div>
                    <p className='text-xl md:text-2xl lg:text-4xl xl:text-[3.5rem] font-medium font-["Satoshi"] text-[#ECE5DE]'>
                        At Hage, we are dedicated to transforming spaces through visionary interior design and architecture. 
                        <span className='text-[#717171]'>
                            &nbsp;  With a commitment to excellence and innovation, we strive to shape environments that inspire and endure.
                        </span>
                    </p>
                </div>
                <div>
                    <Image alt='About Image' src={aboutimage} className='aspect-square' />
                </div>
            </div>
        </div>
        <div className='px-8 pb-24 pt-0 lg:pt-24 inline-flex flex-col justify-start items-start gap-7 md:gap-9 xl:gap-11'>
            <p className="w-full lg:w-1/2 justify-start text-stone-200 text-base lg:text-lg xl:text-xl font-normal font-['Satoshi']">
                Our mission is to merge creativity and functionality to craft spaces that not only meet the needs of today but also anticipate the demands of the future. We aim to push boundaries, challenge norms, and redefine the possibilities in interior design and architecture.
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-y-7'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h3 className='text-7xl md:text-8xl xl:text-9xl font-bold font-["Satoshi"] leading-20 xl:leading-28 text-[#e44f39]'>15<span className='text-[#ece5de]'>+</span></h3>
                    <p className='text-base md:text-lg xl:text-xl font-normal text-[#ece5de]'>Experience in the industry.</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h3 className='text-7xl md:text-8xl xl:text-9xl font-bold font-["Satoshi"] leading-20 xl:leading-28 text-[#e44f39]'>250</h3>
                    <p className='text-base md:text-lg xl:text-xl font-normal text-[#ece5de]'>Projects Completed</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h3 className='text-7xl md:text-8xl xl:text-9xl font-bold font-["Satoshi"] leading-20 xl:leading-28 text-[#e44f39]'>95<span className='text-[#ece5de]'>%</span></h3>
                    <p className='text-base md:text-lg xl:text-xl font-normal text-[#ece5de]'>Client Satisfaction Rate</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h3 className='text-7xl md:text-8xl xl:text-9xl font-bold font-["Satoshi"] leading-20 xl:leading-28 text-[#e44f39]'>10</h3>
                    <p className='text-base md:text-lg xl:text-xl font-normal text-[#ece5de]'>Awards and Recognitions</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection