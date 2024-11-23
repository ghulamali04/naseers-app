import * as React from "react"
import  CubeImage from '../assets/cube.jpg';

const About: React.FC = () => {
    return (
        <section className="bg-primary pt-9 w-full pb-10 px-10">
            <div className="columns-2">
                <div className="flex flex-col align-items justify-start">
                    <div className="mt-11">
                        <h2 className="uppercase text-white font-bold text-4xl mb-2">Our Vision</h2>
                        <p className="text-white text-md mb-3 pr-2">
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
