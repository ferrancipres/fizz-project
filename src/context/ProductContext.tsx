// import 
// import context, useEffect, useState
import { createContext, useEffect, useState} from "react"

// import type
import { ProductProviderProps } from "../types/ProductProviderProps";

// import functional components
import { FC } from "react";

// type
export type productType =  {
  id: number,
  image: string,
  category: string, 
  title: string,
  price: number,
  amount: number
}

export type productContextType = {
  products: Array<productType>
  setProducts: (value: Array<productType>) => void
}

// function
export const productContext = createContext({});
export const ProductProvider: FC<ProductProviderProps> = ({children}) => {
  //products state
  const [products, setProducts] = useState<Array<productType>>([])
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
