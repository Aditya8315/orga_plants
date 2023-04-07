import React from 'react'
import Design from '../../Design.png';
import Insta from '../../insta.png'
import Facebook from '../../facebook.png'
import Twitter from '../../twitter.png'
import Linkedin from '../../linkedin.png'
const designer = () => {
  return (
    <div class="relative  flex items-center justify-center h-screen">
    <div class="w-[1100px] h-[800px] mx-auto flex items-center justify-center">
      <div class="w-full
       h-3/5 flex flex-col lg:flex-row items-center border border-black  justify-center  rounded-lg overflow-hidden shadow-lg">
        <section class="w-1/2 items-center justify-center">
          <img class="m-auto w-[100px] h-[100px] rounded-full border border-black" src={Design} alt="Employee"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl "></div>
            <p  class="text-gray-700 font-bold text-center">Snidgha PV 
</p>
            <p class="text-gray-700 text-base text-center">UI/UX Designer</p>
          </div>
          <div class="items-center flex justify-evenly">
          <img src={Facebook} alt=""/>
            <img src={Insta} alt=""/>
            <img src={Twitter} alt=""/>
            <img src={Linkedin} alt=""/>
          </div>
        </section>
        <aside class="w-1/2 rounded-lg overflow-hidden px-6 py-4 items-center justify-center">
          <p class="text-gray-700 text-base">Self made consistent team player who works tirelessly to make wonders happen, switching career to Design and to mention a innovative UI/UX designer.

From the day she joined us served as trustable and committed team member, where she focuses on design and product innovation, has pursed her Bachelors  of Science.
</p>
        </aside>
      </div>
    </div>
  </div>
  )
}

export default designer