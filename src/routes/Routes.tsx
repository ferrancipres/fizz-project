
// import React-Router-DOM
import { BrowserRouter, Routes, Route } from "react-router-dom"

// import pages
import { Home, ProductDetails, CheckoutPage } from "../pages"
import { Layout } from "../components"
import { Login } from "../pages/Log/Login"

// function
export const RoutesPath = () => {
  return (
    <BrowserRouter>
      {/* <Layout> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  )
}
