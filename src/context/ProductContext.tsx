
import { FC, createContext, useEffect, useState} from 'react'

import { ProductProviderProps } from '../types'

export const productContext = createContext({})
export const ProductProvider: FC<ProductProviderProps> = ({children}) => {

  const [products, setProducts] = useState([])
  const url = import.meta.env.VITE_API_BASE_URL

  useEffect(() => {
    try {
      const fetchProducts = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setProducts(data)
      }
      fetchProducts()
    } catch (error) {
        console.log('Error fetching data', error)
    }
  },[])


  return (
    <productContext.Provider value={{products, setProducts}}>
      {children}
    </productContext.Provider>
  )
}
