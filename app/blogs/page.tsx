import React from 'react'
import blog_pic_1 from '@/public/images/blog1.webp'
import blog_pic_2 from '@/public/images/blog2.webp'
import blog_pic_3 from '@/public/images/blog3.webp'
import blog_pic_4 from '@/public/images/blog4.webp'
import blog_pic_5 from '@/public/images/blog5.webp'
import blog_pic_6 from '@/public/images/blog6.webp'
import BlogCard from '../components/BlogCard'

const page = () => {
    const blogs = [
        {
            id: 1,
            image: blog_pic_1,
            title: 'Design Tips for Maximizing Your Square Footage',
            description: 'Dive into our guide on making the most of compact living spaces, with tips on clever storage solutions, multi-functional furniture, and space-saving design hacks.',
            date: 'April 15, 2025',
            link: '/blogs/blogdetail'
        },
        {
            id: 2,
            image: blog_pic_2,
            title: 'Building a Greener Future, One Project at a Time',
            description: 'Join us as we delve into the world of sustainable design practices, from eco-friendly materials to energy-efficient technologies, and discover how you can make a positive impact on the environment through your design choices.',
            date: 'January 10, 2025',
            link: '/blogs/blogdetail'
        },
        {
            id: 3,
            image: blog_pic_3,
            title: '10 Timeless Interior Design Trends to Elevate Your Space',
            description: 'Uncover the timeless design trends that will stand the test of time and bring elegance and sophistication to your interiors.',
            date: 'December 28, 2024',
            link: '/blogs/blogdetail'
        },
        {
            id: 4,
            image: blog_pic_4,
            title: 'The Future of Architecture: Trends Shaping the Built Environment',
            description: 'Explore the latest trends and innovations shaping the future of architecture, from sustainable design practices to cutting-edge technologies.',
            date: 'August 12, 2024',
            link: '/blogs/blogdetail'
        },
        {
            id: 5,
            image: blog_pic_5,
            title: 'Creating Functional Workspaces: Tips for Designing Productive Office Environments',
            description: 'Discover practical tips and strategies for designing functional and inspiring workspaces that enhance productivity and well-being.',
            date: 'March 09, 2023',
            link: '/blogs/blogdetail'
        },
        {
            id: 6,
            image: blog_pic_6,
            title: 'Designing for Wellness: Integrating Biophilic Elements into Your Home',
            description: 'Learn how to incorporate biophilic design principles into your home to promote health, well-being, and connection with nature.',
            date: 'November 24, 2022',
            link: '/blogs/blogdetail'
        }
    ];

  return (
    <>
        <div className='px-4 sm:px-6 md:px-8 py-24 inline-flex flex-col justify-start items-start gap-7 xl:gap-11'>
            <div className='flex flex-col justify-start items-start gap-4 sm:gap-6 md:gap-7 xl:gap-10'>
                <h1 className="uppercase text-black text-5xl sm:text-5xl md:text-[4rem] lg:text-[5.5rem] xl:text-9xl font-bold font-['Satoshi'] leading-12 md:leading-14 lg:leading-24 xl:leading-28">
                    Explore <span className='text-carot'> Our Blog</span>
                </h1>
                <p className="text-black font-normal text-base md:text-lg lg:text-xl font-['Satoshi'] md:w-[90%] lg:w-1/2">
                    Welcome to the Hage Blog, your ultimate source of inspiration, insights, and expert advice on all things design, architecture, and lifestyle. 
                    Dive into our collection of articles crafted by our team of design enthusiasts and industry experts:
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-11'>
                {blogs.map((blog) => (
                    <BlogCard 
                        key={blog.id}
                        title={blog.title}
                        description={blog.description}
                        image={blog.image.src}
                        date={blog.date}
                        link={blog.link}
                        textWhite={false}
                    />
                ))}
            </div>
        </div>
    </>
  )
}

export default page