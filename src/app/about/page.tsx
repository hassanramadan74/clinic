import Hero from '@/Components/Hero'
import SideSlider from '@/Components/SideSlider'
import Counter from '@/Components/Counter'
import React from 'react'
import ImageSlider from '@/Components/ImageSlider'
import Certificates from '@/Components/certificates'

function About() {
  return (
   <>
   <Hero/>
   <Counter/>
   <Certificates/>
   <ImageSlider/>
   <SideSlider/>
   </>
  )
}

export default About