import * as React from "react"

import { Card, CardContent } from "./ui/card"

const Comparison: React.FC = () => {
    return (
        <section className="bg-white pt-11 pb-16 sm:px-10">
            <h2 className="text-primary text-3xl sm:text-5xl font-bold w-full text-center mb-9 mt-5">Goodbye To Traditional Website</h2>
            <div className="w-full ">
                <div className="flex md:flex-nowrap flex-wrap gap-x-4">
                    <div className=" basis-full md:basis-2/3 lg:basis-2/3">
                        <Card className="bg-primary">
                            <CardContent className="flex flex-col justify-center p-6 min-h-72">
                                <div className="bg-white p-4 rounded-full w-fit mb-5">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a28.076 28.076 0 0 1-1.091 9M7.231 4.37a8.994 8.994 0 0 1 12.88 3.73M2.958 15S3 14.577 3 12a8.949 8.949 0 0 1 1.735-5.307m12.84 3.088A5.98 5.98 0 0 1 18 12a30 30 0 0 1-.464 6.232M6 12a6 6 0 0 1 9.352-4.974M4 21a5.964 5.964 0 0 1 1.01-3.328 5.15 5.15 0 0 0 .786-1.926m8.66 2.486a13.96 13.96 0 0 1-.962 2.683M7.5 19.336C9 17.092 9 14.845 9 12a3 3 0 1 1 6 0c0 .749 0 1.521-.031 2.311M12 12c0 3 0 6-2 9"/>
                                    </svg>
                                </div>
                                <h3 className="text-white text-xl mb-3">Save Time</h3>
                                <p className="text-white text-sm">
                                    Our expert services are designed to keep your project on track, building efficient and time-focused website design and development to enhance your online presence quickly.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="basis-full md:basis-2/3 lg:basis-2/3">
                        <Card className="bg-primary">
                            <CardContent className="flex flex-col justify-center p-6 min-h-72">
                                <div className="bg-white p-4 rounded-full w-fit mb-5">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a28.076 28.076 0 0 1-1.091 9M7.231 4.37a8.994 8.994 0 0 1 12.88 3.73M2.958 15S3 14.577 3 12a8.949 8.949 0 0 1 1.735-5.307m12.84 3.088A5.98 5.98 0 0 1 18 12a30 30 0 0 1-.464 6.232M6 12a6 6 0 0 1 9.352-4.974M4 21a5.964 5.964 0 0 1 1.01-3.328 5.15 5.15 0 0 0 .786-1.926m8.66 2.486a13.96 13.96 0 0 1-.962 2.683M7.5 19.336C9 17.092 9 14.845 9 12a3 3 0 1 1 6 0c0 .749 0 1.521-.031 2.311M12 12c0 3 0 6-2 9"/>
                                    </svg>
                                </div>
                                <h3 className="text-white text-xl mb-3">Dedicated Support</h3>
                                <p className="text-white text-sm">
                                Count on our tireless devotion to your success. Our devoted support team is here to address your needs, giving guidance and assistance every step of the way.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="basis-full md:basis-2/3 lg:basis-2/3">
                        <Card className="bg-primary">
                            <CardContent className="flex flex-col justify-center p-6 min-h-72">
                                <div className="bg-white p-4 rounded-full w-fit mb-5">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a28.076 28.076 0 0 1-1.091 9M7.231 4.37a8.994 8.994 0 0 1 12.88 3.73M2.958 15S3 14.577 3 12a8.949 8.949 0 0 1 1.735-5.307m12.84 3.088A5.98 5.98 0 0 1 18 12a30 30 0 0 1-.464 6.232M6 12a6 6 0 0 1 9.352-4.974M4 21a5.964 5.964 0 0 1 1.01-3.328 5.15 5.15 0 0 0 .786-1.926m8.66 2.486a13.96 13.96 0 0 1-.962 2.683M7.5 19.336C9 17.092 9 14.845 9 12a3 3 0 1 1 6 0c0 .749 0 1.521-.031 2.311M12 12c0 3 0 6-2 9"/>
                                    </svg>
                                </div>
                                <h3 className="text-white text-xl mb-3">Grow Your Business</h3>
                                <p className="text-white text-sm">
                                If you're a startup or an established company, our solutions adapt to your evolving needs, helping you stay in the market with confidence.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comparison;