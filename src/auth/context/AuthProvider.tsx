import { useReducer} from 'react'

import { authReducer } from './authReducer'
import { AuthContext } from './authContext'

import { types } from './types/types'
import { userTypeLogged } from './types/userTypeLogged'
import { AuthProviderProps } from './types/AuthProviderProps'

const init = () => {
    const localUser = localStorage.getItem('user')
    const user = localUser && JSON.parse(localUser)
    return {
        isLogged: !!user,
        user
    }
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {}, init)

    const login = (newUser:userTypeLogged) => {
        localStorage.setItem('user', JSON.stringify(newUser))
        dispatch({ type: types.login, payload: newUser})
    }

    const logout = () => {
        localStorage.removeItem('user')
        dispatch({ type: types.logout})
    }

    return <AuthContext.Provider value={{ ...authState, login: login, logout: logout }}>
        {children} 
        </AuthContext.Provider>
}