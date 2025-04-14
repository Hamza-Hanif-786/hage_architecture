import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo_white.svg'
import { Input } from "@/components/ui/input"
import { FaTwitter, FaLinkedin, FaFacebook, FaGithub, FaDribbble } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='px-8 py-24 bg-black'>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col lg:flex-row justify-between w-full gap-7'>
          <div className='flex flex-col gap-7 xl:gap-10 w-full lg:w-1/2'>
            <Image src={logo} alt='logo' className='w-20' />
            <p className="text-white text-base sm:text-lg xl:text-xl font-normal font-['Satoshi']">
              Explore, discover, and create with Hage. From innovative interior designs to visionary architectural solutions, 
              we&apos;re dedicated to shaping spaces that inspire. 
              Join us on our journey to redefine the possibilities of design.
            </p>
            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2'>
              <div className='p-2 xl:p-2.5'>
                <Link href='/' className="text-white text-base font-medium font-['Inter']">Home</Link>
              </div>
              <div className='p-2 xl:p-2.5'>
                <Link href='/about' className="text-white text-base font-medium font-['Inter']">About</Link>
              </div>
              <div className='p-2 xl:p-2.5'>
                <Link href='/services' className="text-white text-base font-medium font-['Inter']">Services</Link>
              </div>
              <div className='p-2 xl:p-2.5'>
                <Link href='/projects' className="text-white text-base font-medium font-['Inter']">Projects</Link>
              </div>
              <div className='p-2 xl:p-2.5'>
                <Link href='/blogs' className="text-white text-base font-medium font-['Inter']">Blogs</Link>
              </div>
              <div className='p-2 xl:p-2.5'>
                <Link href='/contact' className="text-white text-base font-medium font-['Inter']">Contact Us</Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 w-full lg:w-[30%]'>
            <p className="text-white text-sm font-medium font-['Inter']">Stay up to date</p>
            <div className='flex flex-col sm:flex-row items-center gap-4'>
              <Input type='email' placeholder='Enter your email' className='w-full px-3.5 py-3 h-auto bg-white rounded-none placeholder:text-[#717171]' />
              <button className='w-full sm:w-auto cursor-pointer px-4 py-3 bg-carot rounded-none text-white text-base font-medium font-["Inter"] hover:bg-carot/80 transition-all duration-300 ease-in-out'>
                Subscribe
              </button>
            </div>
            <div className='flex flex-row items-center gap-6'>
              <Link href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
                <FaTwitter className='text-carot size-6' />              
              </Link>
              <Link href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='text-carot size-6' />              
              </Link>
              <Link href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
                <FaFacebook className='text-carot size-6' />              
              </Link>
              <Link href='https://github.com/' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='text-carot size-6' />              
              </Link>
              <Link href='https://dribbble.com/' target='_blank' rel='noopener noreferrer'>
                <FaDribbble className='text-carot size-6' />              
              </Link>
            </div>
          </div>
        </div>
        <div className='pt-8 border-t border-gray-200/20 flex flex-col sm:flex-row items-center justify-between gap-8'>
          <p className="text-gray-400 text-base font-medium font-['Satoshi']">
            All rights reserved © {new Date().getFullYear()} HAGE DESIGN STUDIO. 
          </p>
          <div className='flex flex-row items-center justify-between sm:justify-normal gap-4 w-full sm:w-auto'>
            <Link href='/termsofservice' className="text-gray-400 text-base font-medium font-['Satoshi']">Terms</Link>
            <Link href='/privacypolicy' className="text-gray-400 text-base font-medium font-['Satoshi']">Privacy</Link>
            <Link href='/cookiespolicy' className="text-gray-400 text-base font-medium font-['Satoshi']">Cookies</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer