// import react
import {useContext} from 'react'

// import product context
import { productContext } from '../../context'

// import components
import { ProductList, Layout, Hero } from '../../components'

// import type
import { ProductTypeProps, ProductContextType } from '../../types'
import { useSearchParams } from 'react-router-dom'
// import { Searchbar } from '../../components/Searchbar/Searchbar'


// function
export const Home = () => {
  const { products} = useContext(productContext) as ProductContextType

  const filteredProducts = products.filter((item:ProductTypeProps)  => {
    return (
      item.category === "Halloween" 
    );
  })

  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? '';

  // const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchParams({filter: e.target.value})
  // }

  return (
      <>
        <Layout>
        <section className='py-16 mx-5'>
          <div className='mb-10'>
            <Hero />
          </div>
          <h1>Mis cojones</h1>
          {/* // nuevo campo  */}
          <div className='bgcontainer mx-auto'>
            <div className='flex flex-row overflow-x-scroll gap-3 '>
              {/* filter de productos  */}
              {filteredProducts.filter((product:ProductTypeProps) => {
                if(!filter) return true;
                if(filter) {
                  const name = product.title.toLowerCase();
                  return name.includes(filter.toLowerCase())
                }
              })
              .map((product: ProductTypeProps) => {
                // Componente ProductList
                return <ProductList product={product} key={product.id} />
              })}
            </div>
          </div>

          <h1>Mis cojones</h1>
          {/* // nuevo campo  */}
          <div className='bgcontainer mx-auto'>
            <div className='flex flex-row overflow-x-scroll gap-3 py-6 '>
              {/* filter de productos  */}
              {filteredProducts.filter((product: ProductTypeProps) => {
                if (!filter) return true;
                if (filter) {
                  const name = product.title.toLowerCase();
                  return name.includes(filter.toLowerCase())
                }
              })
                .map((product: ProductTypeProps) => {
                  // Componente ProductList
                  return <ProductList product={product} key={product.id} />
                })}
            </div>
          </div>
        </section>
        </Layout>
      </>    
  )
}
/* books inline container */
// .books_inlineContainer {
//   display: flex;
//   flex - direction: row;
//   overflow - x: scroll;
//   background: var(--primary - gradient - Alpha50);
//   padding: 0.5rem;

// }

// grid grid - cols - 1 md: grid - cols - 2 lg: grid - cols - 4 xl: grid - cols - 5 gap - [30px] max - w - sm mx - auto md: max - w - none md: mx - 0