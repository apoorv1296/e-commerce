import PerksProvided from "@/components/common/perks-provided-section"
import AddProductSection from "@/components/home/add-product-section"
import BactToTop from "@/components/home/back-to-top"
import CategorySection from "@/components/home/category-section"
import NewArrivalSection from "@/components/home/new-arrival-section"
import OurProductSection from "@/components/home/our-product-section"
import Slider from "@/components/home/slider"
import ThisMonthSection from "@/components/home/this-month-section"
import TodaySaleSection from "@/components/home/today-sale-section"

const Home = () => (
  <div className='my-9 space-y-24 px-32'>
    <Slider />
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
