// import 
// import React from 'react'
import { FC, useEffect, createContext, useState } from 'react'

// import type
import { CartProviderProps, ProductTypeProps } from '../types'

// upload information from LocalStorage
const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]' )

// function
export const CartContext = createContext({})
export const CartProvider:FC<CartProviderProps> = ({children}) => {
  const [cart, setCart] = useState<ProductTypeProps[]>(cartFromLocalStorage)
  const [itemAmount, setItemAmount] = useState(0)
  const [total, setTotal] = useState(0)

  // function to save information to LocalStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])

 // function to calculate total
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount
    }, 0);
    setTotal(total)
  });

  //update itemAmount
  useEffect(() => {
    if(cart) {
      const amount = cart.reduce ((accumulator, currentItem) => {
        return accumulator + currentItem.amount
      }, 0)
      setItemAmount(amount)
    }
  },[cart]
  )

  //function addToCart
  const addToCart = (product:ProductTypeProps) => {

    const newItem: ProductTypeProps = {... product, amount: 1 }

    // check if the item alredy in the cart
    const cartItem = cart.find((item:ProductTypeProps) => {
      return item.id === product.id;
    })

    if(cartItem) {
      const newCart = [...cart].map((item: ProductTypeProps) => {
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

  // function removeFromCart
  const removeFromCart = (id:number) => {
    const newCart = cart.filter((item) => {
      return item.id !== id
    })
    setCart(newCart)
  }

  // clear cart 
  const clearCart = () => {
    setCart([])
  }

  //increase amount 
  const increaseAmount = (id:number) => {
    const item = cart.find ((item) => item.id === id)
    if(item) {
      addToCart(item)
    }
  }

  //descrease amount
  const decreaseAmount = (id:number) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    })

    if(cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...cartItem, amount: cartItem.amount - 1 }
        } else {
          return item;
        }
      })
      setCart(newCart)

      if (cartItem.amount < 2) {
        removeFromCart(id);
      }
    }
  }

  return (
    <CartContext.Provider
     value={{
      cart, 
      itemAmount,
      total,
      setTotal,
      removeFromCart, 
      clearCart, 
      increaseAmount, 
      decreaseAmount, 
      addToCart,
      setItemAmount}}>
      {children}
    </CartContext.Provider>
  )
}

// minuto 1:08:03 - CartContext