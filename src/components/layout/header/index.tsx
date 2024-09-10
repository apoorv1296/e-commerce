import NavBar from "./navbar-list"
import Profile from "./profile"
import SearchBar from "./searchbar"
import HeartIcon from "../../icons/heartIcon"
import CartDetails from "../cart-details"
import Logo from "../logo"

const Header = () => (
  <div className='border-grey flex h-[90px] w-full items-center justify-between border-b-2 px-32'>
    <Logo />

    <NavBar />
    <div className='flex items-center justify-between space-x-5'>
      <SearchBar />
      <HeartIcon />
      <CartDetails />
      <Profile />
    </div>
  </div>
)

export default Header
