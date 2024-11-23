import React from "react";
import Navbar from './Navbar';
import { RainbowButton } from "./ui/magicui/rainbow-button";

import  BackgroundImage from '../assets/background.webp';

const Banner: React.FC = () => {
    return (
        <div style={{ backgroundImage: `url('${BackgroundImage}')` }} className={`bg-cover bg-center h-screen w-full p-3`}>
            <Navbar></Navbar>

            <div className="flex flex-col w-full justify-center justify-items-center items-center mt-24">
                <h1 className="text-white text-7xl font-light w-3/4 text-center mb-4">Bridging<br/> Creativity & Technology<br/> for Unparalleled IT Solutions</h1>
                <div className="text-white relative underline w-fit text-[18px] font-light py-2 px-3 mb-4">
                    <svg className="w-6 h-6 left-[-10px] top-[-10px] absolute text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z" clip-rule="evenodd"/>
                    </svg>
                    Solutions that inspire
                </div>

                <RainbowButton>Get Started</RainbowButton>
            </div>
        </div>
    )
}

export default Banner;