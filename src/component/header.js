import React from 'react'
import Logo from "../orgaLogo.png";
import NameLogo from "../NameLogo.png";
import {useState} from 'react';
// import { useLocation } from 'react-router-dom';
const Header = () => {
  const [tab, settab] = useState("");
  // const location = useLocation();
  // const {pathname} = location;
  // console.log(pathname);
  return (
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" class="flex items-center">
        <img src={Logo} class="h-16 mr-3" alt="Orga Logo" />
        <img src={NameLogo} className="h-8 mt-5 m-auto " alt="Orga plants"/>
    </a>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="/"><button onClick={()=>{settab("home")}} class={`block py-2 pl-3 pr-4 text-[#adadad] rounded hover:text-black hover:font-bold ${tab==="home"?"text-black":""}`}>Home</button></a>
        </li>
        <li>
        <a href="/blogs"><button onClick={()=>{settab("blogs")}} class={`block py-2 pl-3 pr-4 text-[#adadad] rounded hover:text-black hover:font-bold ${tab==="blogs"?"text-black":""}`}>Blogs</button></a>
        </li>
        <li>
        <a href="/about"><button onClick={()=>{settab("about")}} class={`block py-2 pl-3 pr-4 text-[#adadad] rounded hover:text-black hover:font-bold ${tab==="about"?" text-black":""}`}>About Us</button></a>
        </li>
        <li>
        <a href="/join"><button onClick={()=>{settab("join")}} class={`block py-2 pl-3 pr-4 text-[#adadad] rounded hover:text-black hover:font-bold ${tab==="join"?" text-black":""}`}>Join Us</button></a>
        </li>
        <li>
        <a href="/tnc"><button onClick={()=>{settab("tnc")}} class={`block py-2 pl-3 pr-4 text-[#adadad] rounded hover:text-black hover:font-bold ${tab==="tnc"?"font-bold text-black":""}`}>Terms & Conditions</button></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Header