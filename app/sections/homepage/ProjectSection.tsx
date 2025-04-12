import ProjectCard from '@/app/components/ProjectCard'
import Link from 'next/link'
import React from 'react'
import project1pic from '@/public/images/project1.webp'
import project2pic from '@/public/images/project2.webp'
import project3pic from '@/public/images/project3.webp'
import project4pic from '@/public/images/project4.webp'

const ProjectSection = () => {
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
    <div className="px-8 py-24">
        <div className='flex flex-col gap-11'>
            <div className='flex flex-col gap-9 sm:gap-11'>
                <div className='flex flex-row items-center justify-between w-full'>
                    <h4 className="uppercase text-lg md:text-xl lg:text-2xl font-normal font-['Satoshi'] text-[#E44F39]">/04 Latest Project</h4>
                    <Link className="uppercase bg-[#E44F39] px-2.5 py-2 md:px-4 md:py-3 text-sm sm:text-base font-medium text-white font-['Inter'] rounded-none hover:bg-black transition-all duration-300 ease-in" href="/project">
                        More Project
                    </Link>
                </div>
                <div className='w-full lg:w-1/2'>
                    <p className="text-black text-lg sm:text-xl font-normal font-['Satoshi']">
                        Explore the breadth and depth of our design expertise through a curated selection of our standout projects. From residential havens to commercial landmarks, each project showcases our commitment to excellence, innovation, and client satisfaction.
                    </p>
                </div>
            </div>

        
            <div>
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
    </div>
  )
}

export default ProjectSection