import { AUTH_LOGIN, AUTH_LOGOUT, ILoginAction, ILogoutAction } from "../types/authTypes";

export function login(payload: string): ILoginAction {
    return {
        type: AUTH_LOGIN,
        payload,
    }    
}

export function logout(): ILogoutAction {
    return {
        type: AUTH_LOGOUT,
    }    
}