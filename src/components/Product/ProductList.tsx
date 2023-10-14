
// import react
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {BsPlus, BsEyeFill} from 'react-icons/bs'

// import context
import { CartContext } from '../../context'

// import type
import { CartItemType, ProductTypeProps } from '../../types'

// function
export const ProductList = ({product}: {product: ProductTypeProps}) => {
  console.log({product})
  const {image, category, title, price} = product
  const {addToCart} = useContext(CartContext) as CartItemType

  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* image */}
          <div className='w-[200px] max-auto flex justify-center items-center'>
            <Link to={`/product/${title}`}>
              <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt={title} />
            </Link>
          </div>
        </div>
        {/* button */}
        <div className='absolute top-6 right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
          <button onClick={() => addToCart(product)}>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
              <BsPlus className='text-3xl' />
            </div>  
          </button>
          <Link to={`/product/${title}`} className='w-12 h-12 bg-white flex justify-center items-center text-black drop-shadow-xl'>
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* Category & Title & Price */}
      <div>
        <div className='text-sm capitalize text-gray-500'>{category}</div>
        <Link to={`/product/${title}`}>
          <h3 className='font-medium mb-1'>{title}</h3>
        </Link>
        <div className='font-semibold'>{parseFloat((price).toString()).toFixed(2)}€</div>
      </div>
    </div>
  )
}
