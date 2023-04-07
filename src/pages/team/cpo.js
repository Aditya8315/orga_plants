import React from 'react'
import CPO from '../../CPO.png'
import Insta from '../../insta.png'
import Facebook from '../../facebook.png'
import Twitter from '../../twitter.png'
import Linkedin from '../../linkedin.png'
const cpo = () => {
  return (
    <div class="relative flex items-center justify-center h-screen">
    <div class="w-[1100px] h-[800px] mx-auto flex items-center justify-center">
      <div class="w-full
       h-3/5 flex flex-col lg:flex-row items-center border border-black  justify-center  rounded-lg overflow-hidden shadow-lg">
        <section class="w-1/2 items-center justify-center">
          <img class="m-auto w-[100px] h-[100px] rounded-full border border-black" src={CPO} alt="Employee"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl "></div>
            <p  class="text-gray-700 font-bold text-center">SabarishKumar T</p>
            <p class="text-gray-700 text-base text-center">CPO, Development</p>
          </div>
          <div class="items-center flex justify-evenly">
          <img src={Facebook} alt=""/>
            <img src={Insta} alt=""/>
            <img src={Twitter} alt=""/>
            <img src={Linkedin} alt=""/>
          </div>
        </section>
        <aside class="w-1/2 rounded-lg overflow-hidden px-6 py-4 items-center justify-center">
          <p class="text-gray-700 text-base">Sabarish is self motivated & self built person who has previously founded Matgtech Pythonanywhere, an Edtech startup which primarily focuses on learning communityfor creators, where he oversaw product development, product management and strategy.

From the day he joined us he has served as trustable and committed team member, where he focuses on software optimisation, he's pursuing his Bachelors from the College of karpagam collage of engineering.

</p>
        </aside>
      </div>
    </div>
  </div>
  )
}

export default cpo