import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <div className="mx-auto max-w-screen px-4 sm:px-6 lg:px-8">
                <div className="flex py-5 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <Link className="block" href="/">
                            <span className="sr-only">HAGE</span>
                            <svg width="66" height="32" viewBox="0 0 66 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="37" height="25" fill="#E44F39"/>
                                <path d="M3.9375 19V4.45455H7.88636V10.1364H13.1136V4.45455H17.0625V19H13.1136V13.3182H7.88636V19H3.9375ZM22.7159 19H18.4545L23.2557 4.45455H28.6534L33.4545 19H29.1932L26.0114 8.46023H25.8977L22.7159 19ZM21.9205 13.2614H29.9318V16.2159H21.9205V13.2614Z" fill="white"/>
                                <path d="M48.2859 9.25568C48.2243 9.00473 48.1272 8.78456 47.9947 8.59517C47.8621 8.40104 47.6964 8.23769 47.4975 8.10511C47.3034 7.9678 47.0761 7.866 46.8157 7.79972C46.56 7.72869 46.2783 7.69318 45.9705 7.69318C45.3076 7.69318 44.7418 7.8518 44.2731 8.16903C43.8091 8.48627 43.454 8.94318 43.2077 9.53977C42.9663 10.1364 42.8455 10.8561 42.8455 11.6989C42.8455 12.5511 42.9615 13.2803 43.1935 13.8864C43.4255 14.4924 43.7712 14.9564 44.2305 15.2784C44.6897 15.6004 45.2603 15.7614 45.9421 15.7614C46.5434 15.7614 47.043 15.6738 47.4407 15.4986C47.8432 15.3234 48.1438 15.0748 48.3427 14.7528C48.5415 14.4309 48.641 14.0521 48.641 13.6165L49.3228 13.6875H45.9989V10.875H52.4478V12.892C52.4478 14.2178 52.1661 15.3518 51.6026 16.294C51.0439 17.2315 50.2721 17.9512 49.2873 18.4531C48.3072 18.9503 47.1826 19.1989 45.9137 19.1989C44.498 19.1989 43.2551 18.8982 42.185 18.2969C41.1149 17.6955 40.2792 16.8385 39.6779 15.7259C39.0813 14.6132 38.783 13.2898 38.783 11.7557C38.783 10.553 38.9653 9.48769 39.3299 8.55966C39.6992 7.63163 40.2106 6.84801 40.864 6.20881C41.5174 5.56487 42.2726 5.07955 43.1296 4.75284C43.9866 4.4214 44.9052 4.25568 45.8853 4.25568C46.747 4.25568 47.5472 4.37879 48.2859 4.625C49.0292 4.86648 49.685 5.21212 50.2532 5.66193C50.8261 6.10701 51.2878 6.63494 51.6381 7.24574C51.9885 7.85653 52.2016 8.52651 52.2773 9.25568H48.2859ZM54.2891 19V4.45455H64.772V7.63636H58.2379V10.1364H64.2322V13.3182H58.2379V15.8182H64.7436V19H54.2891Z" fill="black"/>
                            </svg>
                        </Link>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6">
                                <li>
                                    <Link className="text-black text-base font-medium font-['Inter']" href="/"> Home </Link>
                                </li>

                                <li>
                                    <Link className="text-black text-base font-medium font-['Inter']" href="/about"> About </Link>
                                </li>

                                <li>
                                    <Link className="text-black text-base font-medium font-['Inter']" href="/services"> Services </Link>
                                </li>

                                <li>
                                    <Link className="text-black text-base font-medium font-['Inter']" href="/projects"> Projects </Link>
                                </li>

                                <li>
                                    <Link className="text-black text-base font-medium font-['Inter']" href="/blogs"> Blogs </Link>
                                </li>
                                
                                <li>
                                    <Link className="text-black text-base font-medium font-['Inter']" href="/contact"> Contact Us </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div>
                                <Link className="bg-[#E44F39] px-4 py-3 text-base font-medium text-white font-['Inter'] rounded-none" href="/contact">
                                    Get Started
                                </Link>
                                
                            </div>

                            <div className="block md:hidden">
                                <button
                                    className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header