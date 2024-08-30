import Link from "next/link"

import { cn } from "@/lib/utils"

// eslint-disable-next-line react/prop-types
const Logo = ({ className = "" }) => (
  <h1>
    {/* <Link href='/' className='text-2xl font-bold tracking-wide'> */}
    <Link
      href='/'
      className={cn("text-2xl font-bold tracking-wide", className)}
    >
      Exclusive
    </Link>
  </h1>
)

export default Logo
