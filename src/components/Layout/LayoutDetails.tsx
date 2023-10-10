// import React from 'react'
import { FC, PropsWithChildren } from 'react'
import { Footer, Header, Sidebar } from '..'

export const LayoutDetails: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            <Sidebar />
            {children}
            <Footer />
        </>
    )
}