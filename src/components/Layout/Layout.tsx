// import React from 'react'
import { FC, PropsWithChildren } from 'react'
import { Footer, Navbar, Sidebar } from '../../components'

export const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
         <Navbar />
         <Sidebar />
            {children}
        <Footer />
    </>
  )
}