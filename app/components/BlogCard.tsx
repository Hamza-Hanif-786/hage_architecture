import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface BlogCardProps {
  image: string,
  title: string,
  date: string,
  description: string,
  link: string,
  textWhite?: boolean
}

const BlogCard: React.FC<BlogCardProps> = ({image, title, date, description, link, textWhite = true}) => {
  return (
    <div className='p-5'>
        <div className='flex flex-col gap-8'>
            <Image src={image} alt={title} width={500} height={500} className='w-full aspect-tablet-landscape' />
            <div>
                <h1 className={`justify-start ${textWhite ? 'text-white' : 'text-black' } text-xs sm:text-sm font-normal font-['Inter']`}>{date}</h1>
                <p className={`${textWhite ? 'text-white' : 'text-black' } text-lg sm:text-xl xl:text-2xl font-semibold font-['Inter'] mt-4`}>{title}</p>
                <p className={`${textWhite ? 'text-white' : 'text-black' } text-sm sm:text-base font-normal font-['Inter'] mt-3`}>{description}</p>
            </div>
            <div>
                <Link href={link} className="uppercase bg-carot px-2.5 py-2 md:px-4 md:py-3 text-sm sm:text-base font-medium text-white font-['Inter'] rounded-none hover:scale-105 transition-all duration-300 ease-in">
                    Read More
                </Link>
            </div>
        </div>

    </div>
  )
}

export default BlogCard