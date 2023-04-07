import React from 'react'
import Group from "../Group.png"
const Store = () => {
    return (
        
    <div class="relative flex flex-wrap items-center justify-center mx-40 my-2 ">
    <section class="w-1/2  p-8">
    <ul class="list-disc ">
                <li class="mb-4 text-xl">Detailed view & advanced Analytics for easy management.
                </li>
                <li class="mb-4 text-xl">Easy customer support for any your business needs. </li>
                <li class="mb-4 text-xl">Chat directly with customers.</li>
            </ul>
    </section>
    <aside class="w-1/2 p-8 items-center justify-center">
        <img src={Group} alt="Your Image" class="h-auto w-auto" />
    </aside>
</div>
    )
}

export default Store