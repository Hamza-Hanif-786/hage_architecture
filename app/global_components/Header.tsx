"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import { usePathname } from 'next/navigation'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const Header = () => {
    const pathname = usePathname();

    return (
        <header>
            <div className="mx-auto max-w-screen px-4 py-7 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <Link className="block" href="/">
                            <span className="sr-only">HAGE</span>
                            <Image src={logo} alt="Logo" className="w-20" />                         
                        </Link>
                    </div>

                    <div className="md:flex md:items-center md:gap-8">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-4 lg:gap-5 xl:gap-6">
                                <li>
                                    <Link className={`${pathname === '/' ? 'text-black' : 'text-black/70'} text-base font-medium font-['Inter']`} href="/"> Home </Link>
                                </li>

                                <li>
                                    <Link className={`${pathname === '/about' ? 'text-black' : 'text-black/70'} text-base font-medium font-['Inter']`} href="/about"> About </Link>
                                </li>

                                <li>
                                    <Link className={`${pathname === '/services' ? 'text-black' : 'text-black/70'} text-base font-medium font-['Inter']`} href="/services"> Services </Link>
                                </li>

                                <li>
                                    <Link className={`${pathname === '/projects' ? 'text-black' : 'text-black/70'} text-base font-medium font-['Inter']`} href="/projects"> Projects </Link>
                                </li>

                                <li>
                                    <Link className={`${pathname === '/blogs' ? 'text-black' : 'text-black/70'} text-base font-medium font-['Inter']`} href="/blogs"> Blogs </Link>
                                </li>
                                
                                <li>
                                    <Link className={`${pathname === '/contact' ? 'text-black' : 'text-black/70'} text-base font-medium font-['Inter']`} href="/contact"> Contact Us </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-2 md:gap-4">
                            <div>
                                <Link className="bg-[#E44F39] px-2.5 py-2 md:px-4 md:py-3 text-base font-medium text-white font-['Inter'] rounded-none" href="/contact">
                                    Get Started
                                </Link>
                                
                            </div>

                            <div className="block md:hidden">
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <button className="rounded-sm outline-none p-2 text-gray-600 transition hover:text-gray-600/75">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="size-7"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                            </svg>
                                        </button>
                                    </SheetTrigger>
                                    <SheetContent className='w-1/2 bg-[#ECE5DE]'>
                                        <SheetHeader>
                                            <VisuallyHidden>
                                                <SheetTitle>HAGE</SheetTitle>
                                            </VisuallyHidden>
                                            <div>
                                                <Link className="block" href="/">
                                                    <span className="sr-only">HAGE</span>
                                                    <Image src={logo} alt="Logo" className="w-16" />
                                                </Link>
                                            </div>
                                        </SheetHeader>    
                                            <ul className="flex flex-col gap-4 px-4">
                                                <li>
                                                    <Link className={`${pathname === '/' ? 'text-black' : 'text-black/70'} text-base font-medium font-['Inter']`} href="/"> Home </Link>
                                                </li>
                                                <li>
                                                    <Link className={`${pathname === '/about' ? 'text-black' : 'text-black/70'} text-base font-medium font-['Inter']`} href="/about"> About </Link>
                                                </li>
                                                <li>
                                                    <Link className={`${pathname === '/services' ? 'text-black' : 'text-black/70'} text-base font-medium font-['Inter']`} href="/services"> Services </Link>
                                                </li>
                                                <li>
                                                    <Link className={`${pathname === '/projects' ? 'text-black' : 'text-black/70'} text-base font-medium font-['Inter']`} href="/projects"> Projects </Link>
                                                </li>
                                                <li>
                                                    <Link className={`${pathname === '/blogs' ? 'text-black' : 'text-black/70'} text-base font-medium font-['Inter']`} href="/blogs"> Blogs </Link>
                                                </li>
                                                <li>
                                                    <Link className={`${pathname === '/contact' ? 'text-black' : 'text-black/70'} text-base font-medium font-['Inter']`} href="/contact"> Contact Us </Link>
                                                </li>
                                            </ul>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header