//import 
//import React from 'react'
import { FC } from "react";
import { productType } from "../context/ProductContext"
// type
// type Props = {}
export type CartItemProps = {
  item: productType;  // Ajusta ProductType según tu estructura
  key: number;
}

// function
export const CartItem: FC<CartItemProps> = ({item}) => {
  // destructure item
  const {id, title, image, price, amount} = item
  return (
    <div>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {/* image */}
        <div>
        <img className='max-w-[80px]' src={image} alt='title' />
        </div>
      </div>
    </div>
  )
}


// 57:50 min

