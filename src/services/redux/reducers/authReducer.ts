import { AuthActionType, AuthStateType, AUTH_LOGIN, AUTH_LOGOUT } from "../types/authTypes";

const initialState: AuthStateType = { auth: null }; 

export function authReducer(
    state = initialState,
    action: AuthActionType
): AuthStateType {
    switch (action.type) {
        case AUTH_LOGIN:
            return {...state, auth: action.payload ? action.payload : null};
        case AUTH_LOGOUT:
            return {auth: null};
        default:
            return state;
    }
}