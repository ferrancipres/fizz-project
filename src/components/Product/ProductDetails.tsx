
import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'

import { productContext, CartContext } from '../../context'

import { IoMdArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

import { CartItemType, ProductContextType } from '../../types'
import { LayoutDetails } from '..'
import { Accordion } from '../Accordion/Accordion'

export const ProductDetails = () => {
    const { title: productID } = useParams()

    const { products } = useContext(productContext) as ProductContextType
    const { addToCart } = useContext(CartContext) as CartItemType

    const product = products
        ? products.find(({ title }) => title === productID)
        : null

    if (!product) {
        return (
            <section className='h-screen flex justify-center items-center'>Loading...</section>
        )
    }
    
    const { title, price, description, image, imagenback1, imagenback2, category } = product

    const [images] = useState({
        image,
        imagenback1,
        imagenback2
    })

    const [activeImg, setActiveImg] = useState(images.image)

    return (
        <LayoutDetails>
            <div>
                <div className='mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center p-5'>
                    <div className=' grid grid-cols-2'>
                        <div className='mt-20 2xl:mx-[450px] w-20 h-20'>
                            <img src={imagenback1} alt='' className='w-20 h-20 mb-1 rounded-md cursor-pointer' onClick={() => setActiveImg(imagenback1)} />
                            < img src={imagenback2} alt='' className='w-20 h-20 mb-1 rounded-md cursor-pointer' onClick={() => setActiveImg(imagenback2)} />
                            <img src={image} alt='' className=' w-20 h-20 rounded-md cursor-pointer' onClick={() => setActiveImg(image)} />
                        </div>
                        <div>
                            <img src={activeImg} alt='' className='mt-14 mb-5 w-80 h-50 -mx-16 ' />
                        </div>
                    </div>
                    <div className='mt-36'>
                        <span className='bg-black text-white rounded px-12 font-semibold'>{category}</span>
                        <h2 className='text-3xl font-bold'>{title}</h2>
                        <p className='text-gray-600 '>{description}</p>
                        <h6 className='mt-5 text-xl font-semibold'>$ {parseFloat(price).toFixed(2)}</h6> 
                        <div className='flex items-center'>
                            <button onClick={() => addToCart(product)} className='mt-5 bg-black py-4 px-8 text-white mb-6'>Add to cart</button>
                            <Link to='/'>
                                <button className='mx-2 bg-white py-6 px-8 text-black mb-6 mt-4'><IoMdArrowForward className='text-2xl rotate-180' />Back</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <Accordion />
                </div>
            </div>
        </LayoutDetails>
    )
}
