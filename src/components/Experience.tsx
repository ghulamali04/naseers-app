import * as React from "react"

import { NumberTicker } from "./ui/magicui/number-ticker";

const Experience: React.FC = () => {
    return (
        <section className="bg-primary pt-11 pb-16 w-full sm:px-10">
             <h2 className="text-white 2xl:text-6xl text-3xl sm:text-5xl font-bold w-full text-center mb-9 mt-5">You Can Bet On It</h2>
            <div className="flex md:flex-nowrap flex-col lg:flex-row flex-wrap items-center justify-center md:justify-between  sm:px-10">

                <div className="flex flex-col items-center md:mb-0 mb-5 content-center">
                    <span className="text-white mt-2 font-bold text-6xl sm:text-8xl">
                    <NumberTicker value={200} className="text-white"/>
                    </span>
                    <span className="text-white text-md 2xl:text-xl text-center mt-2">Average ROI Increase for Clients</span>
                </div>

                <div className="flex flex-col items-center md:mb-0 mb-5 content-center">
                    <span className="text-white mt-2 font-bold text-6xl sm:text-8xl">
                    <NumberTicker value={1000} className="text-white"/>
                    </span>
                    <span className="text-white text-md 2xl:text-xl text-center mt-2">Successful Projects Delivered</span>
                </div>

                <div className="flex flex-col items-center md:mb-0 mb-5 content-center">
                    <span className="text-white mt-2 font-bold text-6xl sm:text-8xl">
                    <NumberTicker value={10} className="text-white"/>
                    </span>
                    <span className="text-white text-md 2xl:text-xl text-center mt-2">Years of Industry Experience</span>
                </div>

            </div>
        </section>
    )
}

export default Experience;