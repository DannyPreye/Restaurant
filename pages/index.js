import React from 'react'
import Booking from './components/Booking'
import { ok } from '../public/Pics'
import { HomeHero, CardSection } from "./components/Index"
import Footer from './components/Footer'

const index = () => {
  return (
    <div className='w-screen '>
      <HomeHero />
      <CardSection />
      <Booking img={ok} />
      <Footer />
    </div>
  )
}

export default index