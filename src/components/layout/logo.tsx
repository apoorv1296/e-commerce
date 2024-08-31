import Link from "next/link"

import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
}

const Logo = ({ className }: LogoProps) => (
  <h1>
    <Link
      href='/'
      className={cn("text-2xl font-bold tracking-wide", className)}
    >
      Exclusive
    </Link>
  </h1>
)

export default Logo
