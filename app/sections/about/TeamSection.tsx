import React from 'react'
import Image from 'next/image'
import team_pic_1 from "@/public/images/team_pic_1.webp"
import team_pic_2 from "@/public/images/team_pic_2.webp"
import team_pic_3 from "@/public/images/team_pic_3.webp"
import team_pic_4 from "@/public/images/team_pic_4.webp"
import team_pic_5 from "@/public/images/team_pic_5.webp"
import team_pic_6 from "@/public/images/team_pic_6.webp"

const TeamSection = () => {
    const teams = [
        {
            name: "Szabó Jakab",
            role: "President",
            image: team_pic_1
        },
        {
            name: "Kovács Lajos",
            role: "Senior Software Engineer",
            image: team_pic_2
        },
        {
            name: "Fekete Csanád",
            role: "UI designer",
            image: team_pic_3
        },
        {
            name: "Kende Attila",
            role: "Process Manager",
            image: team_pic_4
        },
        {
            name: "Király Vince",
            role: "Trainee Engineer",
            image: team_pic_5
        },
        {
            name: "Hajdú Szilveszter",
            role: "Architect",
            image: team_pic_6
        },
    ]

  return (
    <div className='px-8 py-24'>
        <div className='flex flex-col gap-11'>
            <div className='flex flex-col gap-7 sm:gap-9 md:gap-11'>
                <h4 className="uppercase text-lg md:text-xl lg:text-2xl font-normal font-['Satoshi'] text-carot">MEET OUR TEAM</h4>
                <p className="text-black text-lg sm:text-xl font-normal font-['Satoshi'] w-full lg:w-1/2">
                    At Hage, our team is the heart and soul of everything we do. 
                    We&apos;re a diverse group of passionate individuals united by our love for design and commitment to excellence. 
                    Get to know the faces behind our projects:
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-11'>
                {teams.map((team, index) => (
                    <div key={index} className='flex flex-col gap-9'>
                        <Image src={team.image} alt={team.name} className='aspect-square' />
                        <div className='flex flex-col gap-3 sm:gap-5'>
                            <h5 className='text-black text-2xl sm:text-3xl xl:text-4xl font-medium font-["Satoshi"] uppercase'>{team.name}</h5>
                            <p className='text-black text-base sm:text-lg xl:text-xl font-normal font-["Satoshi"]'>{team.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TeamSection