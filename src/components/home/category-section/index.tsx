import CategoryCard from "../category-card"
import SectionHeading from "../section-heading"
import SubSectionHeading from "../subsection-heading"

const CategorySection = () => (
  <div className='border-b-[1px] border-t-[1px] py-20'>
    <div>
      <SectionHeading title='Category' />
      <SubSectionHeading title='Browse By Category' />

      <div className='mt-8 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6'>
        {Array.from({ length: 6 }).map(() => (
          <CategoryCard key={Date()} />
        ))}
      </div>
    </div>
  </div>
)

export default CategorySection
