import React from 'react';
import HeroSection from './sections/homepage/HeroSection';
import AboutSection from './sections/homepage/AboutSection';
import ServiceSection from './sections/homepage/ServiceSection';
import ProjectSection from './sections/homepage/ProjectSection';
import TestimonialSection from './sections/homepage/TestimonialSection';
import BlogSection from './sections/homepage/BlogSection';


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <TestimonialSection />
      <BlogSection />
    </>
  );
}
