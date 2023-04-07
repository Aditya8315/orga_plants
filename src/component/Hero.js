import React from 'react'
import Customer from './customer'
import Partner from './partner'
import Store from './store'
import { useState } from 'react';

const Hero = () => {
    const [option, setoption] = useState("customer");
  return (
    <>
            <div class=" relative my-2 flex justify-around w-full">
                <button id="customer" class={`py-2 px-4  text-[#adadad] hover:border-2 hover:border-[#097150] hover:text-[#F58850] font-bold rounded-xl ${option==="customer"?"border-2 border-[#097150] text-[#F58850]":" "}`} onClick={()=>{setoption("customer")}}>Customer</button>
                    <button id="store"  class={`py-2 px-4  text-[#adadad] hover:border-2 hover:border-[#097150] hover:text-[#F58850] font-bold rounded-xl ${option==="store"?"border-2 border-[#097150] text-[#F58850]":" "}`}onClick={()=>{setoption("store")}}>Stores</button>
                    <button  id="partner" class={`py-2 px-4  text-[#adadad] hover:border-2 hover:border-[#097150] hover:text-[#F58850] font-bold rounded-xl ${option==="partner"?"border-2 border-[#097150] text-[#F58850]":" "}`} onClick={()=>setoption("partner")}>Partners</button>
                </div>
                {(option==="customer") && <Customer/>}
                {(option==="store") &&<Store/>}
                {(option==="partner") &&<Partner/>}

    </>
  )
}
export default Hero

