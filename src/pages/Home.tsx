// import context
import {useContext} from 'react'

// import product context
import { productContext } from '../context/ProductContext'

// import components
import { Product } from '../components/Product'
import { productContextType } from '../context/ProductContext'


// function
export const Home = () => {
//useContext Products
// Pendiente de revisar
const { products} = useContext(productContext) as productContextType
console.log(products)
// get only men's & women clothes
// revisar type item
const filteredProducts = products.filter((item)  => {
  return (
    item.category === "men's clothing" || item.category === "women's clothing"
  );
})

  return (
      <div>
        <section className='py-16'>
          <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 '>
              {/* // Revisar type product */}
              {filteredProducts.map ((product) => {
                return <Product product={product} key={product.id} />
              })}
            </div>
          </div>
        </section>
      </div>    
  )
}