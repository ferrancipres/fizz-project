// import 
// import React from 'react'
import { SidebarContext } from "../context/SidebarContext"

// import icons
import {IoMdArrowForward} from 'react-icons/io'


// import context
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { SidebarContextType } from "../types/SidebarContextType"
import { productType } from "../context/ProductContext"
import { CartItem } from "../components/CartItem"


// Define un tipo para el carrito
export type CartContextType = {
  cart: productType[];
}
// type Props = {}

// function
export const Sidebar = () => {
  const {cart} = useContext(CartContext) as CartContextType
  const { isOpen, setIsOpen } = useContext(SidebarContext) as SidebarContextType

  return (
    <header className='bg-pink-200'>
      <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
        <div className='flex items-center justify-between py-6 border-b'>
          <div className='uppercase text-sm font-semibold'>Shopping Bag(0)</div>
          {/* icons */}
          <div onClick={() => setIsOpen(false)} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
            <IoMdArrowForward className='text-2xl' />
          </div>
        </div>
        <div>
          {cart.map((item) => {
          return <CartItem item={item} key={item.id} />
        })}
        </div>
      </div>
    </header>
  )
}

