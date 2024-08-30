import FacebookIcon from "@/components/icons/facebookIcon"
import InstaIcon from "@/components/icons/instaIcon"
import LinkdinIcon from "@/components/icons/linkdinIcon"
import SendArrowIcon from "@/components/icons/sendarrowIcon"
import TwitterIcon from "@/components/icons/twitterIcon"
import { Button } from "@/components/ui/button"

import Logo from "../logo"

const Footer = () => (
  <footer className='flex h-[380px] w-full justify-between bg-black px-32 pt-20 text-white'>
    <div className='leading-9'>
      <Logo />
      <h3 className='my-5 text-xl'>Subscribe</h3>
      <h3>Subscribe</h3>
      <h3>Get 10% off your first order</h3>

      <Button
        variant='outline'
        className='flex w-[200px] justify-between bg-black text-gray-500'
      >
        Enter your email
        <SendArrowIcon />
      </Button>
    </div>

    <div className='leading-9'>
      <h3 className='mb-5 text-xl'>Support</h3>
      <h3 className='mb-2 max-w-[180px] leading-5'>
        111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
      </h3>
      <h3>exclusive@gmail.com</h3>
      <h3>+88015-88888-9999</h3>
    </div>

    <div className='leading-9'>
      <h3 className='mb-5 text-xl'>Account</h3>
      <h3>My Account</h3>
      <h3>Login / Register</h3>
      <h3>Cart</h3>
      <h3>Wishlist</h3>
      <h3>Shop</h3>
    </div>

    <div className='leading-9'>
      <h3 className='mb-5 text-xl'>Quick Link</h3>
      <h3>Privacy Policy</h3>
      <h3>Terms Of Use</h3>
      <h3>FAQ</h3>
      <h3>Contact</h3>
    </div>

    <div className='leading-9'>
      <h3 className='mb-5 text-xl'>Download App</h3>
      <h3 className='text-xs'>Save $3 with App New User Only</h3>
      <div className='my-3 h-[80px] w-[200px] border' />
      <div className='mx-4 flex space-x-8'>
        <FacebookIcon />
        <TwitterIcon />
        <InstaIcon />
        <LinkdinIcon />
      </div>
    </div>
  </footer>
)

export default Footer
