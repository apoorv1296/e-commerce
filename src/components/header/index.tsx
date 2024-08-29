import Link from "next/link"
import NavBar from "./navbar-list"
import SearchBar from "./searchbar"

const Header = ()=>{

  console.log("check error")

    return (

      <div className=" flex justify-between items-center w-full h-[90px] border-b-2 border-grey px-32">
      <h1><Link href="/" className="text-2xl"> Exclusive</Link></h1>

      <NavBar/>
      <div className="flex">
      <SearchBar/>
      <h6 className="mx-4">hrt</h6>
      <h6>cart</h6>
      </div>
      </div>)
  }
  
  export default Header