
// import React-Router-DOM
import { BrowserRouter, Routes, Route } from "react-router-dom"

// import pages
import { Home} from "../pages"
import { ProductDetails } from "../components/Product/ProductDetails"
import {Checkout} from '../pages/Checkout/Checkout'


// function
export const RoutesPath = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/product/:title' element={<ProductDetails />} />
        </Routes>
    </BrowserRouter>
  )
}
