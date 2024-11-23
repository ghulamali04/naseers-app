import * as React from "react"
import  BackgroundImage from '../assets/about-background.png';

import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

const About: React.FC = () => {
    return (
        <section id="contact" style={{ backgroundImage: `url('${BackgroundImage}')` }} className=" bg-cover bg-center h-screen w-full pt-11 pb-16 sm:px-10">
            <h2 className="text-primary text-3xl sm:text-5xl font-bold w-full text-center mb-9 mt-5">Have A Project In Mind?<br></br>Let’s Get To Work.</h2>
            <div className="flex align-items justify-center ">
                <div className="md:w-2/6 sm:w-2/3 w-full sm:px-0 px-2">
                    <div className="flex flex-col">
                        <Input placeholder="Full Name" className="mb-3"/>
                        <Input placeholder="Email" className="mb-3"/>
                        <Input placeholder="Phone Number" className="mb-3"/>
                        <Textarea placeholder="Message" className="mb-3"/>
                        <div className="w-full flex align-items justify-center">
                        <button className="btn-dark w-4/5 sm:w-3/5 md:w-3/5 lg:w-2/5 flex justify-center gap-x-2">
                        <span>Contact Us</span>
                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
</svg>

                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
