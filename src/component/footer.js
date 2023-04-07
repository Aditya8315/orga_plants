import React from "react";
import OrgaLogo from "../orgaLogo.png";
import NameLogo from "../NameLogo.png"
import support from "../support.png"
import startup from "../startup.png"
import call from "../call.png";
import gmail from "../gmail.png";
import maps from "../maps.png";
const Footer = () => {
  return (
    
<footer class="bg-black">
    <div class="mx-auto w-full flex-grow max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between w-auto">
          <div class="mb-6 md:mb-0 items-center justify-center grow w-[300]">
              <a href="" class="flex mb-4">
                  <img src={OrgaLogo} class="h-[75px] w-[75px] mr-3" alt="Orga Plants Logo" />
                  <img src={NameLogo} class="h-[30px] m-auto " alt="Orga Plants" />
    
              </a>
              <a href="" class="flex flex-col justify">
              <p class="text-white mb-4">A complete E-commerce solution for all your business needs with complete transparency al all levels.</p>
                  <img src={startup} class="h-[64px] w-auto m-auto ml-0" alt="startupIndia" />
                  <p class="text-white">© Plants Chain Pvt. Ltd.</p>
                  <p class="text-white">All RIghts Reserved</p>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 m-auto">
              <div>
                  <h2 class="mb-6 text-sm font-semibold uppercase text-white text-center ">Support US</h2>
                  <img src={support} class="m-auto"alt="Support us" />
              </div>
              <div>
                  <h2 class="mb-6 font-semibold  uppercase text-white text-xl">Our Solutions</h2>
                  <ul class="text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline ">E-Commerce</a>
                      </li>
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Rider App</a>
                      </li>
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Inventory</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold uppercase text-white">Contact US</h2>
                  <ul class="text-gray-400 font-medium">
                      <li class="mb-4 flex-row flex">
                        <img src={maps} alt="maps" class="h-[40px] w-[30px] mr-4"/>
                          <a href="#" class="hover:underline"># 392, 2nd main, 3rd cross, Belathur colony, Kadugodi, Bengaluru Karnataka-560067</a>
                      </li>
                      <li class="mb-4 flex-row flex">
                      <img src={call} alt="phone" class="h-[32px] w-[21px] mr-6"/>
                          <a href="#" class="hover:underline">+91 80734 38163</a>
                      </li>
                      <li class="mb-4 flex-row flex">
                      <img src={gmail} alt="gmail" class="w-[40px] h-[30px] mr-2"/>
                          <a href="#" class="hover:underline">support@orgaplants.com </a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />
    </div>
</footer>

  );
};

export default Footer;
