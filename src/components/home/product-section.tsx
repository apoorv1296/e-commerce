import ProductCard from "./product-card"
import { Button } from "../ui/button"

const ProductSection = () => (
  <>
    <div className='h-[500px]'>
      <div className='flex items-center'>
        <div className='mr-3 h-10 w-5 rounded bg-[#DB4444]' />
        <p className='font-medium tracking-wide text-[#DB4444]'>Today&apos;s</p>
      </div>

      <h1 className='my-6 text-3xl font-bold'>Flash Sales</h1>

      {/* <ProductCard /> */}

      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5'>
        {Array.from({ length: 5 }).map(() => (
          <ProductCard key={Date()} />
        ))}
      </div>
    </div>
    <div className='mb-16 flex justify-center'>
      <Button className='h-[56px] w-[234px] rounded bg-[#DB4444]'>
        View All Products
      </Button>
    </div>
  </>
)

export default ProductSection
