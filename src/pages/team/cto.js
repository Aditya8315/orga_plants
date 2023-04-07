import React from 'react'
import CTO from '../../CTO.png'
import Insta from '../../insta.png'
import Facebook from '../../facebook.png'
import Twitter from '../../twitter.png'
import Linkedin from '../../linkedin.png'
const cto = () => {
  return (
    <div class="relative  flex items-center justify-center h-screen">
    <div class="w-[1100px] h-[800px] mx-auto flex items-center justify-center">
      <div class="w-full
       h-3/5 flex flex-col lg:flex-row items-center border border-black  justify-center  rounded-lg overflow-hidden shadow-lg">
        <section class="w-1/2 items-center justify-center">
          <img class="m-auto w-[100px] h-[100px] rounded-full border border-black" src={CTO} alt="Employee"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl "></div>
            <p  class="text-gray-700 font-bold text-center">Chandan Shashank</p>
            <p class="text-gray-700 text-base text-center">CTO Planning</p>
          </div>
          <div class="items-center flex justify-evenly">
          <img src={Facebook} alt=""/>
            <img src={Insta} alt=""/>
            <img src={Twitter} alt=""/>
            <img src={Linkedin} alt=""/>
          </div>
        </section>
        <aside class="w-1/2 rounded-lg overflow-hidden px-6 py-4 items-center justify-center">
          <p class="text-gray-700 text-base">Chandan Shashank leads our team with his plannings ensures user happiness, with professional service approach. 

He's aligned with the company’s visions which believes in building a sustainable & profitable business and has done bachelor's degree from ACEIT.

An Engineering Specialist with a demonstrated history of working in the sales industry, helps in team motivation, assures time and team management, and loyal leadership has strong foundation in strategy.
</p>
        </aside>
      </div>
    </div>
  </div>
  )
}

export default cto