import React from 'react'
import Mentor from '../../Mentor.png'
import Insta from '../../insta.png'
import Facebook from '../../facebook.png'
import Twitter from '../../twitter.png'
import Linkedin from '../../linkedin.png'
const mentor = () => {
  return (
    <div class="relative  flex items-center justify-center h-screen">
    <div class="w-[1100px] h-[800px] mx-auto flex items-center justify-center">
      <div class="w-full
       h-3/5 flex flex-col lg:flex-row items-center border border-black  justify-center  rounded-lg overflow-hidden shadow-lg">
        <section class="w-1/2 items-center justify-center">
          <img class="m-auto w-[100px] h-[100px] rounded-full border border-black" src={Mentor} alt="Employee"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl "></div>
            <p  class="text-gray-700 font-bold text-center">Balasubramanyam K S</p>
            <p class="text-gray-700 text-base text-center">Our Mentor</p>
          </div>
          <div class="items-center flex justify-evenly">
          <img src={Facebook} alt=""/>
            <img src={Insta} alt=""/>
            <img src={Twitter} alt=""/>
            <img src={Linkedin} alt=""/>
          </div>
        </section>
        <aside class="w-1/2 rounded-lg overflow-hidden px-6 py-4 items-center justify-center">
          <p class="text-gray-700 text-base">The person behind building this dream is him, from day 1 when I met him he guided us further and gave his valuable time and moral support and he suggested his open opinion by his vast amount of experience.

He's the Founder & CEO of ProDelta Technologies and Managing Partner at Indo Pacific Impex LLP and has a profound experience of 21 years in software services industry over a period of time Prodelta has built expertise in different technologies in Web, Mobile, Internet of things (IOT), Artificial intelligence.

</p>
        </aside>
      </div>
    </div>
  </div>
  )
}

export default mentor