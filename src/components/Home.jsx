import React from 'react'
import HeroSection from '../pages/Hero'
import About from '../pages/About'
import PropertyList from '../pages/PropertyList'
import ServicePage from '../pages/ServicePage'
import ContactPage from '../pages/ContactPage'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <About />
        <PropertyList />
        <ServicePage />
        <ContactPage />
    </div>
  )
}

export default Home