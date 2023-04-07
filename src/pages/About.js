import React from 'react'
import CEO from '../CEO.png'
import CDO from '../CDO.png'
import Design from '../Design.png'
import CPO from '../CPO.png'
import Mentor from '../Mentor.png'
import CTO from '../CTO.png'
import Vision from '../vision.png'
import Mission from '../mission 1.png'
import Goal from '../gaol.png'
const About = () => {
  return (
    <>
      <div class="relative my-5 w-full h-auto  p-10 items-center justify-center">
          <div class="p-10 border-2 rounded-lg border-black">
            <h1 class="text-center text-3xl mb-4">What We Do</h1>
            <p class="text-xl text-center w-[600px] m-auto">We are building a E-commerce platform from the local sellers to make their digital presence and give the superpower of tech. at a very accessible form.</p>

          <div class="min-h-screen flex justify-center">
            <div class="w-2/3 mx-auto">
              <div class="flex flex-row w-full">

                <div class="w-2/5 px-2 py-10">
                  <div class="flex flex-col w-full rounded-lg shadow bg-[#F8EEE3] px-4 py-5 border-4 border-[#313232]">
                    <div class="text-gray-600 mb-2 flex justify-between">
                      <img src={Mission} alt="Mission"/>

                    </div>
                    <div class="text-gray-600">
                      Unite d2d operations with technology to enable growth and transparency.
                    </div>
                  </div>

                </div>

                <div class="w-1/5  flex justify-center">
                  <div class="relative flex h-full w-1 bg-[#313232] items-center justify-center">
                    <div class="absolute flex flex-col justify-center h-20 w-48 rounded-r-full  leading-none text-center z-10 bg-[#313232] font-thin">
                      <div class="text-white">MISSION</div>
                    </div>
                  </div>
                </div>

                <div class="w-2/5 px-2 py-10 ">

                </div>
              </div>
              <div class="flex flex-row w-full">


                <div class="w-2/5 px-2 py-10">

                </div>

                <div class="w-1/5  flex justify-center">
                  <div class="relative flex h-full w-1 bg-[#313232] items-center justify-center">
                    <div class="absolute flex flex-col justify-center h-20 w-48 rounded-l-full  leading-none text-center z-10 bg-[#313232] font-thin" >
                      <div class="text-white">VISION</div>
                    </div>
                  </div>
                </div>

                <div class="w-2/5 px-2 py-10 ">
                  <div class="flex flex-col w-full rounded-lg shadow bg-[#F8EEE3] px-4 py-5 border-4 border-[#313232]">
                    <div class="text-gray-600 mb-2 flex justify-between">
                    <img src={Vision} alt="Mission"/>
                    </div>
                    <div class="text-gray-600">
                      Build an
                      ecosystem that ensures fair, sustainable & proficient growth of all our stake holders.
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-row w-full">


                <div class="w-2/5 px-2 py-10">
                  <div class="flex flex-col w-full rounded-lg shadow bg-[#F8EEE3] px-4 py-5 border-4 border-[#313232]">
                    <div class="text-gray-600 mb-2 flex justify-between">
                    <img src={Goal} alt="Mission"/>
                    </div>
                    <div class="text-gray-600">
                      Supply chain optimisation.
                      Establish trust network  with end to end cost effective solutions.
                      Transparently  & profitability to our  stakeholders.
                    </div>
                  </div>

                </div>
                <div class="w-1/5  flex justify-center">
                  <div class="relative flex h-full w-1 bg-[#313232] items-center justify-center">
                    <div class="absolute flex flex-col justify-center h-20 w-48 rounded-r-full leading-none text-center z-10 bg-[#313232] font-thin">
                      <div class="text-white">GOALS</div>
                    </div>
                  </div>
                </div>
                <div class="w-2/5 px-2 py-10 ">

                </div>
              </div>
            </div>
            </div>
            <div class="flex flex-col items-center">
  <h1 class="text-center text-2xl font-bold my-8">Our Values</h1>
  <div class="flex-row justify-evenly w-full sm:flex">
    <div class="w-1/4 py-2 px-4  rounded-lg mb-4 border-4 border-[#313232] bg-[#F8EEE3]">
      <h2 class="text-center font-bold">Transparency</h2>
      <p>Ensure each and every step in supply chain is open & transparent.</p>
    </div>
    <div class="w-1/4 py-2 px-4 border-4 border-[#313232] rounded-lg mb-4 mx-4 bg-[#F8EEE3]">
    <h2 class="text-center font-bold" >Sustainability</h2>
      <p>Develop a stable and consistent ecosystem to achieve sustainablity</p>
    </div>
    <div class="w-1/4 py-2 px-4 border-4 border-[#313232] rounded-lg mb-4 bg-[#F8EEE3]">
    <h2 class="text-center font-bold">Optimality</h2>
      <p>Experiment and discover processes that give efficient results.</p>
    </div>
  </div>
</div>
          </div>
          

        
      </div>

      <div class="relative mt-40 pt-10  flex flex-col items-center justify-center h-screen">
        <h1 class="text-4xl font-bold mb-4">Who Are We</h1>
        <p class="text-lg mb-8 text-center px-20">We are a tribe that came together with the vision of building a world where agriculture is driven by technology. We intend to create an ecosystem where every stakeholder in agriculture has a fair share of the gain.</p>
        <div class="grid sm:grid-cols-3 gap-2 w-[1312px] grid-cols-1">
        <a href="/team/ceo" class="m-auto"> <button class="flex flex-col items-center justify-center rounded-lg p-1 ">
            <img src={CEO} alt="" class="rounded-full w-32 h-32 mb-2 border-2 border-gray-300" />
            <h2 class="text-lg font-semibold">Thejas Adithia</h2>
            <p>CEO</p>
          </button>
          </a>
          <a href="/team/cdo" class="m-auto">
          <button class="flex flex-col items-center justify-center  rounded-lg p-1 ">
            <img src={CDO} alt="" class="rounded-full w-32 h-32 mb-2 border-2 border-gray-300" />
            <h2 class="text-lg font-semibold">Manish Thilagar</h2>
            <p>CDO</p>
          </button>
          </a>
          <a href="/team/cto" class="m-auto">
          <button class="flex flex-col items-center justify-center  rounded-lg p-1">
            <img src={CTO} alt="" class="rounded-full w-32 h-32 mb-2 border-2 border-gray-300" />
            <h2 class="text-lg font-semibold">Chandan Shashank</h2>
            <p>CTO</p>
          </button>
          </a>
          <a href="/team/mentor" class="m-auto">
          <button class="flex flex-col items-center justify-center  rounded-lg p-1">
            <img src={Mentor} alt="" class="rounded-full w-32 h-32 mb-2 border-2 border-gray-300" />
            <h2 class="text-lg font-semibold">Balaubramanyam K S</h2>
            <p>Mentor</p>
          </button>
          </a>
          <a href="/team/designer" class="m-auto">
          <button class="flex flex-col items-center justify-center  rounded-lg p-1">
            <img src={Design} alt="" class="rounded-full w-32 h-32 mb-2 border-2 border-gray-300" />
            <h2 class="text-lg font-semibold">Snigdha PV</h2>
            <p>Design</p>
          </button>
          </a>
          <a href="/team/cpo" class="m-auto">
          <button class="flex flex-col items-center justify-center  rounded-lg p-1">
            <img src={CPO} alt="" class="rounded-full w-32 h-32 mb-2 border-2 border-gray-300" />
            <h2 class="text-lg font-semibold">SabarishKumar T</h2>
            <p>CPO</p>
          </button>
          </a>
          <button class="flex flex-col items-center justify-center  rounded-lg p-1">
            <img src="image7.jpg" alt="" class="rounded-full w-32 h-32 mb-2 pb-2 border-2 border-gray-300" />
            <h2 class="text-lg font-semibold">Shilpa Chaudhary</h2>
            <p>Marketing</p>
          </button>
        </div>
      </div>
    </>
  )
}

export default About