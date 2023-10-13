// import React from 'react'
import { FC, PropsWithChildren } from 'react'
import { Footer, Navbar, Sidebar } from '..'

export const LayoutDetails: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Navbar />
            <Sidebar />
            {children}
            <Footer />
        </>
    )
}