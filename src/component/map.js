import React from 'react'
import Map from "../Vector.png";
const map = () => {
  return (
    <section class="w-full h-auto items-center px-4 py-8 sm:py-12 md:py-16 lg:py-20">
    <h1 class="text-center text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">Orga Plants- A platform for local sellers </h1>
    <h4 class="text-center text-base sm:text-lg lg:text-xl mb-6 sm:mb-8">We at Orgaplants are buildings an eco-system in which our stakeholders get a transparent share for their work.</h4>
    <img src={Map} alt="" class="w-full h-auto sm:w-2/3 lg:w-1/2 mx-auto mt-8 sm:mt-10 lg:mt-12" />
  </section>
  
  )
}

export default map