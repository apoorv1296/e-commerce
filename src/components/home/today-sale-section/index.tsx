import { Button } from "../../ui/button"
import Countdown from "../countdown"
import ProductCard from "../product-card"
import SectionHeading from "../section-heading"
import SubSectionHeading from "../subsection-heading"

const TodaySaleSection = () => (
  <>
    <div>
      <SectionHeading title="Today's" />
      <div className='my-6 flex items-center space-x-16'>
        <SubSectionHeading title='Flash Sales' className='my-0' />
        <Countdown />
      </div>

      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {Array.from({ length: 4 }).map(() => (
          <ProductCard key={Date()} />
        ))}
      </div>
    </div>
    <div className='flex justify-center'>
      <Button className='mt-6 h-[56px] w-[234px] rounded bg-[#DB4444]'>
        View All Products
      </Button>
    </div>
  </>
)

export default TodaySaleSection
