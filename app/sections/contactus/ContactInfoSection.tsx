import React from 'react'
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactInfoSection = () => {
  return (
    <div className='bg-black'>
        <div className='px-4 sm:px-6 md:px-8 py-24 flex flex-col items-center'>
            <div className='flex flex-col gap-6 items-center justify-center text-center w-full md:w-[70%]'>
                <div className='flex flex-col gap-3 items-center justify-center text-center'>
                    <h6 className="text-carot text-base font-medium font-['Satoshi']">Contact us</h6>
                    <h3 className="text-white text-3xl lg:text-4xl xl:text-5xl font-bold font-['Satoshi'] uppercase">
                        Alternatively, you can <span className="text-carot">reach us directly</span>
                    </h3>
                </div>
                <p className="text-white text-base md:text-lg lg:text-xl font-normal font-['Satoshi']">Our friendly team is always here to chat.</p>
            </div>
        </div>
        <div className='px-4 sm:px-6 md:px-8 pb-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='flex flex-col gap-5 items-center text-center'>
                    <div className='p-3 bg-purple-100 rounded-full'>
                        <Mail className='text-carot size-6' />
                    </div>
                    <div>
                        <h6 className="text-white text-xl font-medium font-['Inter'] leading-loose">Email</h6>
                        <p className="text-white text-base font-normal font-['Inter'] leading-normal">
                            Our friendly team is here to help.
                        </p>
                    </div>
                    <div>
                        <p className="text-carot text-base font-medium font-['Inter'] leading-normal">info@hagedesign.com</p>
                    </div>
                </div>
                <div className='flex flex-col gap-5 items-center text-center'>
                    <div className='p-3 bg-purple-100 rounded-full'>
                        <MapPin className='text-carot size-6' />
                    </div>
                    <div>
                        <h6 className="text-white text-xl font-medium font-['Inter'] leading-loose">Office</h6>
                        <p className="text-white text-base font-normal font-['Inter'] leading-normal">
                            Come say hello at our office HQ.
                        </p>
                    </div>
                    <div>
                        <p className="text-carot text-base font-medium font-['Inter'] leading-normal">DHA Phase 1, Karachi, Pakistan.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-5 items-center text-center'>
                    <div className='p-3 bg-purple-100 rounded-full'>
                        <Phone className='text-carot size-6' />
                    </div>
                    <div>
                        <h6 className="text-white text-xl font-medium font-['Inter'] leading-loose">Phone</h6>
                        <p className="text-white text-base font-normal font-['Inter'] leading-normal">
                            Mon-Fri from 8am to 5pm.
                        </p>
                    </div>
                    <div>
                        <p className="text-carot text-base font-medium font-['Inter'] leading-normal">+92 (123) 4567890</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactInfoSection