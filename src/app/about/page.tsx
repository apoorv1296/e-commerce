import OurStory from "@/components/about/our-story"
import ProfileCards from "@/components/about/profile-cards"
import StatsDetails from "@/components/about/stats"
import PerksProvided from "@/components/common/perks-provided-section"

const About = () => (
  <div className='my-20 space-y-36 px-32'>
    <OurStory />
    <StatsDetails />
    <ProfileCards />
    <PerksProvided />
  </div>
)

export default About
