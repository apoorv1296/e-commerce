import { Button } from "../../ui/button"
import ProductCard from "../product-card"
import SectionHeading from "../section-heading"
import SubSectionHeading from "../subsection-heading"

const TodaySaleSection = () => (
  <>
    <div className='h-[500px]'>
      <SectionHeading title="Today's" />
      <SubSectionHeading title='Flash Sales' />
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {Array.from({ length: 4 }).map(() => (
          <ProductCard key={Date()} />
        ))}
      </div>
    </div>
    <div className='mb-16 flex justify-center'>
      <Button className='h-[56px] w-[234px] rounded bg-[#DB4444]'>
        View All Products
      </Button>
    </div>
  </>
)

export default TodaySaleSection
