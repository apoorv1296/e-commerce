import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "../ui/card"
import Image from "next/image"

export function HeadCarousel() {
  return (
    // <Carousel className="w-full">
    //   <CarouselContent>
    //     {Array.from({ length: 5 }).map((_, index) => (
    //       <CarouselItem key={index}>
    //         <div className="p-1">
    //           <Card>
    //             <CardContent className="flex items-center justify-center">
    //               <span className="text-4xl font-semibold">{index + 1}</span>
    //             </CardContent>
    //           </Card>
    //         </div>
    //       </CarouselItem>
    //     ))}
    //   </CarouselContent>
    //   <CarouselPrevious />
    //   <CarouselNext />
    // </Carousel>

    <Carousel className="w-full">
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index}>
            <Card>
              <CardContent className="flex items-center justify-center">
        <Image alt="card" width="100" height="100" src="/images/Screenshot 2024-08-26 161504.png"/>
              </CardContent>
            </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  )
}
