import { createContext } from "react";

export type AuthContextType = {
    isLogged: boolean;
    login: () => void
    logout: () => void
}

export const AuthContext = createContext<AuthContextType>({ isLogged: false, login:()=>{}, logout:()=>{}});