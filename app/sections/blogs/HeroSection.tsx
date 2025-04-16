import React from 'react'

const HeroSection = () => {
  return (
    <div className='px-8 py-24 inline-flex flex-col justify-start items-start gap-7 xl:gap-10'>
        <div className='flex flex-col justify-start items-start gap-4 sm:gap-6 md:gap-7 xl:gap-10'>
            <h1 className="uppercase text-black text-5xl sm:text-5xl md:text-[4rem] lg:text-[5.5rem] xl:text-9xl font-bold font-['Satoshi'] leading-12 md:leading-14 lg:leading-24 xl:leading-28">
                Explore <span className='text-carot'> Our Blog</span>.
            </h1>
            <p className="text-black font-normal text-base md:text-lg lg:text-xl font-['Satoshi'] md:w-[90%] lg:w-1/2">
                Welcome to the Hage Blog, your ultimate source of inspiration, insights, and expert advice on all things design, architecture, and lifestyle. 
                Dive into our collection of articles crafted by our team of design enthusiasts and industry experts:
            </p>
        </div>
    </div>
  )
}

export default HeroSection