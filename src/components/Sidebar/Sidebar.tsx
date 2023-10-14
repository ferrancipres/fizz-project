// import 
// import context
import { SidebarContext, CartContext } from '../../context'

// import type
import { SidebarContextType, ProductTypeProps, CartItemType } from "../../types";

// import react
import { useContext} from "react"
import { Link } from "react-router-dom";

// import icon
import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'

// import components
import { CartItem} from '../../components'

// function
export const Sidebar = () => {
  const { cart, clearCart, total, itemAmount } = useContext(CartContext) as CartItemType
  const { isOpen, setIsOpen } = useContext(SidebarContext) as SidebarContextType

  return (
      <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
        <div className='flex items-center justify-between py-6 border-b'>
          <div className='uppercase text-sm font-bold'>Shopping Bag({itemAmount})</div>
          {/* icons */}
          <div onClick={() => setIsOpen(false)} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
            <IoMdArrowForward className='text-2xl' />
          </div>
        </div>
        {/* // No funciona el overflow-yaitp */}
        <div className='flex flex-col gap-y-2 h-[350px] lg:h-[900px] overflow-y-auto overflow-x-hidden border-b'>
        {cart&&cart.map((item: ProductTypeProps) => {
          return <CartItem item={item} key={item.id} />
          })}
        </div>
        <div className='flex  flex-col gap-y-3 py-4 mt-4 justify-between'>
          <div className='flex w-full justify-between items-center'>
            {/* total */}
            <div className='upppercase font-semibold'>
              <span className='mr-2 uppercase'>Total:</span>
            $ {parseFloat((total).toString()).toFixed(2)}
            </div>
          </div>

        <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white flex p-4 justify-center items-center w-full font-medium'>
          Clear cart  <FiTrash2 className='text-xl' />
        </div>

        <Link to={'/checkout'}>
          <button
            className='bg-black text-white flex p-4 justify-center items-center w-full font-medium'>Checkout</button>
        </Link>
        </div>
      </div>
  )
}

