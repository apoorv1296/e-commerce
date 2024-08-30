"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NavBarList = () => {
  const pathname = usePathname()

  const navigationTabs = [
    { href: "home", label: "Home" },
    { href: "about", label: "About" },
    { href: "signup", label: "SignUp" },
    { href: "contact", label: "Contact" },
  ]

  return (
    <nav>
      <ul className='flex tracking-wider'>
        {navigationTabs.map((tab) => (
          <li
            key={tab.href}
            className={`mx-6 ${pathname === `/${tab.href}` ? "pb-.5 border-b-[1px] border-gray-500 font-medium" : ""}`}
          >
            <Link href={tab.href}>{tab.label} </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBarList
