
// import react
import { useContext } from "react";
import { useParams } from "react-router-dom"

// import context
import { productContext, CartContext } from '../../context';

// import type
import { CartItemType, ProductContextType } from '../../types';
import { LayoutDetails } from "..";

// function
export const ProductDetails = () => {
    const { title: productID } = useParams();
    console.log(productID)
    const { products } = useContext(productContext) as ProductContextType
    const { addToCart } = useContext(CartContext) as CartItemType

    //get the single product based on the id
    // si consigo meter aquí title podré hacerlo 
    console.log(products)
    const product = products
        ? products.find(({ title }) => title === productID)
        : null

    //if product is not found
    if (!product) {
        return (
            <section className='h-screen flex justify-center items-center'>Loading...</section>
        )
    }

    // desctructure product
    const { title, price, description, image } = product

    return (
        <LayoutDetails>
            <section className=' px-5 pt-32 pb-12 lg:py-32 h-screen flex items-center'>
                <div className='container mx-auto'>
                {/* image & text wrapper */}
                    <div className='flex flex-col lg:flex-row items-center'>
                    {/* image */}
                        <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
                           <img className='max-w-[200px] lg:max-w-sm' src={image} alt='' />
                        </div>
                        {/* text */}
                        <div className='flex-1 text-center lg:text-left'>
                            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0 '>
                            {title}
                            </h1>
                            <div className='text-xl text-red-500 font-medium mb-6'>
                                $ {price}
                            </div>
                            <p className='mb-4'>{description}</p>
                            <button onClick={() => addToCart(product)} className='bg-black py-4 px-8 text-white mb-6'>Add to cart</button>
                        </div>
                    </div>
                </div>
            </section>
        </LayoutDetails>
    )
}