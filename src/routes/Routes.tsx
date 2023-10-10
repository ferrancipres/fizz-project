
// import React-Router-DOM
import { BrowserRouter, Routes, Route } from "react-router-dom"

// import pages
import { Home, ProductDetails, CheckoutPage } from "../pages"
import { Layout } from "../components"

// function
export const RoutesPath = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}


// No tiene sentido Layout 