import React from 'react'
import CEO from '../../CEO.png'
import Insta from '../../insta.png'
import Facebook from '../../facebook.png'
import Twitter from '../../twitter.png'
import Linkedin from '../../linkedin.png'
const ceo = () => {
  return (
    <div class="relative flex items-center justify-center h-screen">
    <div class="w-[1100px] h-[800px] mx-auto flex items-center justify-center">
      <div class="w-full
       h-3/5 flex flex-col lg:flex-row items-center border border-black  justify-center  rounded-lg overflow-hidden shadow-lg">
        <section class="w-1/2 items-center justify-center">
          <img class="m-auto w-[100px] h-[100px] rounded-full border border-black" src={CEO} alt="Employee"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl "></div>
            <p  class="text-gray-700 font-bold text-center"> V S Thejas Adithiya</p>
            <p class="text-gray-700 text-base text-center">CEO, Operations</p>
          </div>
          <div class="items-center flex justify-evenly">
          <img src={Facebook} alt=""/>
            <img src={Insta} alt=""/>
            <img src={Twitter} alt=""/>
            <img src={Linkedin} alt=""/>
          </div>
        </section>
        <aside class="w-1/2 rounded-lg overflow-hidden px-6 py-4 items-center justify-center">
          <p class="text-gray-700 text-base">Initially faced many failures in a row but a day came to build my dream, so left my past completely, with the backing of our mentor Balasubramanian sir, started Orga Plants from an initial idea till the execution here, the root cause is to build an ecosystem in which agriculture is a profitable career for the youth and not a gamble game anymore.

First built a trustable team who are ready to tackle unconventional challenges to build a sustainable profitable business which ensures value creation throughout the agricultural supply chain which is our tagline.


</p>
        </aside>
      </div>
    </div>
  </div>
  )
}

export default ceo