import Axios from "services/axios";

export default class ProfileApi {
    public static async getMe() {
        return await Axios.Instance.get('users/me');
    }
    
    public static async getById(id: string) {
        return await Axios.Instance.get('users/' + id);
    }
}