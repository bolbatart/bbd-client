export interface ILoginCredentials {
    email: string;
    password: string;
}

export interface IRegisterCredentials {
    email: string;
    password: string;
    passwordConfirm: string;
    firstName: string;
    lastName: string;
}

export interface IForgotPasswordCredentials {
    email: string;
}

export interface IResetPasswordCredentials {
    email: string;
    password: string;
    passwordConfirm: string;
}
