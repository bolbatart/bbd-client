import Axios from "services/axios";
import { IForgotPasswordCredentials, ILoginCredentials, IRegisterCredentials, IResetPasswordCredentials } from "./types";

export default class AuthApi {
    public static async login(credentials: ILoginCredentials) {
        return await Axios.Instance.post('auth/login', credentials);
    }

    public static async register(credentials: IRegisterCredentials) {
        return await Axios.Instance.post('auth/register', credentials);
    }

    public static async logout() {
        return await Axios.Instance.get('auth/logout');
    }

    public static async forgotPassword(credentials: IForgotPasswordCredentials) {
        return await Axios.Instance.post('auth/forgotpassword', credentials);
    }

    public static async resetPassword(credentials: IResetPasswordCredentials, key: string) {
        return await Axios.Instance.put(`auth/reset/${key}`, credentials);
    }

    public static async refresgToken() {
        return await Axios.Instance.get('auth/refresh');
    }
}