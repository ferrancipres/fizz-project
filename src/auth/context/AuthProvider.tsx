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
    console.log('authprovider', authState)
    const login = (newUser:userTypeLogged) => {
        console.log('patata',newUser)
        localStorage.setItem('user', JSON.stringify(newUser))
        dispatch({ type: types.login, payload: newUser })
    }

    const logout = () => {
        localStorage.removeItem('user')
        dispatch({ type: types.logout })

    }
    return <AuthContext.Provider value={{ ...authState, login: login, logout: logout }}> {children} </AuthContext.Provider>

}