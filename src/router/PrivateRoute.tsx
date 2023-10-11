// import React from 'react'

import { useContext } from "react"
import { AuthContext } from "../auth/context/authContext"
import { ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { AuthContextType } from "../auth/context/authContext"

// type Props = {}
export type PrivateTypeProps = {
    children: ReactNode
}

export const PrivateRoute = ({children}:PrivateTypeProps) => {
    const {isLogged} = useContext<AuthContextType>(AuthContext)
  
    return isLogged? children: <Navigate to='/login' />
}
