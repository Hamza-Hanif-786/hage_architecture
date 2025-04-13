import Link from 'next/link'
import React from 'react'
import blog1 from '@/public/images/blog1.webp'
import blog7 from '@/public/images/blog7.webp'
import BlogCard from '@/app/components/BlogCard'

const BlogSection = () => {
    const blogs = [
        {
            id: 1,
            image: blog1,
            title: 'Design Tips for Maximizing Your Square Footage',
            date: 'May 20, 2023',
            description: 'Dive into our guide on making the most of compact living spaces, with tips on clever storage solutions, multi-functional furniture, and space-saving design hacks.',
            link: '/blogs/design-tips-for-maximizing-your-square-footage'
        },
        {
            id: 2,
            image: blog7,
            title: 'Building a Greener Future, One Project at a Time',
            date: 'Jan 28, 2024',
            description: 'Join us as we dive into the world of sustainable design practices, from eco-friendly materials to energy-efficient technologies, and discover how you can make a positive impact on the environment through your design choices.',
            link: '/blogs/building-a-greener-future-one-project-at-a-time'
        },
    ];

  return (
    <div className='px-8 py-24 bg-black'>
        <div className='flex flex-col gap-11'>
            <div className='flex flex-col gap-6 sm:gap-9 md:gap-11'>
                <div className='flex flex-row items-center justify-between w-full gap-2'>
                    <h4 className="uppercase text-lg md:text-xl lg:text-2xl font-normal font-['Satoshi'] text-carot">/06 Explore Our Blogs</h4>
                    <Link className="text-center uppercase bg-carot px-2.5 py-2 md:px-4 md:py-3 text-sm sm:text-base font-medium text-white font-['Inter'] rounded-none hover:scale-105 transition-all duration-300 ease-in" href="/blogs">
                        More Blogs
                    </Link>
                </div>
                <p className="text-white text-lg sm:text-xl font-normal font-['Satoshi'] w-full lg:w-1/2">
                    Welcome to the Hage Blog, your go-to destination for inspiration, insights, and expert advice on all things interior design, architecture, and beyond. Discover a treasure trove of articles, tips, and trends curated by our team of design enthusiasts and industry experts.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id}
                        image={blog.image.src}
                        title={blog.title}
                        date={blog.date}
                        description={blog.description}
                        link={blog.link}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default BlogSection