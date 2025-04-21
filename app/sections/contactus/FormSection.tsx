import React from 'react'

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
    </div>
  )
}

export default FormSection