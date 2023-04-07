import React from 'react'
import Map from "../component/map";
import ImageGrid from '../component/Imagegrid';
import Footer from '../component/footer';
import Hero from '../component/Hero';
import Review from '../component/review';
import Welcome from '../component/Welcome';
const Home = () => {
  
    return (
        <>
            <Welcome/>
           <h1 class="text-center relative font-Poppins mt-2 w-full h-[63] m-auto p-2 mb-2 font-merriweather font-bold text-5xl flex items-center justify-center">Our Product Offerings</h1>
           <Hero/>
           <ImageGrid/>
    <Map/>
    <Review/>
    <Footer/>
        </>
    )
}

export default Home