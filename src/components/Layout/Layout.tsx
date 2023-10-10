// import React from 'react'
import { FC, PropsWithChildren } from 'react'
import { Footer, Header, Sidebar } from '../../components'

export const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
         <Header />
         <Sidebar />
        {children}
        <Footer />
    </>
  )
}