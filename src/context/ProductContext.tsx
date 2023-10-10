
// import context, useEffect, useState
import { FC, createContext, useEffect, useState} from 'react'

// import type
import { ProductProviderProps } from '../types';

// function
export const productContext = createContext({});
export const ProductProvider: FC<ProductProviderProps> = ({children}) => {
  //products state
  const [products, setProducts] = useState([])

  //fetch products 
  const url = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    try {
      const fetchProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      }
      fetchProducts();
    } catch {
      throw new Error ('There is an error')
    }
<<<<<<< HEAD
    fetchProducts();
=======
>>>>>>> dev_test
  },[])

  return (
    <productContext.Provider value={{products, setProducts}}>
      {children}
    </productContext.Provider>
  )
}
