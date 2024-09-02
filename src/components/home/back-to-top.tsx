"use client"

import { ArrowUp } from "lucide-react"

import { Button } from "../ui/button"

const BactToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className='flex justify-end'>
      <Button
        onClick={handleScrollToTop}
        className='flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#F5F5F5] text-black transition-colors duration-200 hover:bg-gray-200'
      >
        <ArrowUp />
      </Button>
    </div>
  )
}

export default BactToTop
