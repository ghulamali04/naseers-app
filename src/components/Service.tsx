import * as React from "react"

import { Card, CardContent } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"

import DigitalMarketing from '../assets/DigitalMarketing.jpg'
import Shopify from '../assets/Shopify.jpg'
import UIUX01 from '../assets/UIUX01.jpg'
import VFX01 from '../assets/VFX01.jpg'
import WD01 from '../assets/WD01.jpg'
import WD02 from '../assets/WD02.jpg'

const Service: React.FC = () => {
  return (
    <section className="pt-11 pb-16">
      <h2 className="text-primary text-3xl sm:text-5xl font-bold w-full text-center mb-9 mt-5">See The Services We Provide</h2>
          <Carousel
      opts={{
        align: "start",
      }}
      className="w-full sm:px-10"
    >
      <CarouselContent>
        <CarouselItem key="0" className="md:basis-1/3 lg:basis-1/4">
            <div className="p-1">
              <Card className="bg-cover bg-no-repeat" style={{ backgroundImage: `url('${WD01}')` }}>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <button className="btn-white">Web Design</button>
                </CardContent>
              </Card>
            </div>
        </CarouselItem>
        <CarouselItem key="1" className="md:basis-1/3 lg:basis-1/4">
        <div className="p-1">
              <Card className="bg-cover bg-no-repeat" style={{ backgroundImage: `url('${VFX01}')` }}>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <button className="btn-white">VFX</button>
                </CardContent>
              </Card>
            </div>
        </CarouselItem>
        <CarouselItem key="2" className="md:basis-1/3 lg:basis-1/4">
        <div className="p-1">
              <Card className="bg-cover bg-no-repeat" style={{ backgroundImage: `url('${UIUX01}')` }}>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <button className="btn-white">UI/UX</button>
                </CardContent>
              </Card>
            </div>
        </CarouselItem>
        <CarouselItem key="3" className="md:basis-1/3 lg:basis-1/4">
        <div className="p-1">
              <Card className="bg-cover bg-no-repeat" style={{ backgroundImage: `url('${DigitalMarketing}')` }}>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <button className="btn-white">Digital Marketing</button>
                </CardContent>
              </Card>
            </div>
        </CarouselItem>
        <CarouselItem key="4" className="md:basis-1/3 lg:basis-1/4">
        <div className="p-1">
              <Card className="bg-cover bg-no-repeat" style={{ backgroundImage: `url('${WD02}')` }}>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <button className="btn-white">Web Development</button>
                </CardContent>
              </Card>
            </div>
        </CarouselItem>
        <CarouselItem key="5" className="md:basis-1/3 lg:basis-1/4">
        <div className="p-1">
              <Card className="bg-cover bg-no-repeat" style={{ backgroundImage: `url('${Shopify}')` }}>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <button className="btn-white">Shopify</button>
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
