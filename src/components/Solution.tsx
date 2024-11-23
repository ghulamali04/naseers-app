import * as React from "react"

import { Card, CardContent } from "./ui/card"

import layers from '../assets/layers.png'
import barchart from '../assets/bar-chart.png'
import socialmedia from '../assets/social-media.png'

const Soluton: React.FC = () => {
    return (
        <section className="bg-white pt-11 pb-16 w-full px-10">
            <h2 className="text-primary text-5xl font-bold w-full text-center mt-5 mb-9">Transform Your Digital Footprint With Our Customized Solutions</h2>
            <div className="flex mb-4 gap-x-4">
                <div className="md:basis-2/3 lg:basis-2/3">
                        <Card className="bg-primary">
                            <CardContent className="flex flex-col justify-center p-6 min-h-72">
                                <div className="p-4 w-full mb-5 ">
                                    <img className="w-28 h-28" src={layers}/>
                                </div>
                                <h3 className="text-white text-xl mb-3">Innovative Design</h3>
                                <p className="text-white text-sm">
                                We design visuals that not only showcase your brand’s identity but also tell your unique story. By understanding what drives your audience, we create a design that truly resonates with them.
                                </p>
                            </CardContent>
                        </Card>
                </div>
                <div className="md:basis-2/3 lg:basis-2/3">
                        <Card className="bg-primary">
                            <CardContent className="flex flex-col justify-center p-6 min-h-72">
                                <div className="p-4 w-full mb-5">
                                    <img className="w-28 h-28" src={barchart}/>
                                </div>
                                <h3 className="text-white text-xl mb-3">Strategic Blueprint</h3>
                                <p className="text-white text-sm">
                                Our strategies are designed around your core objectives, making sure every move aligns with your vision. We work on insights and analytics to build strategies that are as effective as well as innovative.
                                </p>
                            </CardContent>
                        </Card>
                </div>
            </div>

        <div className="flex mb-4 gap-x-4">
        <div className="md:basis-3/4 lg:basis-1/4">
                        <Card className="bg-primary">
                            <CardContent className="flex flex-col justify-center p-6 min-h-72">
                                <h3 className="text-white text-xl mb-3">Adaptive Experience</h3>
                                <p className="text-white text-sm">
                                From desktop to mobile, our designs make sure a smooth, engaging experience across all devices. We prioritize mobile experiences, creating flawless interactions for users on the go.
                                </p>
                            </CardContent>
                        </Card>
                </div>
                

                <div className="md:basis-3/4 lg:basis-3/4">
                        <Card className="bg-primary">
                            <CardContent className="flex flex-col justify-center p-6 min-h-72">
                                <h3 className="text-white text-xl mb-3">SEO Power</h3>
                                <p className="text-white text-sm">
                                Our customized SEO strategies aim to boost your site’s presence in search results. We target relevant keywords to attract organic traffic and engage potential customers via SEO-optimized content.
                                </p>
                            </CardContent>
                        </Card>
                </div>
        </div>

        <div className="flex mb-4 gap-x-4">
        <div className="md:basis-3/4 lg:basis-3/4">
                        <Card className="bg-primary">
                            <CardContent className="flex flex-col justify-center p-6 min-h-72">
                                <h3 className="text-white text-xl mb-3">User-Focused Design</h3>
                                <p className="text-white text-sm">
                                We design with your users in mind, guaranteeing the site is intuitive and easy to navigate. Your feedback drives our continuous improvement, ensuring your site resonates with your audience’s needs.</p>
                            </CardContent>
                        </Card>
                </div>


                <div className="md:basis-1/4 lg:basis-1/4">
                        <Card className="bg-primary">
                            <CardContent className="flex flex-col justify-center p-6 min-h-72">
                                <h3 className="text-white text-xl mb-3">Performance Mastery</h3>
                                <p className="text-white text-sm">
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
