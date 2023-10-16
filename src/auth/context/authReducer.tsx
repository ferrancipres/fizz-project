
import { types } from './types/types'

export const authReducer = (state:any, action:any) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                isLogged: true,
                user: action.payload
            }
        case types.logout:
            return {
                isLogged: false,
            }
        default: state
    }
}
