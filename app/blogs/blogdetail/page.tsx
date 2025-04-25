import React from 'react'
import service2 from "@/public/images/services/architectural_design.webp"
import Image from 'next/image'
import blog_pic_1 from '@/public/images/blog1.webp'
import blog_pic_2 from '@/public/images/blog2.webp'
import BlogCard from '@/app/components/BlogCard'

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
  ]

  return (
    <div>
      <div className='px-4 sm:px-6 md:px-8 py-24 inline-flex flex-col justify-start items-start gap-7 xl:gap-11'>
        <div className='flex flex-col justify-start items-start gap-4 sm:gap-6 md:gap-7 xl:gap-10'>
          <h1 className="text-black text-7xl font-bold font-['Satoshi']">
            The Future of Architecture: Trends Shaping the Built Environment
          </h1>
          <p className="text-black font-normal text-base md:text-lg lg:text-xl font-['Satoshi']">
            17 Jan 2022
          </p>
        </div>
        <div>
          <Image alt='Hero Image' src={service2} className='aspect-video' />
        </div>
      </div>
      <div className='px-4 sm:px-6 md:px-8 pb-24 flex flex-col gap-12 items-center'>
        <div className='gap-12 w-full md:w-[90%] flex flex-col text-left'>

          <p className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. 
            In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
            Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. 
            Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. 
            Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. 
            Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
            Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. 
            Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. 
            Sed vel, congue felis elit erat nam nibh orci.
          </p>

          <div className='space-y-4'>
            <h3 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">
              Software and tools
            </h3>
            <p className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
              Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. 
              Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
            </p>
          </div>

          <div className='space-y-5'>
            <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">
              Why Choose Hage for Your Architectural Design Needs?
            </h3>
            <ul className="list-disc space-y-3 pl-7">
              <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                Experience: Our team brings years of experience and a diverse portfolio of projects across various industries.
              </li>
              <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                Innovation: We&apos;re committed to pushing the boundaries of design and exploring innovative solutions that enhance the built environment.
              </li>
              <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                Collaboration: We believe in the power of collaboration and work closely with clients, consultants, and stakeholders to achieve shared goals.
              </li>
              <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                Quality: We&apos;re dedicated to delivering high-quality designs that meet the needs of our clients and stand the test of time.
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className='px-4 sm:px-6 md:px-8 pb-24 inline-flex flex-col justify-start items-start gap-7 xl:gap-11'>
        <div className='flex flex-col justify-start items-start gap-4 sm:gap-6 md:gap-7 xl:gap-10'>
          <h4 className="text-black text-3xl sm:text-4xl font-medium font-['Satoshi'] uppercase">New Latest Article</h4>
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
    </div>
  )
}

export default page