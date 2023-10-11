import { createContext } from "react";

export type AuthContextType = {
    isLogged: boolean;
    // login: boolean;
    // logout: boolean;
}

export const AuthContext = createContext<AuthContextType>({ isLogged: false });