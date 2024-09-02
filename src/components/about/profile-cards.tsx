import { Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

interface ProfileCardProps {
  name: string
  title: string
}

const ProfileCard = (props: ProfileCardProps) => {
  const { name, title } = props
  return (
    <div className='w-[370px] border'>
      <Image
        className='h-[430px] w-full object-cover'
        src='/images/Side Image.jpg'
        alt={`${name}'s profile`}
        width={100}
        height={100}
      />
      <div className=''>
        <div className='mb-2 mt-8 text-3xl font-bold tracking-wider'>
          {name}
        </div>
        <p className='text-base text-gray-700'>{title}</p>
      </div>
      <div className='mt-4 flex space-x-4'>
        <Twitter />
        <Instagram />
        <Linkedin />
      </div>
    </div>
  )
}

const ProfileCards = () => {
  const profiles = [
    {
      name: "Tom Cruise",
      title: "Founder & Chairman",
    },
    {
      name: "Emma Watson",
      title: "Managing Director",
    },
    {
      name: "Will Smith",
      title: "Product Designer",
    },
  ]

  return (
    <div className='flex justify-between'>
      {profiles.map((profile) => (
        <ProfileCard key={Date()} {...profile} />
      ))}
    </div>
  )
}

export default ProfileCards
