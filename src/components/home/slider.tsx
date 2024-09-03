"use client"

import React, { useState } from "react"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"

import { cn } from "@/lib/utils"

import { Button } from "../ui/button"

export default function Slider() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ],
  )

  return (
    <div className='relative'>
      <div className='navigation-wrapper'>
        <div ref={sliderRef} className='keen-slider h-80'>
          <div className='keen-slider__slide bg-yellow-500'>
            <Image
              src='/images/p1.jpg'
              alt='product image'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className='keen-slider__slide bg-red-500'>
            <Image
              src='/images/p2.jpg'
              alt='product image'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className='keen-slider__slide bg-blue-500'>
            <Image
              src='/images/p3.jpg'
              alt='product image'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className='keen-slider__slide bg-green-500'>
            <Image
              src='/images/p4.jpg'
              alt='product image'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className='absolute bottom-0 left-0 right-0 z-10 flex justify-center'>
          {Array.from(
            Array(instanceRef.current.track.details.slides.length).keys(),
          ).map((idx) => (
            <Button
              key={idx}
              variant='ghost'
              onClick={() => {
                instanceRef.current?.moveToIdx(idx)
              }}
              className={cn(
                currentSlide === idx ? "opacity-1 w-5" : "opacity-[0.15]",
                "m-1 mb-2 h-1 rounded-full bg-white p-1",
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
