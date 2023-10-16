// import React from 'react'
import { FC, useContext } from 'react'
import { CartContext } from '../../context'
import { CartItemType } from '../../types'
import { ProductTypeProps } from '../../types'
import { CheckoutItem } from './CheckoutItem'
import { IoMdArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { CheckoutForm } from './CheckoutForm'

export const CheckoutDetails: FC = () => {
  const { cart, itemAmount } = useContext(CartContext) as CartItemType

  return (
    <>
        <div className='flex items-center justify-between p-6 border-b'>
          <div className='uppercase text-sm font-bold'>Checkout page({itemAmount})</div>
            <Link to='/'>
              <IoMdArrowForward className='text-2xl' />
            </Link>
        </div>

      <div className='flex flex-col p-3 lg:h-[500px] overflow-y-auto'>
          {cart && cart.map((item: ProductTypeProps) => {
            return <CheckoutItem item={item} key={item.id} />
          })}
        </div>
        <CheckoutForm />

        
    </>
  )
}

