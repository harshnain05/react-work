import React from 'react'
import { Hero } from '../components/common/Hero'
import CustomSlider from '../components/home/CustomSlider'
import CardsThree from '../components/common/CardsThree'
import Footer from '../components/common/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <CustomSlider />
      <CardsThree />
      <Footer/>
    </div>
  )
}

export default Home