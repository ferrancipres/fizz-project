
import { FC, useEffect, createContext, useState } from 'react'

import { CartProviderProps, ProductTypeProps } from '../types'

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]' )

export const CartContext = createContext({})
export const CartProvider:FC<CartProviderProps> = ({children}) => {
  const [cart, setCart] = useState<ProductTypeProps[]>(cartFromLocalStorage)
  const [itemAmount, setItemAmount] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount
    }, 0)
    setTotal(total)
  },)

  useEffect(() => {
    if(cart) {
      const amount = cart.reduce ((accumulator, currentItem) => {
        return accumulator + currentItem.amount
      }, 0)
      setItemAmount(amount)
    }
  },[cart])

  const addToCart = (product:ProductTypeProps) => {

    const newItem: ProductTypeProps = {... product, amount: 1 }
    const cartItem = cart.find((item:ProductTypeProps) => {
      return item.id === product.id
    })

    if(cartItem) {
      const newCart = [...cart].map((item: ProductTypeProps) => {
        if(item.id === product.id) {
          return {...item, amount: item.amount + 1 }
        }
          return item
      })
      setCart(newCart)
    } 
    
    if(!cartItem) {
      setCart([...cart, newItem]) 
    }
  }

  const removeFromCart = (id:number) => {
    const newCart = cart.filter((item) => {
      return item.id !== id
    })
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const increaseAmount = (id:number) => {
    const item = cart.find ((item) => item.id === id)
    if(item) {
      addToCart(item)
    }
  }

  const decreaseAmount = (id:number) => {
    const cartItem = cart.find((item) => {
      return item.id === id
    })

    if(cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...cartItem, amount: cartItem.amount - 1 }
        } else {
          return item
        }
      })
      setCart(newCart)

      if (cartItem.amount < 2) {
        removeFromCart(id)
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
