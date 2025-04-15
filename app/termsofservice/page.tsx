import React from 'react'

const page = () => {
  return (
    <div>
        <div className='px-8 py-24 flex flex-col gap-5 md:gap-7 lg:gap-10'>
            <h1 className="text-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-['Satoshi'] uppercase">
                Terms of <span className="text-carot">Service</span>
            </h1>
            <p className='w-full md:w-1/2 text-black text-lg xl:text-xl font-normal font-["Satoshi"]'>
                Welcome to Hage! These Terms of Service govern your use of our website and services. 
                By accessing or using our website, you agree to be bound by these terms. 
                Please read them carefully.
            </p>
        </div>
        <div className='px-8 pb-24 flex flex-col gap-12 items-center'>
            <div className='gap-12 w-full md:w-[80%] lg:w-[70%] xl:w-1/2 flex flex-col items-center'>
                <div className='space-y-5'>
                    <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">Use of Website</h3>
                    <ul className="list-disc space-y-3 pl-6">
                        <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                            You may use our website for lawful purposes and in accordance with these Terms of Service. 
                            You agree not to use our website in any way that violates any applicable laws or regulations.
                        </li>
                    </ul>
                </div>

                <div className='space-y-5'>
                    <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">Intellectual Property</h3>
                    <ul className="list-disc space-y-3 pl-6">
                        <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                            All content on our website, including text, graphics, logos, images, and software, is the property of Hage and is protected by copyright and other intellectual property laws. 
                            You may not use, reproduce, or distribute any content from our website without our prior written consent.
                        </li>
                    </ul>
                </div>

                <div className='space-y-5'>
                    <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">User Contributions</h3>
                    <ul className="list-disc space-y-3 pl-6">
                        <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                            You may have the opportunity to contribute content to our website, such as comments or reviews. 
                            By submitting content, you grant us the right to use, reproduce, and distribute your content as we see fit.
                        </li>
                    </ul>
                </div>

                <div className='space-y-5'>
                    <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">Limitation of Liability</h3>
                    <ul className="list-disc space-y-3 pl-6">
                        <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                            We make no representations or warranties about the accuracy, reliability, or completeness of the information on our website. 
                            We are not liable for any damages or losses arising out of your use of our website.
                        </li>
                    </ul>
                </div>

                <div className='space-y-5'>
                    <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">Indemnification</h3>
                    <ul className="list-disc space-y-3 pl-6">
                        <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                            You agree to indemnify and hold harmless Hage and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, or expenses arising out of your use of our website or violation of these Terms of Service.
                        </li>
                    </ul>
                </div>

                <div className='space-y-5'>
                    <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">Governing Law</h3>
                    <ul className="list-disc space-y-3 pl-6">
                        <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                            These Terms of Service are governed by the laws of [Jurisdiction], without regard to its conflict of law provisions.
                        </li>
                    </ul>
                </div>

                <div className='space-y-5'>
                    <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">Changes to Terms</h3>
                    <ul className="list-disc space-y-3 pl-6">
                        <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                            We may update these Terms of Service from time to time. Any changes will be posted on this page, and your continued use of our website after the changes are posted will constitute your acceptance of the new terms.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page