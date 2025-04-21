import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import contactimage from "@/public/images/contact_image.webp"

const FormSection = () => {
  return (
    <div className='px-8 py-24 flex flex-col gap-11'>
      <div className='flex flex-col gap-10'>
        <h1 className="text-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-['Satoshi'] uppercase">
          DROP US A LINE - WE&apos;LL GET <span className="text-carot">BACK TO YOU.</span>
        </h1>
        <p className="text-black text-base sm:text-lg lg:text-xl font-normal font-['Satoshi'] w-full lg:w-[60%] xl:w-1/2">
          Have questions, comments, or ready to start your project? Get in touch with us today. 
          Fill out the form below, and our team will reach out to you as soon as possible.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-11'>
        <div className='flex flex-col gap-y-6'>
          
          <div className='flex flex-col lg:flex-row gap-8'>
            <div className='flex flex-col w-full gap-2'>
              <Label htmlFor='firstname' className='text-slate-700 text-sm font-medium font-["Inter"] leading-tight'>First Name</Label>
              <Input type='text' id="firstname" name="firstname" placeholder="First Name" className='rounded-none h-auto bg-white py-3 px-3.5 focus-visible:ring-0 placeholder:text-[#717171]' />
            </div>
            <div className='flex flex-col w-full gap-2'>
              <Label htmlFor='lastname' className='text-slate-700 text-sm font-medium font-["Inter"] leading-tight'>Last Name</Label>
              <Input type='text' id="lastname" name="lastname" placeholder="Last Name" className='rounded-none h-auto bg-white py-3 px-3.5 focus-visible:ring-0 placeholder:text-[#717171]'  />            
            </div>
          </div>

          <div className='flex flex-col w-full gap-2'>
            <Label htmlFor='email' className='text-slate-700 text-sm font-medium font-["Inter"] leading-tight'>Email</Label>
            <Input type='email' id="email" name="email" placeholder="abc@gmail.com" className='rounded-none h-auto bg-white py-3 px-3.5 focus-visible:ring-0 placeholder:text-[#717171]'  />            
          </div>

          <div className='flex flex-col w-full gap-2'>
            <Label htmlFor='mobile' className='text-slate-700 text-sm font-medium font-["Inter"] leading-tight'>Phone Number</Label>
            <Input type='tel' id="mobile" name="mobile" placeholder="" className='rounded-none h-auto bg-white py-3 px-3.5 focus-visible:ring-0 placeholder:text-[#717171]'  />           
          </div>

          <div className='flex flex-col w-full h-full gap-2'>
            <Label htmlFor='message' className='text-slate-700 text-sm font-medium font-["Inter"] leading-tight'>Message</Label>
            <Textarea id="message" name="message" placeholder="Leave us a message..." className='rounded-none bg-white py-3 px-3.5 focus-visible:ring-0 placeholder:text-[#717171] min-h-28 h-full'  />            
          </div>

          <div className='flex flex-row items-center gap-2'>
            <Checkbox id='privacypolicy' className="bg-white size-5 text-carot" />
            <Label htmlFor='privacypolicy' className='text-black text-base font-normal font-["Inter"] leading-normal'>You agree to our friendly privacy policy.</Label>    
          </div>

          <Button className='w-full sm:w-auto bg-carot text-white text-base font-medium font-["Satoshi"] uppercase cursor-pointer py-3 px-[18px] rounded-none h-auto'>Send Message</Button>
        </div>

        <div>
          <Image src={contactimage} alt="Contact Us" className='object-cover aspect-square' />
        </div>
      </div>
    </div>
  )
}

export default FormSection