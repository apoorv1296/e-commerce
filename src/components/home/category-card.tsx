import PhoneIcon from "@/components/icons/phoneIcon"

const CategoryCard = () => (
  <div className='border-1 flex h-[145px] w-[170px] flex-col items-center justify-center rounded border border-gray-400 transition-colors duration-200 hover:bg-[#DB4444] hover:text-white'>
    <PhoneIcon />
    <h3 className='mt-5'>Phones</h3>
  </div>
)

export default CategoryCard
