import Image from "next/image"

import ProfileCards from "./profile-cards"
import StatsDetails from "./stats"
import PerksProvided from "../common/perks-provided-section"

export default function OurStory() {
  return (
    <>
      <div className='flex items-center justify-between'>
        <div className=''>
          <h3>Our Story</h3>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>

          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>

        <Image
          src='/images/Side Image.jpg'
          alt='product image'
          width={700}
          height={600}
        />
      </div>
      <StatsDetails />
      <ProfileCards />
      <PerksProvided />
    </>
  )
}
