import Image from "next/image"

import { Button } from "@/components/ui/button"

const AddProductSection = () => (
  <div className='flex justify-between bg-black p-14 text-white'>
    <div className='space-y-10'>
      <h3 className='font-semibold text-[#00FF66]'>Categories</h3>
      <h1 className='w-[443px] text-5xl font-semibold tracking-wider'>
        Enhance Your Music Experience
      </h1>
      <div className='flex space-x-5'>
        <div className='h-[62px] w-[62px] rounded-full bg-white' />
        <div className='h-[62px] w-[62px] rounded-full bg-white' />
        <div className='h-[62px] w-[62px] rounded-full bg-white' />
        <div className='h-[62px] w-[62px] rounded-full bg-white' />
      </div>
      <Button className='h-[56px] w-[171px] bg-[#00FF66]'>Buy Now</Button>
    </div>

    <div className='relative flex items-center justify-center'>
      <div className='absolute inset-0 m-auto h-full w-[500px] rounded-full bg-gray-400 blur-[200px]' />
      <Image
        src='/images/jbl.png'
        alt='product image'
        width={600}
        height={300}
        className='relative'
      />
    </div>
  </div>
)

export default AddProductSection
