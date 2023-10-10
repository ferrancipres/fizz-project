// import React from 'react'

import { Checkout, Header, Footer } from '../../components'
import { FC } from "react"

export const CheckoutPage:FC = () => {
  return (
    <>
      <Header />
      <section>
        <Checkout />
      </section>
      <Footer />
    </>
  )
}