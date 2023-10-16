import { createContext } from 'react'
import { userTypeLogged } from './types/userTypeLogged'

export type AuthContextType = {
    isLogged: boolean,
    user: userTypeLogged | null,
    login:(user:userTypeLogged) => void,
    logout: () => void
}

export const AuthContext = createContext<AuthContextType>({ 
    isLogged: false,
    user: null,
    login: () => {},
    logout: () => {} 
})
