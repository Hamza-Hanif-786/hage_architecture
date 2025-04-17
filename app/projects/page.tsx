import React from 'react'
import Image from 'next/image'
import projectheroimage from '@/public/images/projects_hero_pic.webp'
import project1pic from '@/public/images/project1.webp'
import project2pic from '@/public/images/project2.webp'
import project3pic from '@/public/images/project3.webp'
import project4pic from '@/public/images/project4.webp'
import ProjectCard from '@/app/components/ProjectCard'


const page = () => {
    const projects = [
        {
            title: "Urban Oasis",
            description: "A modern apartment designed for urban living, featuring sleek aesthetics and smart",
            imageUrl: project1pic.src,
            city: "Jakarta",
            year: "2023",
            type: "Residential",
        },
        {
            title: "Coastal Retreat",
            description: "A beachfront villa that seamlessly blends indoor and outdoor living, capturing the essence of coastal luxury.",
            imageUrl: project2pic.src,
            city: "Bali",
            year: "2022",
            type: "Residential",
            direction: "rtl"
        },
        {
            title: "Corporate Hub",
            description: "A contemporary office space designed to foster collaboration and productivity among employees, with an emphasis on modern amenities and flexible workspaces.",
            imageUrl: project3pic.src,
            city: "Surabaya",
            year: "2021",
            type: "Commercial",
        },
        {
            title: "Boutique Bistro",
            description: "An intimate restaurant nestled in a historic district, exuding charm and sophistication while offering a memorable dining experience.",
            imageUrl: project4pic.src,
            city: "Yogyakarta",
            year: "2020",
            type: "Commercial",
            direction: "rtl"
        }
    ];

  return (
    <div>
        <div className='px-8 py-24 inline-flex flex-col justify-start items-start gap-7 xl:gap-11'>
            <div className='flex flex-col justify-start items-start gap-4 sm:gap-6 md:gap-7 xl:gap-10'>
                <h1 className="uppercase text-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-['Satoshi']">
                    Latest <span className='text-carot'> Project</span>
                </h1>
                <p className="text-black font-normal text-base md:text-lg lg:text-xl font-['Satoshi'] md:w-[90%] lg:w-[60%] xl:w-1/2">
                    Explore the breadth and depth of our design expertise through a curated selection of our standout projects. 
                    From residential havens to commercial landmarks, each project showcases our commitment to excellence, innovation, and client satisfaction.
                </p>
            </div>
            <div>
                <Image alt='Hero Image' src={projectheroimage} className='aspect-video' />
            </div>
        </div>
        <div className='px-8 py-24'>
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    city={project.city}
                    year={project.year}
                    type={project.type}
                    direction={project.direction as 'ltr' | 'rtl' | undefined} 
                />
            ))}
        </div>
    </div>
  )
}

export default page