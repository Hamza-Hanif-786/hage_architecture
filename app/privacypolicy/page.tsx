import React from 'react'

const page = () => {
  return (
    <div>
        <div className='px-8 py-24 flex flex-col gap-5 md:gap-7 lg:gap-10'>
            <h1 className="text-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-['Satoshi'] uppercase">
                PRIVACY <span className="text-carot">POLICY</span>
            </h1>
            <p className='w-full md:w-1/2 text-black text-lg xl:text-xl font-normal font-["Satoshi"]'>
                At Hage, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website or use our services.
            </p>
        </div>
        <div className='px-8 pb-24 flex flex-col gap-12 items-center'>
            <div className='gap-12 w-full md:w-[80%] lg:w-[70%] xl:w-1/2 flex flex-col items-center'>
                <div className='space-y-5'>
                    <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">Information We Collect:</h3>
                    <ul className="list-disc space-y-3 pl-6">
                        <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                            <span className='font-bold'>Personal Information:</span> When you contact us or use our services, we may collect personal information such as your name, email address, phone number, and postal address.
                        </li>
                        <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                            <span className='font-bold'>Usage Data:</span> We may collect information about how you interact with our website, including your IP address, browser type, pages visited, and the time and date of your visit.
                        </li>
                    </ul>
                </div>

                <div className='space-y-5'>
                    <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">How We Use Your Information:</h3>
                    <ul className="list-disc space-y-3 pl-6">
                        <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                            <span className='font-bold'>Communication:</span> We may use your contact information to respond to your inquiries, provide information about our services, and communicate with you about your projects.
                        </li>
                        <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                            <span className='font-bold'>Improvement:</span> We may use usage data to analyze trends, improve our website, and enhance the user experience.
                        </li>
                    </ul>
                </div>

                <div className='space-y-5'>
                    <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">Data Security:</h3>
                    <ul className="list-disc space-y-3 pl-6">
                        <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                            We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
                        </li>
                    </ul>
                </div>

                <div className='space-y-5'>
                    <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">Third-Party Links:</h3>
                    <ul className="list-disc space-y-3 pl-6">
                        <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                            Our website may contain links to third-party websites. 
                            We are not responsible for the privacy practices or content of these sites. 
                            We encourage you to review the privacy policies of any third-party sites you visit.
                        </li>
                    </ul>
                </div>

                <div className='space-y-5'>
                    <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">Your Choices:</h3>
                    <ul className="list-disc space-y-3 pl-6">
                        <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                            You have the right to access, update, or delete your personal information. You may also opt-out of receiving communications from us at any time.
                        </li>
                    </ul>
                </div>

                <div className='space-y-5'>
                    <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">Updates to This Policy:</h3>
                    <ul className="list-disc space-y-3 pl-6">
                        <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                            We will notify you of any significant changes by posting the new policy on our website.
                        </li>
                    </ul>
                </div>

                <div className='space-y-5'>
                    <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">Effective Date:</h3>
                    <ul className="list-disc space-y-3 pl-6">
                        <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                            This Privacy Policy is effective as of Maret/20/2024 and applies to all information collected from that date forward.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page