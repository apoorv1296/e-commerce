import Image from "next/image"

export default function OurStory() {
  return (
    <div className='flex items-center justify-between space-x-10 text-justify'>
      <div className='space-y-8'>
        <h3 className='mb-5 text-5xl font-semibold tracking-wider'>
          Our Story
        </h3>
        <p>
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
        </p>

        <p>
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </p>
      </div>

      <Image
        src='/images/Side Image.jpg'
        alt='product image'
        width={700}
        height={600}
      />
    </div>
  )
}
