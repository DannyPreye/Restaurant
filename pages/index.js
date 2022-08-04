import React from 'react'
import Booking from '../components/Booking'
import { ok } from '../public/Pics'
import HomeHero from "../components/HomeHero"
import CardSection from "../components/CardSection"
import Footer from '../components/Footer'

const index = () => {
  return (
    <div className='w-screen '>
      <HomeHero />
      <CardSection />
      <Booking img={ok} />
    </div>
  )
}

export default index