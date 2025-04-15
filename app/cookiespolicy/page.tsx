import React from 'react'

const page = () => {
  return (
    <div>
        <div className='px-8 py-24 flex flex-col gap-5 md:gap-7 lg:gap-10'>
            <h1 className="text-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-['Satoshi'] uppercase">
                Cookies <span className="text-carot">POLICY</span>
            </h1>
            <p className='w-full md:w-1/2 text-black text-lg xl:text-xl font-normal font-["Satoshi"]'>
                At Hage, we use cookies to enhance your browsing experience and provide personalized content and advertisements. 
                This Cookies Policy explains what cookies are, how we use them, and your options regarding their use.
            </p>
        </div>
        <div className='px-8 pb-24 flex flex-col gap-12 items-center'>
            <div className='gap-12 w-full md:w-[80%] lg:w-[70%] xl:w-1/2 flex flex-col items-center'>
                <div className='space-y-5'>
                    <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">What are Cookies?</h3>
                    <ul className="list-disc space-y-3 pl-6">
                        <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                            Cookies are small text files that are stored on your device when you visit a website. 
                            They contain information about your browsing activity and preferences, which helps us improve your user experience and tailor our services to your needs.
                        </li>
                    </ul>
                </div>

                <div className='space-y-5'>
                    <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">How We Use Cookies</h3>
                    <ul className="list-disc space-y-3 pl-6">
                        <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                            <span className='font-bold'>Essential Cookies:</span> These cookies are necessary for the functioning of our website and cannot be disabled. 
                            They enable core functionality such as page navigation and access to secure areas of the website.
                        </li>
                        <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                            <span className='font-bold'>Analytics Cookies:</span>  We use analytics cookies to collect information about how you interact with our website, such as which pages you visit and how long you spend on each page. 
                            This data helps us analyze website traffic and improve our website&apos;s performance.
                        </li>
                        <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                            <span className='font-bold'>Advertising Cookies:</span> We may use advertising cookies to deliver personalized advertisements based on your interests and browsing behavior. 
                            These cookies may track your browsing activity across different websites.
                        </li>
                    </ul>
                </div>

                <div className='space-y-5'>
                    <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">Your Cookie Choices</h3>
                    <ul className="list-disc space-y-3 pl-6">
                        <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                            You have the option to accept or decline cookies when you visit our website. 
                            Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. 
                            However, please note that blocking cookies may impact your user experience and prevent certain features of the website from functioning properly.
                        </li>
                    </ul>
                </div>

                <div className='space-y-5'>
                    <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">Third-Party Cookies</h3>
                    <ul className="list-disc space-y-3 pl-6">
                        <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                            We may also use third-party cookies provided by trusted partners to track and analyze user behavior, deliver targeted advertisements, and provide social media features. 
                            These cookies are subject to the privacy policies of the third-party providers.
                        </li>
                    </ul>
                </div>

                <div className='space-y-5'>
                    <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Satoshi']">Changes to This Policy</h3>
                    <ul className="list-disc space-y-3 pl-6">
                        <li className="text-black text-lg sm:text-xl md:text-2xl font-normal font-['Satoshi']">
                            We may update this Cookies Policy from time to time to reflect changes in our practices or legal requirements. 
                            Any changes will be posted on this page, and your continued use of our website after the changes are posted will constitute your acceptance of the new policy.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page