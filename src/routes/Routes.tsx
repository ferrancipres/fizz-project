// import 
// import React-Router-DOM
import { BrowserRouter, Routes, Route } from "react-router-dom"

// import pages
import { Home } from "../pages/Home"
import { ProductDetails } from "../pages/ProductDetails"

// type
// type Props = {}

// function
export const RoutesPath = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
