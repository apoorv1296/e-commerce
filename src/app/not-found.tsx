import Link from "next/link"

import { Button } from "@/components/ui/button"

const NotFoundPage = () => (
  <div className='flex h-[700px] flex-col items-center justify-center leading-[100px]'>
    <h1 className='text-[110px]'>404 Not Found</h1>
    <p className=''>Your visited page not found. You may go home page.</p>
    <Link href='/'>
      <Button className='h-[56px] w-[254px] bg-[#DB4444]'>
        Go back to Home
      </Button>
    </Link>
  </div>
)

export default NotFoundPage
