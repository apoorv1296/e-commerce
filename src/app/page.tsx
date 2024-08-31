import AddProductSection from "@/components/home/add-product-section"
import BactToTop from "@/components/home/back-to-top"
import CategorySection from "@/components/home/category-section"
import HeadCarousel from "@/components/home/head-carousel"
import NewArrivalSection from "@/components/home/new-arrival-section"
import OurProductSection from "@/components/home/our-product-section"
import PerksProvided from "@/components/home/perks-provided-section"
import ThisMonthSection from "@/components/home/this-month-section"
import TodaySaleSection from "@/components/home/today-sale-section"

const Home = () => (
  <div className='px-32'>
    <HeadCarousel />
    <TodaySaleSection />
    <CategorySection />
    <ThisMonthSection />
    <AddProductSection />
    <OurProductSection />
    <NewArrivalSection />
    <PerksProvided />
    <BactToTop />
  </div>
)

export default Home
