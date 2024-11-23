import * as React from "react"
import  CubeImage from '../assets/cube.jpg';

const About: React.FC = () => {
    return (
        <section id="about" className="bg-primary pt-9 w-full pb-10 sm:px-10">
            <div className="columns-1 sm:columns-2">
                <div className="flex flex-col align-items justify-start">
                    <div className="mt-11 px-2 sm:px-0 text-center sm:text-start">
                        <h2 className="uppercase text-white font-bold text-center sm:text-start text-3xl sm:text-5xl mb-2">Our Vision</h2>
                        <p className="text-white text-md text-center sm:text-start mb-3 pr-2">
                            To become a global leader in innovative IT solutions, combining cutting-edge technology, creative design, and empowering education to transform businesses, enhance digital experiences, and build a smarter, more connected world.
                        </p>
                        <button className="btn-white">Get Started Now</button>
                    </div>
                </div>
                <div>
                    <img src={CubeImage}></img>
                </div>
            </div>
        </section>
    )
}

export default About
