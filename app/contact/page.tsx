import React from 'react'
import JoinConversationSection from '../sections/JoinConversationSection'
import FormSection from '../sections/contactus/FormSection'
import ContactInfoSection from '../sections/contactus/ContactInfoSection'


const page = () => {
  return (
    <>
      <FormSection />
      <ContactInfoSection />
      <JoinConversationSection />
    </>
  )
}

export default page