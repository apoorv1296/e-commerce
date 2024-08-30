import Image from "next/image"

import EyeIcon from "../icons/eyeIcon"
import HeartIcon from "../icons/heartIcon"

const ProductCard = () => (
  <div className='mr-8 h-[350px] w-[270px]'>
    <div className='relative flex h-[250px] w-full items-center justify-center overflow-hidden rounded bg-[#F5F5F5]'>
      <div className='absolute left-2 top-2 flex h-[26px] w-[55px] justify-center rounded bg-[#DB4444] tracking-wider text-white'>
        -40%
      </div>

      <div className='absolute right-2 top-2 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white'>
        <HeartIcon />
      </div>

      <div className='absolute right-2 top-12 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white'>
        <EyeIcon />
      </div>

      <Image
        src='/images/productimg.png'
        alt='product image'
        // layout='fill'
        // objectFit='cover'
        width={200}
        height={200}
      />
    </div>

    <div className='space-y-2'>
      <h3 className='mt-2 font-medium'>HAVIT HV-G92 Gamepad</h3>
      <span className='font-medium text-red-500'>$120</span>
      <span className='mx-3 font-medium text-gray-500 line-through'>$160</span>

      <h3 className='text-sm'>(88)</h3>
    </div>
  </div>
)

export default ProductCard
