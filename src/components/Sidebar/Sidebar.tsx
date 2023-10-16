
import { SidebarContext, CartContext } from '../../context'

import { SidebarContextType, ProductTypeProps, CartItemType } from "../../types";
import { GoAlert } from 'react-icons/go'

import { useContext} from "react"
import { Link } from "react-router-dom";

import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'

import { CartItem} from '../../components'


export const Sidebar = () => {
  const { cart, clearCart, total, itemAmount } = useContext(CartContext) as CartItemType
  const { isOpen, setIsOpen } = useContext(SidebarContext) as SidebarContextType

  return (
      <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
        <div className='flex items-center justify-between py-6 border-b'>
          <div className='uppercase text-sm font-bold'>Shopping Bag({itemAmount})</div>

          <div onClick={() => setIsOpen(false)} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
            <IoMdArrowForward className='text-2xl' />
          </div>
        </div>
        
      <div className='flex flex-col gap-y-2 h-[800px] overflow-x-hidden border-b md:h-[800px] lg:h-[800px]'>
        {cart&&cart.map((item: ProductTypeProps) => {
          console.log(item)
          return <CartItem item={item} key={item.id} />
          })}
        </div>
        <div className='flex  flex-col gap-y-3 py-4 mt-4 justify-between'>
          <div className='flex w-full justify-between items-center'>

            <div className='upppercase font-semibold'>
              <span className='mr-2 uppercase'>Total:</span>
            $ {parseFloat((total).toString()).toFixed(2)}
            </div>
          </div>

        <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white flex p-4 justify-center items-center w-full font-medium'>
          Clear cart  <FiTrash2 className='text-xl' />
        </div>
        
        {cart.length === 0 && 
          <Link to={'/'}>
            <button
            className='bg-yellow-600 text-white flex p-4 justify-center items-center w-full font-medium'>
            <GoAlert /> Cart empty <GoAlert />
          </button>
          </Link>
        }
        
        {cart.length > 0 && 
          <Link to={'/checkout'}>
            <button
              className='bg-black text-white flex p-4 justify-center items-center w-full font-medium'>
                Checkout
              </button>
          </Link>
        }

        </div>
      </div>
  )
}

