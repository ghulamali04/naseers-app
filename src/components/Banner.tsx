import React from "react";
import Navbar from './Navbar';
import { VelocityScroll } from "./ui/magicui/scroll-based-velocity";


import { RainbowButton } from "./ui/magicui/rainbow-button";

import  BackgroundImage from '../assets/background.webp';

const Banner: React.FC = () => {
    return (
        <div style={{ backgroundImage: `url('${BackgroundImage}')` }} className={`bg-cover bg-center h-screen overflow-hidden w-full p-3`}>
            <Navbar></Navbar>

            <div className="flex flex-col w-full justify-center justify-items-center items-center h-full">
                <h1 className="text-white 2xl:text-8xl md:text-7xl sm:text-5xl text-3xl font-light w-3/4 text-center mb-4">Bridging<br/> Creativity & Technology<br/> for Unparalleled IT Solutions</h1>
                <div className="text-white relative underline w-fit text-[18px] 2xl:text-[36px] font-light py-2 px-3 mb-4">
                    <svg className="w-6 h-6 right-[-10px] top-[-10px] absolute text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z" clip-rule="evenodd"/>
                    </svg>
                    <VelocityScroll
      text="Solutions that inspire"
      default_velocity={5}
    />
                    
                </div>

                <a href="#contact">
                <RainbowButton className="2xl:text-2xl">Get Started</RainbowButton>
                </a>
            </div>
        </div>
    )
}

export default Banner;