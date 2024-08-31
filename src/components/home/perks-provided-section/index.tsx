// import DeliveryIcon from "@/components/icons/deliveryIcon"
// import GuarentyIcon from "@/components/icons/guarentyIcon"
// import HeadphoneIcon from "@/components/icons/headphoneIcon"

// const PerksProvided = () => (
//   <div className='my-[140px] flex h-[161px] justify-around'>
//     <div className='flex flex-col items-center justify-center space-y-2'>
//       <div className='flex h-[80px] w-[80px] items-center justify-center rounded-full border-8 bg-black'>
//         <DeliveryIcon />
//       </div>
//       <h3 className='text-xl font-semibold'>FREE AND FAST DELIVERY</h3>

//       <h3 className='text-sm'>Free delivery for all orders over $140</h3>
//     </div>

//     <div className='flex flex-col items-center justify-center space-y-2'>
//       <div className='flex h-[80px] w-[80px] items-center justify-center rounded-full border-8 bg-black'>
//         <HeadphoneIcon />
//       </div>
//       <h3 className='text-xl font-semibold'>24/7 CUSTOMER SERVICE</h3>

//       <h3 className='text-sm'>Friendly 24/7 customer support</h3>
//     </div>

//     <div className='flex flex-col items-center justify-center space-y-2'>
//       <div className='flex h-[80px] w-[80px] items-center justify-center rounded-full border-8 bg-black'>
//         <GuarentyIcon />
//       </div>
//       <h3 className='text-xl font-semibold'>MONEY BACK GUARANTEE</h3>

//       <h3 className='text-sm'>We return money within 30 days</h3>
//     </div>
//   </div>
// )

// export default PerksProvided

import DeliveryIcon from "@/components/icons/deliveryIcon"
import GuarentyIcon from "@/components/icons/guarentyIcon"
import HeadphoneIcon from "@/components/icons/headphoneIcon"

type PerkProps = {
  icon: React.ReactNode
  title: string
  description: string
}

const Perk = ({ icon, title, description }: PerkProps) => (
  <div className='flex flex-col items-center justify-center space-y-2'>
    <div className='flex h-[80px] w-[80px] items-center justify-center rounded-full border-8 bg-black'>
      {icon}
    </div>
    <h3 className='text-xl font-semibold'>{title}</h3>
    <h3 className='text-center text-sm'>{description}</h3>
  </div>
)

const PerksProvided = () => (
  <div className='my-[140px] flex h-[161px] justify-around'>
    <Perk
      icon={<DeliveryIcon />}
      title='FREE AND FAST DELIVERY'
      description='Free delivery for all orders over $140'
    />
    <Perk
      icon={<HeadphoneIcon />}
      title='24/7 CUSTOMER SERVICE'
      description='Friendly 24/7 customer support'
    />
    <Perk
      icon={<GuarentyIcon />}
      title='MONEY BACK GUARANTEE'
      description='We return money within 30 days'
    />
  </div>
)

export default PerksProvided
