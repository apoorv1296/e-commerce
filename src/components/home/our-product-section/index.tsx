import { saleProductsList } from "@/components/constants/productList"

import { Button } from "../../ui/button"
import ProductCard from "../product-card"
import SectionHeading from "../section-heading"
import SubSectionHeading from "../subsection-heading"

const OurProductSection = () => (
  <>
    <div className=''>
      <SectionHeading title='Our Products' />
      <SubSectionHeading title='Explore Our Products' />
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {saleProductsList.map((productDetais) => (
          <ProductCard key={Date()} productDetais={productDetais} />
        ))}
      </div>
    </div>
    <div className='mt-16 flex justify-center'>
      <Button className='h-[56px] w-[234px] rounded bg-[#DB4444]'>
        View All Products
      </Button>
    </div>
  </>
)

export default OurProductSection
