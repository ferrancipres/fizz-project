// import 
// import React from 'react'
import { SidebarContext } from "../context/SidebarContext"

// import icons
import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'


// import context
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { SidebarContextType } from "../types/SidebarContextType"
import { CartItem } from "../components/CartItem"
import { CartContextType } from "../components/CartItem"

// type Props = {}

// function
export const Sidebar = () => {
  const { cart, clearCart, total } = useContext(CartContext) as CartContextType
  const { isOpen, setIsOpen } = useContext(SidebarContext) as SidebarContextType


  return (
      <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
        <div className='flex items-center justify-between py-6 border-b'>
          <div className='uppercase text-sm font-semibold'>Shopping Bag(0)</div>
          {/* icons */}
          <div onClick={() => setIsOpen(false)} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
            <IoMdArrowForward className='text-2xl' />
          </div>
        </div>
        {/* // No funciona el overflow-yaitp */}
        <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>
          {cart.map((item) => {
          return <CartItem item={item} key={item.id} />
          })}
        </div>
        <div className='flex  flex-col gap-y-3 py-4 mt-4  justify-between'>
          <div className='flex w-full justify-between items-center'>
            {/* total */}
            <div className='upppercase font-semibold'>
              <span className='mr-2 uppercase'>Total:</span>
            $ {parseFloat((total).toString()).toFixed(2)}
            </div>
          
            {/* clear cart */}
            <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
              <FiTrash2 />
            </div>
          </div>
        </div>
      </div>
  )
}

