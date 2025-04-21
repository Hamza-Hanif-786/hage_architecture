import React from 'react'
import Image from 'next/image'
import awardimage from "@/public/images/award_section_pic.webp"

const AwardsSection = () => {
    const awards = [
        { name: 'Interior Design Excellence Award (IDEA)', year: 2022 },
        { name: 'Architectural Innovation Award', year: 2023 },
        { name: 'Green Building Leadership Award', year: 2024 },
        { name: 'Best Commercial Interior Design', year: 2021 },
        { name: 'Design Firm of the Year', year: 2020 },
    ];

  return (
    <div className='px-8 py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div>
                <Image src={awardimage} alt='service image' className='h-full w-[750px] aspect-tablet object-cover' />
            </div>
            <div className='flex flex-col justify-between h-full gap-20 lg:gap-0'>
                <div className='flex flex-col gap-5 md:gap-5 lg:gap-9 xl:gap-11'>
                    <h4 className="uppercase text-lg md:text-xl lg:text-2xl font-normal font-['Satoshi'] text-carot">Awards and Recognition</h4>
                    <p className="text-black text-lg lg:text-xl font-normal font-['Satoshi']">
                        At Hage, we take pride in our commitment to excellence and innovation, and we&apos;re honored to have our efforts recognized by industry leaders and peers. 
                        Explore some of the prestigious awards and accolades we&apos;ve received.
                    </p>
                </div>
                <div>
                    <ul className='space-y-2 lg:space-y-4'>
                        {awards.map((award, index) => (
                            <div key={index} className='flex items-center justify-between border-neutral-500 border-b pb-3 xl:pb-5 text-black text-xl xl:text-2xl font-normal font-["Satoshi"]'>
                                <div className='flex items-center gap-4'>
                                    <div className='size-3 bg-carot rounded-full' />
                                    {award.name}
                                </div>
                                <p className="text-black text-xl xl:text-2xl font-normal font-['Satoshi']">{award.year}</p>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AwardsSection