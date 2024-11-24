import * as React from "react"

import { Card, CardContent } from "./ui/card"

import { Meteors } from "./ui/magicui/meteors";

import layers from '../assets/layers.png'
import barchart from '../assets/bar-chart.png'

const Soluton: React.FC = () => {
    return (
        <section className="bg-white relative pt-11 pb-16 w-full sm:px-10 overflow-hidden">
            <Meteors number={20} />
            <h2 className="text-primary 2xl:text-6xl text-3xl sm:text-5xl font-bold w-full text-center mt-5 mb-9">Transform Your Digital Footprint With Our Customized Solutions</h2>
            <div className="flex mb-4 md:flex-nowrap flex-wrap gap-x-4 items-stretch">
                <div className=" basis-full md:basis-2/3 lg:basis-2/3">
                
                        <Card className="bg-primary">
                        
                            <CardContent className="flex flex-col justify-center p-6 min-h-80 2xl:min-h-96">
                                
                                <div className="p-4 w-full mb-5 ">
                                    <img className="w-28 h-28 2xl:w-36 2xl:h-36" src={layers}/>
                                </div>
                                <h3 className="text-white text-xl 2xl:text-3xl mb-3">Innovative Design</h3>
                                <p className="text-white text-sm 2xl:text-xl">
                                We design visuals that not only showcase your brand’s identity but also tell your unique story. By understanding what drives your audience, we create a design that truly resonates with them.
                                </p>
                            </CardContent>
                        </Card>
                </div>
                <div className=" basis-full md:basis-2/3 lg:basis-2/3">
                <Card className="bg-primary">
                            <CardContent className="flex flex-col justify-center p-6 min-h-80 2xl:min-h-96">
                                <h3 className="text-white text-xl 2xl:text-3xl mb-3">SEO Power</h3>
                                <p className="text-white text-sm 2xl:text-xl">
                                Our customized SEO strategies aim to boost your site’s presence in search results. We target relevant keywords to attract organic traffic and engage potential customers via SEO-optimized content.
                                </p>
                            </CardContent>
                        </Card>
                </div>
            </div>

        <div className="flex md:flex-nowrap flex-wrap mb-4 gap-x-4">
        <div className=" basis-full md:basis-3/4 lg:basis-1/4">
                        <Card className="bg-primary ">
                            <CardContent className="flex flex-col justify-center p-6 min-h-80 2xl:min-h-96">
                                <h3 className="text-white text-xl 2xl:text-3xl mb-3">Adaptive Experience</h3>
                                <p className="text-white text-sm 2xl:text-xl">
                                From desktop to mobile, our designs make sure a smooth, engaging experience across all devices. We prioritize mobile experiences, creating flawless interactions for users on the go.
                                </p>
                            </CardContent>
                        </Card>
                </div>
                

                <div className=" basis-full md:basis-3/4 lg:basis-3/4">
                <Card className="bg-primary">
                            <CardContent className="flex flex-col justify-center p-6 min-h-80 2xl:min-h-96">
                                <div className="p-4 w-full mb-5">
                                    <img className="w-28 h-28 2xl:w-36 2xl:h-36" src={barchart}/>
                                </div>
                                <h3 className="text-white text-xl 2xl:text-3xl mb-3">Strategic Blueprint</h3>
                                <p className="text-white text-sm 2xl:text-xl">
                                Our strategies are designed around your core objectives, making sure every move aligns with your vision. We work on insights and analytics to build strategies that are as effective as well as innovative.
                                </p>
                            </CardContent>
                        </Card>
                        
                </div>
        </div>

        <div className="flex mb-4 md:flex-nowrap flex-wrap gap-x-4">
        <div className="basis-full md:basis-3/4 lg:basis-3/4">
                        <Card className="bg-primary">
                            <CardContent className="flex flex-col justify-center p-6 min-h-80 2xl:min-h-96">
                                <h3 className="text-white text-xl 2xl:text-3xl mb-3">User-Focused Design</h3>
                                <p className="text-white text-sm 2xl:text-xl">
                                We design with your users in mind, guaranteeing the site is intuitive and easy to navigate. Your feedback drives our continuous improvement, ensuring your site resonates with your audience’s needs.</p>
                            </CardContent>
                        </Card>
                </div>


                <div className="basis-full md:basis-1/4 lg:basis-1/4">
                        <Card className="bg-primary">
                            <CardContent className="flex flex-col justify-center p-6 min-h-80 2xl:min-h-96">
                          
                                <h3 className="text-white text-xl 2xl:text-3xl mb-3">Performance Mastery</h3>
                                <p className="text-white text-sm 2xl:text-xl">
                                We optimize for speed, assuring fast load times and a responsive experience. Our advanced methods improve performance, keeping your site running smoothly.
                                </p>
                            </CardContent>
                        </Card>
                </div>
                
        </div>


        </section>
    )
}

export default Soluton;
