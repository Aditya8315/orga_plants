import React from 'react'
import Sophie from '../Sophie.png';
import Chandan from '../Chandan.png';
import Charan from '../Charan.png';
import Customers from '../customers.png'

const Review = () => {
  return (
    <>
    <div class="relative mt-10 mb-10 flex flex-col items-center">
    <h1 class="text-center text-4xl font-bold my-8">Some of our esteemed customers </h1>

<div id="default-carousel" class="relative w-full " >
    
<div class="relative h-56 overflow-hidden rounded-lg md:h-96" >
            <img src={Customers} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black dark:bg-gray-800/30  dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

    <h1 class="text-center text-4xl font-bold my-8">Thanks For Expressing Your Gratitude</h1>
    <div class="flex justify-evenly w-full">
      <div class="w-1/4 py-2 px-4  rounded-lg mb-4 border-4 border-[#313232] bg-[#F8EEE3]">
        <p class="w-auto h-auto">As a business owner my synergy with Orga Plants is going great, it's totally tireless monitoring my business remotely unlike before, thanks orgaplants</p>
        <div class="flex flex-row m-2 items-center">
        <img src ={Sophie} alt="sophie" class="h-10 w-10"/>
        <div class="flex flex-col m-2 "><p class="font-bold">Shopie </p>
        <p>Business Owner, Grocery Shop</p>
        </div>
        </div>
      </div>
      <div class="w-1/4 py-2 px-4 border-4 border-[#313232] rounded-lg mb-4 mx-4 bg-[#F8EEE3]">
        <p class="w-auto h-auto">"Thank you for boosting my sales and reaching more customers with your excellent e-commerce platform."</p>
        <div class="flex flex-row m-2 items-center">
        <img src ={Chandan} alt="chandan" class="h-10 w-10"/>
        <div class="flex flex-col m-2 "><p class="font-bold">Chandan </p>
        <p>Student, Hardware Shop</p>
        </div>
        </div>
      </div>
      <div class="w-1/4 py-2 px-4 border-4 border-[#313232] rounded-lg mb-4 bg-[#F8EEE3]">
        <p class="w-auto h-auto">"Deeply grateful for your outstanding e-commerce services that brought tremendous success to my business let's grow together!"</p>
        <div class="flex flex-row m-2 items-center">
        <img src ={Charan} alt="charan" class="h-10 w-10"/>
        <div class="flex flex-col m-2 "><p class="font-bold">Charan </p>
        <p>Entrepreuneur</p>
        </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Review