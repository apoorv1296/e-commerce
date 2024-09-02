import DeliveryIcon from "@/components/icons/deliveryIcon"
import GuarentyIcon from "@/components/icons/guarentyIcon"
import HeadphoneIcon from "@/components/icons/headphoneIcon"

type StatsCardProps = {
  icon: React.ReactNode
  title: string
  description: string
}

const StatsCard = ({ icon, title, description }: StatsCardProps) => (
  <div className='flex h-[230px] w-[270px] flex-col items-center justify-center space-y-2 rounded border'>
    <div className='flex h-[80px] w-[80px] items-center justify-center rounded-full border-8 bg-black'>
      {icon}
    </div>
    <h3 className='text-xl font-semibold'>{title}</h3>
    <h3 className='text-center text-sm'>{description}</h3>
  </div>
)

const StatsDetails = () => (
  <div className='flex space-x-8'>
    <StatsCard
      icon={<DeliveryIcon />}
      title='10.5k '
      description='Sallers active our site'
    />
    <StatsCard
      icon={<HeadphoneIcon />}
      title='33k'
      description='Mopnthly Produduct Sale'
    />
    <StatsCard
      icon={<GuarentyIcon />}
      title='45.5k'
      description='Customer active in our site'
    />
    <StatsCard
      icon={<GuarentyIcon />}
      title='25k'
      description='Anual gross sale in our site'
    />
  </div>
)

export default StatsDetails
