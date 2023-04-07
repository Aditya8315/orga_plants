import React from 'react'
import Store from "../Store selection.png"
const customer = () => {
    return (
        
              <div class="relative flex flex-wrap items-center justify-center mx-40 my-2 ">
              <section class="w-2/3  p-8">
              <ul class="list-disc ">
                        <li class="mb-4 text-xl">A reliable option for customers to shop based on their choice.
                        </li>
                        <li class="mb-4 text-xl">Fastest delivery and return options from your trusted stores.</li>
                        <li class="mb-4 text-xl">Buy with an extra layer of trust from Orga Plants.</li>
                    </ul>
              </section>
              <aside class="w-1/3 p-8 items-center justify-center">
                  <img src={Store} alt="Your Image" class="h-[526px] w-auto" />
              </aside>
          </div>
    )
}

export default customer