import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import notfound_image from '@/public/images/404_pic.webp'

export default function NotFound() {
  return (
    <div className='px-8 py-24'>
        <div className='flex flex-col gap-11'>
            <div className='flex flex-col gap-7 md:gap-10'>
                <h1 className="text-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-['Satoshi'] uppercase md:leading-20 lg:leading-24 xl:leading-28">
                    404 Error: <span className="text-carot">Page Not Found</span>
                </h1>
                <div className='flex flex-col md:flex-row gap-4 justify-between items-start md:items-center'>
                    <p className="text-black text-lg lg:text-xl font-normal font-['Satoshi']">
                        Oops! It seems like the page you&apos;re looking for is not here.<br/>Don&apos;t worry, it happens to the best of us. 
                    </p>
                    <Link href='/' className="text-center bg-carot px-2.5 py-2 md:px-3 md:py-2.5 lg:px-4.5 lg:py-3 text-sm sm:text-base font-medium text-white font-['Inter'] rounded-none hover:bg-black transition-all duration-300 ease-in">
                        GO BACK TO HOMEPAGE
                    </Link>
                </div>
            </div>
            <div>
                <Image src={notfound_image} alt='notfound' className='w-full h-auto' />
            </div>
        </div>
    </div>
  )
}