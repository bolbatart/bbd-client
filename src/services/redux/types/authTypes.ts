export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';


export interface ILoginAction {
    type: string,
    payload: string,
}

export interface ILogoutAction {
    type: string,
    payload?: string;
}

export type AuthActionType = ILoginAction | ILogoutAction;

export type AuthStateType = {
    auth: string | null;
}