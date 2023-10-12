// import React from 'react'
import { FC, useContext} from "react"
import { CartContext } from "../../context"
import { CartItemType } from "../../types"
import { ProductTypeProps } from "../../types"
import { CartItem } from "../../components"
import { CheckoutItem } from "../../components/CheckoutItem/CheckoutItem"

export const Checkout:FC = () => {
  const { cart, clearCart, total, itemAmount } = useContext(CartContext) as CartItemType

  return (
    <>
      <div className='flex flex-col gap-y-2 h-[350px] lg:h-[900px] overflow-y-auto overflow-x-hidden border-b'>
        {cart && cart.map((item: ProductTypeProps) => {
          return <CheckoutItem item={item} key={item.id} />
        })}
      </div>
    </>
  )
}

// crear componente CartItemCheckout...y pasarle todo igual menos los campos
// que no me iteresan..despues del '.map'