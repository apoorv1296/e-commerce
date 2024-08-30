import Link from "next/link"

import NavBar from "./navbar-list"
import SearchBar from "./searchbar"
import CartIcon from "../icons/cartIcon"
import HeartIcon from "../icons/heartIcon"

const Header = () => (
  <div className='border-grey flex h-[90px] w-full items-center justify-between border-b-2 px-32'>
    <h1>
      <Link href='/' className='text-2xl font-bold tracking-wide'>
        Exclusive
      </Link>
    </h1>

    <NavBar />
    <div className='flex items-center justify-between space-x-5'>
      <SearchBar />
      <HeartIcon />
      <CartIcon />
    </div>
  </div>
)

export default Header
