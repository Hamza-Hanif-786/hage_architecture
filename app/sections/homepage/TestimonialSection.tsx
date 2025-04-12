import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import TestimonialImage from "@/public/images/testimonial-image.webp"
import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from "@/components/ui/avatar"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import avatar1 from "@/public/images/male1.webp"
import avatar2 from "@/public/images/male2.webp"
import avatar3 from "@/public/images/male3.webp"
import avatar4 from "@/public/images/female1.webp"
import avatar5 from "@/public/images/female2.webp"



const TestimonialSection = () => {

    const testimonials = [
        {
            name: "John Doe",
            designation: "Interior Designer",
            avatar: avatar1,
            rating: 5,
            comment: "Their attention to detail and creativity transformed our space into a true masterpiece."
        },
        {
            name: "Jane Smith",
            designation: "Restaurant Owner",
            avatar: avatar2,
            rating: 5,
            comment: "HAGE is a game-changer for design professionals. It streamlines the entire process, from concept to execution, and empowers us to deliver exceptional results every time."
        },
        {
            name: "Sarah Johnson",
            designation: "Architect",
            avatar: avatar4,
            rating: 4,
            comment: "I've been using HAGE for a while now, and I'm blown away by the impact it has had on my design work. The tools are intuitive, the designs are stunning, and the possibilities are endless."
        },
        {
            name: "Bob Williams",
            designation: "Homeowner",
            avatar: avatar3,
            rating: 5,
            comment: "As an interior designer, I'm constantly looking for ways to push boundaries and create unique spaces. HAGE provides the perfect platform for me to do just that. Thank you for the inspiration!"
        },
        {
            name: "Emily Davis",
            designation: "Interior Designer",
            avatar: avatar5,
            rating: 4,
            comment: "HAGE has truly revolutionized my design process. Their innovative tools and resources have elevated my projects to new heights. Highly recommended!"
        }
    ];

  return (
    <div className='px-8 py-24'>
        <div className='flex flex-col gap-11'>
            <div className='flex flex-col gap-8 lg:gap-11 w-full lg:w-1/2'>
                <h4 className="uppercase text-lg md:text-xl lg:text-2xl font-normal font-['Satoshi'] text-[#E44F39]">/05 Testimonials</h4>
                <p className="text-black text-lg md:text-xl font-normal font-['Satoshi']">
                    At Hage, our greatest satisfaction comes from exceeding our client&apos;s expectations. Don&apos;t just take our word for it—discover what our clients have to say about their experience working with us:
                </p>
            </div>
            <div className='container flex flex-col lg:flex-row items-center justify-between gap-16'>
                <Carousel className='w-full lg:w-1/2' opts={{ loop: true}}>
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index}>
                                <div className='flex flex-col gap-10 xl:gap-12'>
                                    <div className='flex items-center gap-1'>
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className='text-[#FEC84B] w-5 h-5 fill-[#FEC84B]' />
                                        ))}
                                    </div>
                                    <p className="text-gray-900 text-xl sm:text-2xl md:text-3xl xl:text-5xl font-medium font-['Satoshi']">
                                        {testimonial.comment}
                                    </p>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='flex items-center gap-4'>
                                            <Avatar className='w-14 h-14'>
                                                <AvatarImage src={testimonial.avatar.src} alt="@avatar" />
                                                <AvatarFallback>
                                                    {testimonial.name.charAt(0).toUpperCase() + testimonial.name.charAt(1).toUpperCase()}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className='flex flex-col gap-1'>
                                                <h5 className="text-gray-900 text-lg sm:text-xl font-bold font-['Satoshi']">
                                                    {testimonial.name}
                                                </h5>
                                                <p className="text-neutral-500 text-lg sm:text-xl font-normal font-['Satoshi']">
                                                    {testimonial.designation}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className='flex items-center justify-end w-full gap-2 mt-5'>
                        <CarouselPrevious className="text-black bg-white rounded-full p-5 relative inset-0 translate-y-0" />
                        <CarouselNext className="text-black bg-white rounded-full p-5 relative inset-0 translate-y-0" />
                    </div>
                </Carousel>
                <div className='w-full lg:w-1/2 flex items-center justify-center'>
                    <Image src={TestimonialImage} alt="Testimonial" className='aspect-tablet-landscape' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialSection