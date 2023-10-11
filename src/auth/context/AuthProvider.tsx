import { useReducer} from "react";
import { types } from "./types/types";
import { authReducer } from "./authReducer";
import { ReactNode } from "react";
import { AuthContext } from "./authContext";

const init = () => {
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;

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

    const login = (name = '') => {
        const user = {
            id: 1,
            name,
        }
        localStorage.setItem('user', JSON.stringify(user))
        dispatch({ type: types.login, payload: user })
    }

    const logout = () => {
        localStorage.removeItem('user')
        dispatch({ type: types.logout })

    }
    return <AuthContext.Provider value={{ ...authState, login: login, logout: logout }}> {children} </AuthContext.Provider>

}