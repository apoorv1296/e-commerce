"use client"

import { useEffect, useState } from "react"

import { usePathname, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { Product } from "../constants/productList"
import CartIcon from "../icons/cartIcon"

export default function CartDetails() {
  const router = useRouter()

  const pathName = usePathname()
  const [cartItemsCount, setCartItemsCount] = useState(0)

  useEffect(() => {
    const updateCartCount = () => {
      const existingCart = JSON.parse(
        localStorage.getItem("cart") || "[]",
      ) as Product[]
      setCartItemsCount(existingCart.length)
    }

    if (typeof window !== "undefined") {
      updateCartCount()
      window.addEventListener("cartUpdated", updateCartCount)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("cartUpdated", updateCartCount)
      }
    }
  }, [])

  const handleRouteToCart = () => {
    router.push("/cart")
  }

  const isActive = pathName === "/cart"

  return (
    <Button
      onClick={handleRouteToCart}
      variant='ghost'
      className='group relative h-fit bg-transparent p-0 hover:bg-transparent'
    >
      <CartIcon
        className={cn(
          "group-hover:vibrate",
          isActive ? "text-subTitle" : "text-black",
        )}
      />
      {cartItemsCount > 0 && (
        <span className='absolute right-0 top-0 inline-flex -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-red-600 px-2 py-1 text-xs font-bold leading-none text-red-100'>
          {cartItemsCount}
        </span>
      )}
    </Button>
  )
}
