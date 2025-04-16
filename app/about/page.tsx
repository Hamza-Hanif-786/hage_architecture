import React from 'react'
import HeroSection from '../sections/about/HeroSection'
import AboutSection from '../sections/about/AboutSection'
import JoinConversationSection from '../sections/JoinConversationSection'
import TeamSection from '../sections/about/TeamSection'

const page = () => {
  return (
    <>
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <JoinConversationSection />
    </>
  )
}

export default page