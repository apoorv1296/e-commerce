import ProductCard from "../product-card"
import SectionHeading from "../section-heading"
import SubSectionHeading from "../subsection-heading"

const ThisMonthSection = () => (
  <div className='mb-[140px] mt-[70px] h-[518px]'>
    <SectionHeading title='This Month' />
    <SubSectionHeading title='Best Selling Products' />

    <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
      {Array.from({ length: 4 }).map(() => (
        <ProductCard key={Date()} />
      ))}
    </div>
  </div>
)

export default ThisMonthSection
