import React from 'react'
import CDO from '../../CDO.png'
import Insta from '../../insta.png'
import Facebook from '../../facebook.png'
import Twitter from '../../twitter.png'
import Linkedin from '../../linkedin.png'
const cdo = () => {
  return (
    <>
    <div class="relative flex items-center justify-center h-screen">
    <div class="w-[1100px] h-[800px] mx-auto flex items-center justify-center">
      <div class="w-full
       h-3/5 flex flex-col lg:flex-row items-center border border-black  justify-center  rounded-lg overflow-hidden shadow-lg">
        <section class="w-1/2 items-center justify-center">
          <img class="m-auto w-[100px] h-[100px] rounded-full border border-black" src={CDO} alt="Employee"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl "></div>
            <p  class="text-gray-700 font-bold text-center">Manish Thilagar</p>
            <p class="text-gray-700 text-base text-center">CDO, Finance</p>
          </div>
          <div class="items-center flex justify-evenly">
            <img src={Facebook} alt=""/>
            <img src={Insta} alt=""/>
            <img src={Twitter} alt=""/>
            <img src={Linkedin} alt=""/>
          </div>
        </section>
        <aside class="w-1/2 rounded-lg overflow-hidden px-6 py-4 items-center justify-center">
          <p class="text-gray-700 text-base">MANISH THILAGAR is a tech. enthusiast guy who loves to explore data to get meaningful insights to solve customers challenges surrounding fair pay by making use of his skills through continues exploration. 

Manish is responsible for the Data handling roadmap of the company. He is currently a Data analysit at Evolution Excecutive Search, he completed his BE from KIOT, salem.

</p>
        </aside>
      </div>
      
    </div>
  </div>
  </>
  )
}

export default cdo