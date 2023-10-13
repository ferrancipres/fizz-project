import { useReducer} from "react";
import { types } from "./types/types";
import { authReducer } from "./authReducer";
import { ReactNode } from "react";
import { AuthContext } from "./authContext";

export type userTypeLogged = {
    user: string,
    password: string
}

const init = () => {
    // Comentar que sin ! ..se rompe todo
    const userString = localStorage.getItem('user');
    const user:userTypeLogged = userString ? JSON.parse(userString) : null;

    return {
        isLogged: !!user,
        user
    };
};

type AuthProviderProps = {
    children: ReactNode; 
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init)
    
    const login = (newUser:userTypeLogged) => {
        localStorage.setItem('user', JSON.stringify(newUser))
        dispatch({ type: types.login, payload: newUser })
    }

    const logout = () => {
        localStorage.removeItem('user')
        dispatch({ type: types.logout })

    }
    return <AuthContext.Provider value={{ ...authState, login: login, logout: logout }}> {children} </AuthContext.Provider>

}