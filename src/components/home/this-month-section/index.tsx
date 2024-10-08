import { saleProductsList } from "@/components/constants/productList"

import ProductCard from "../product-card"
import SectionHeading from "../section-heading"
import SubSectionHeading from "../subsection-heading"

const ThisMonthSection = () => (
  <div>
    <SectionHeading title='This Month' />
    <SubSectionHeading title='Best Selling Products' />

    <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
      {/* {Array.from({ length: 4 }).map(() => (
        <ProductCard key={Date()} />
      ))} */}
      {saleProductsList.map((productDetais) => (
        <ProductCard key={Date()} productDetais={productDetais} />
      ))}
    </div>
  </div>
)

export default ThisMonthSection
