
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
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  },[])

  return (
    <productContext.Provider value={{products, setProducts}}>
      {children}
    </productContext.Provider>
  )
}
