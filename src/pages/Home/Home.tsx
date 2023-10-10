// import react
import {useContext} from 'react'

// import product context
import { productContext } from '../../context'

// import components
import { ProductList, Layout, Hero } from '../../components'

// import type
import { ProductTypeProps, ProductContextType } from '../../types'
import { useSearchParams } from 'react-router-dom'

// function
export const Home = () => {
  const { products} = useContext(productContext) as ProductContextType

  const filteredProducts = products.filter((item:ProductTypeProps)  => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  })
  
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? '';


  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({filter: e.target.value})
  }

  return (
      <>
        <Layout>
        <section className='py-16'>
          <div className='flex justify-center items-center'>
            <input className='text-white text-xl font-semibold' value={filter} onChange={handleFilter} type='search' placeholder='filter' />
          </div>
          <Hero />
          <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 '>
              {filteredProducts.filter((product:ProductTypeProps) => {
                if(!filter) return true;
                if(filter) {
                  const name = product.title.toLowerCase();
                  return name.includes(filter.toLowerCase())
                }
              })
              .map((product: ProductTypeProps) => {
                return <ProductList product={product} key={product.id} />
              })}
            </div>
          </div>
        </section>
        </Layout>
      </>    
  )
}