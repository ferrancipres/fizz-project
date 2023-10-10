// import react
import {useContext} from 'react'

// import product context
import { productContext } from '../../context'

// import components
import { Product, Hero } from '../../components'

// import type
import { ProductTypeProps, ProductContextType } from '../../types'

// function
export const Home = () => {
const { products} = useContext(productContext) as ProductContextType
const filteredProducts = products.filter((item:ProductTypeProps)  => {
  return (
    item.category === "men's clothing" || item.category === "women's clothing"
  );
})

  return (
      <div>
        <Hero />
        <section className='py-16'>
          <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 '>
              {filteredProducts.map ((product: ProductTypeProps) => {
                return <Product product={product} key={product.id} />
              })}
            </div>
          </div>
        </section>
      </div>    
  )
}