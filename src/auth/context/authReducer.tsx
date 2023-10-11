
// import types
import { types } from "./types/types";
import { userTypeLogged } from "./AuthProvider";

// Pendiente de revisar TIPADO
enum ActionTypes {
    Login = 'login',
    Logout = 'logout'
}

type Login = {
    type: ActionTypes.Login,
    payload: {user:string, password:string} 
}

type Logout = {
    type: ActionTypes.Logout,
    payload: { user: string, password: string }
}

type Action = Login | Logout

export const authReducer = (state:userTypeLogged, action:Action) => {
    switch(action.type) {
        case types.login:
                return {
                    ...state,
                    isLogged: true,
                    user: action.payload
                }
        case types.logout:
                return {
                    ...state,
                    isLogged: false,
                }    
        default: state;
    }
}
