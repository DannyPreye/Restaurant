import React from 'react'
import Booking from '../components/Booking'
import { ok } from '../public/Pics'
import HomeHero from "../components/HomeHero"
import CardSection from "../components/CardSection"
import Footer from '../components/Footer'

import { motion } from "framer-motion"
const index = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }} className='w-screen'>
      <HomeHero />
      <CardSection />
      <Booking img={ok} />
    </motion.div>
  )
}

export default index