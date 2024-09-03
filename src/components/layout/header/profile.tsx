"use client"

import { UserRound } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

const Profile = () => {
  const router = useRouter()

  const handleProfileClick = () => {
    router.push("/account")
  }

  return (
    <Button
      onClick={handleProfileClick}
      variant='ghost'
      className='h-8 w-8 rounded-full p-0 hover:bg-[#DB4444] hover:text-white'
    >
      <UserRound />
    </Button>
  )
}

export default Profile
