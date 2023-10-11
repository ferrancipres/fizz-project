
// import types
import { types } from "./types/types";

// Pendiente de revisar TIPADO
export const authReducer = (state:any, action:any) => {
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
