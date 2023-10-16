import {useContext} from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import {Autoplay} from 'swiper/modules'
import 'swiper/swiper-bundle.css'

import 'swiper/css';
import 'swiper/css/free-mode'
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { productContext } from '../../context'

import { ProductList, Layout, Hero } from '../../components'

import { ProductTypeProps, ProductContextType } from '../../types'
import { useSearchParams } from 'react-router-dom'

export const Home = () => {
  const { products} = useContext(productContext) as ProductContextType

  const filteredProductsHalloween = products.filter((item:ProductTypeProps)  => {
    return (
      item.category === "Halloween"
    );
  })
  const filteredProductsBestSeller = products.filter((item: ProductTypeProps) => {
    return (
      item.category === "Best Seller"
    );
  })
  const filteredProductsNewProducts = products.filter((item: ProductTypeProps) => {
    return (
      item.category === "New" 
    );
  })
  
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? '';

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({filter: e.target.value})
  }

  return (
    <Layout>
      <div className='pt-16 pb-5'>
        <Hero />
      </div>
          
      <div className='p-5'>
        <h1 className="text-xl font-bold text-gray-900 dark:text-black uppercase">New collection</h1>
        <Swiper modules={[Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 5,
            }
        }} >
          <>
            <div className='container mx-auto'>
              <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 '>
                {filteredProductsHalloween.filter((product: ProductTypeProps) => {
                  if (!filter) return true;
                  if (filter) {
                    const name = product.title.toLowerCase();
                    return name.includes(filter.toLowerCase())
                  }
                })
                .map((product: ProductTypeProps) => {
                  return (
                    <SwiperSlide key={product.id}>
                      <ProductList product={product} />
                    </SwiperSlide>
                  )
                })}
              </div>
            </div>
          </>
        </Swiper>
      </div>

      <div className='p-5'>
        <h1 className="text-xl font-bold text-gray-900 dark:text-black uppercase">Halloween collection</h1>
        <Swiper modules={[Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 5,
            }
          }} >
          <>
            <div className='container mx-auto'>
              <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 '>
                {filteredProductsNewProducts.filter((product: ProductTypeProps) => {
                  if (!filter) return true;
                  if (filter) {
                    const name = product.title.toLowerCase();
                    return name.includes(filter.toLowerCase())
                  }
                })
                  .map((product: ProductTypeProps) => {
                    return (
                      <SwiperSlide key={product.id}>
                        <ProductList product={product} />
                      </SwiperSlide>
                    )
                  })}
              </div>
            </div>
          </>
        </Swiper>
      </div>

      <div className='p-5'>
        <h1 className="text-xl font-bold text-gray-900 dark:text-black uppercase">Best Sellers</h1>
        <Swiper modules={[Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 5,
            }
          }} >
          <>
            <div className='container mx-auto'>
              <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 '>
                {filteredProductsBestSeller.filter((product: ProductTypeProps) => {
                  if (!filter) return true;
                  if (filter) {
                    const name = product.title.toLowerCase();
                    return name.includes(filter.toLowerCase())
                  }
                })
                  .map((product: ProductTypeProps) => {
                    return (
                      <SwiperSlide key={product.id}>
                        <ProductList product={product} />
                      </SwiperSlide>
                    )
                  })}
              </div>
            </div>
          </>
        </Swiper>
      </div>
    </Layout>  
  )
}