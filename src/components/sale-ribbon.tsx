import Link from "next/link"

const SaleRibbon = () => {
    return (
        <div className="flex h-[50px] w-full items-center justify-center bg-black">
            <h6 className="text-sm text-white">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
            </h6>
            <Link href="/">
                
                <h6 className="text-sm text-white ml-2">Shop Now</h6>
            </Link>
        </div>
    )
}

export default SaleRibbon
