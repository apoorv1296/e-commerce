import Image from "next/image"

import SectionHeading from "../section-heading"
import SubSectionHeading from "../subsection-heading"

const NewArrivalSection = () => (
  <div className=''>
    <SectionHeading title='Featured' />
    <SubSectionHeading title='New Arrival' />

    <div className='h-[570px] border'>
      <div className='grid h-[570px] grid-flow-col grid-rows-4 gap-4'>
        <div className='... relative col-span-2 row-span-4'>
          <Image
            src='/images/p1.jpg'
            alt='product image'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='... relative col-span-2 row-span-2'>
          <Image
            src='/images/p2.jpg'
            alt='product image'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='... relative col-span-1 row-span-2'>
          <Image
            src='/images/p3.jpg'
            alt='product image'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='... relative col-span-1 row-span-2'>
          <Image
            src='/images/p4.jpg'
            alt='product image'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  </div>
)

export default NewArrivalSection
