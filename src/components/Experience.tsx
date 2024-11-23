import * as React from "react"

const Experience: React.FC = () => {
    return (
        <section className="bg-primary pt-11 pb-16 w-full px-10">
             <h2 className="text-white text-5xl font-bold w-full text-center mb-9 mt-5">You Can Bet On It</h2>
            <div className="flex items-center justify-between  ">

                <div className="flex flex-col items-center content-center">
                    <span className="text-white mt-2 font-bold text-8xl">200%</span>
                    <span className="text-white text-md mt-2">Average ROI Increase for Clients</span>
                </div>

                <div className="flex flex-col items-center content-center">
                    <span className="text-white mt-2 font-bold text-8xl">1,000+</span>
                    <span className="text-white text-md mt-2">Successful Projects Delivered</span>
                </div>

                <div className="flex flex-col items-center content-center">
                    <span className="text-white mt-2 font-bold text-8xl">10+</span>
                    <span className="text-white text-md mt-2">Years of Industry Experience</span>
                </div>

            </div>
        </section>
    )
}

export default Experience;