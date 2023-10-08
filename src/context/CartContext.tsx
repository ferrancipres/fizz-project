// import 
// import React from 'react'
import { FC } from "react"
import { CartProviderProps } from "../types/CartProviderProps"
import { createContext } from "react"
import { useState } from "react"
import { ProductType } from "../components/Product"


// function
export const CartContext = createContext({})
export const CartProvider:FC<CartProviderProps> = ({children}) => {
  const [cart, setCart] = useState<ProductType[]>([])
  const addToCart = (product:ProductType) => {

    const newItem: ProductType = {... product, amount: 1 }

    // check if the item alredy in the cart
    const cartItem = cart.find((item:ProductType) => {
      return item.id === product.id;
    })

    if(cartItem) {
      const newCart = [...cart].map((item: ProductType) => {
        if(item.id === product.id) {
          return {...item, amount: item.amount + 1 }
        }else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem]) 
    }
  }

  return (
    <CartContext.Provider value={{cart, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}