// import 
// import React-Router-DOM
import { BrowserRouter, Routes, Route } from "react-router-dom"

// import pages
import { Home } from "../pages/Home"
import { ProductDetails } from "../pages/ProductDetails"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Sidebar } from "../components/Sidebar"

// type
// type Props = {}

// function
export const RoutesPath = () => {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
