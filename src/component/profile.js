import React from 'react'

const profile = () => {
  
  return (
    <div class="relative mt-10 flex items-center justify-center h-screen">
    <div class="w-[1100px] h-[800px] m-auto flex items-center justify-center">
      <div class="w-full
       h-4/5 flex flex-col lg:flex-row items-center border border-black  justify-center  rounded-lg overflow-hidden shadow-lg">
        <section class="w-1/2 items-center justify-center">
          <img class="m-auto w-[100px] h-[100px] rounded-full border border-black" src={''} alt="Employee"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl "></div>
            <p  class="text-gray-700 font-bold text-center"></p>
            <p class="text-gray-700 text-base text-center"></p>
          </div>
        </section>
        <aside class="w-1/2 rounded-lg overflow-hidden px-6 py-4 items-center justify-center">
          <p class="text-gray-700 text-base">
</p>
        </aside>
      </div>
    </div>
  </div>
  )
}

export default profile