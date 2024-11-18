import * as React from "react"

import { Card, CardContent } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"

import bg_service_1 from '../assets/service-1.png'

const Service: React.FC = () => {
  return (
    <section>
      <h2 className="text-primary text-5xl font-bold w-full text-center mt-9 mb-3">See The Services We Provide</h2>
          <Carousel
      opts={{
        align: "start",
      }}
      className="w-full pt-4 pb-10 px-10"
    >
      <CarouselContent>
        <CarouselItem key="0" className="md:basis-1/3 lg:basis-1/4">
            <div className="p-1">
              <Card className="bg-cover bg-no-repeat" style={{ backgroundImage: `url('${bg_service_1}')` }}>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <button className="btn-white">Web Design</button>
                </CardContent>
              </Card>
            </div>
        </CarouselItem>
        <CarouselItem key="1" className="md:basis-1/3 lg:basis-1/4">
        <div className="p-1">
              <Card className="bg-cover bg-no-repeat" style={{ backgroundImage: `url('${bg_service_1}')` }}>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <button className="btn-white">UI/UX</button>
                </CardContent>
              </Card>
            </div>
        </CarouselItem>
        <CarouselItem key="2" className="md:basis-1/3 lg:basis-1/4">
        <div className="p-1">
              <Card className="bg-cover bg-no-repeat" style={{ backgroundImage: `url('${bg_service_1}')` }}>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <button className="btn-white">Digital Marketing</button>
                </CardContent>
              </Card>
            </div>
        </CarouselItem>
        <CarouselItem key="3" className="md:basis-1/3 lg:basis-1/4">
        <div className="p-1">
              <Card className="bg-cover bg-no-repeat" style={{ backgroundImage: `url('${bg_service_1}')` }}>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <button className="btn-white">Web Development</button>
                </CardContent>
              </Card>
            </div>
        </CarouselItem>
        <CarouselItem key="4" className="md:basis-1/3 lg:basis-1/4">
        <div className="p-1">
              <Card className="bg-cover bg-no-repeat" style={{ backgroundImage: `url('${bg_service_1}')` }}>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <button className="btn-white">Shopify</button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        <CarouselItem key="5" className="md:basis-1/3 lg:basis-1/4">
        <div className="p-1">
              <Card className="bg-cover bg-no-repeat" style={{ backgroundImage: `url('${bg_service_1}')` }}>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <button className="btn-white">VFX</button>
                </CardContent>
              </Card>
            </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </section>
  )
}

export default Service
