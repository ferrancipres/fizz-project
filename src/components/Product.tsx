// import 
import { Link } from "react-router-dom"
import {BsPlus, BsEyeFill} from 'react-icons/bs'
import { CartContext } from "../context/CartContext"
import {useContext } from "react"
import { CartContextType } from "../context/CartContext"

export interface ProductType {
  id: number;
  image: string;
  category: string;
  title: string;
  price: number;
  amount: number;
}

// function
// pendiente problema tipado
export const Product = ({product}: {product: ProductType}) => {

  //destructure product
  const {id, image, category, title, price} = product
  const {addToCart} = useContext(CartContext) as CartContextType

  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* image */}
          <div className='w-[200px] max-auto flex justify-center items-center'>
            <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt={title} />
          </div>
        </div>
        {/* button */}
        <div className='absolute top-6 right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
          <button onClick={() => addToCart(product)}>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
              <BsPlus className='text-3xl' />
            </div>  
          </button>
          <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-black drop-shadow-xl'>
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* Category & Title & Price */}
      <div>
        <div className='text-sm capitalize text-gray-500'>{category}</div>
        <Link to={`/product/${id}`}>
          <h3 className='font-bold mb-1'>{title}</h3>
        </Link>
        <div className='font-semibold'>{price}€</div>
      </div>
    </div>
  )
}
