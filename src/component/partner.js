import React from 'react'
import partner from "../Partner screen 1.png"
const Partner = () => {
    return (
        <div class="relative flex flex-wrap items-center justify-center mx-40 my-2 ">
                <section class="w-2/3  p-8">
                    <ul class="list-disc ">
                        <li class="mb-4 text-xl">A trusted option for partners to make money near their surroundings .
                        </li>
                        <li class="mb-4 text-xl">Work according to your choice on instant pay-outs.</li>
                        <li class="mb-4 text-xl">Build a loyal profile and earn rewards on the go. </li>
                    </ul>
                </section>
                <aside class="w-1/3 p-8 items-center justify-center">
                    <img src={partner} alt="Your Image" class="h-[526px] w-auto" />
                </aside>
            </div>
    )
}

export default Partner