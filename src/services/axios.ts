import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';


export default class Axios {
    public service: AxiosInstance;
    private static axios: Axios;

    public static get Instance(): Axios {
        return this.axios || (this.axios = new this());
    }

    private constructor() {
        const axiosService = axios.create({
            baseURL: 'http://localhost:8080',
            timeout: 50000,            
        })

        axiosService.interceptors.response.use(
            response => {
                if (response.data) response.data = JSON.parse(JSON.stringify(response.data));
                return response;
            },
            (error: AxiosError) => {
                if (error.response?.status === 401) {
                    // redirect to login page for example
                } else {
                    // alert about error
                }
                throw error;
            }
        );

        this.service = axiosService;
    }

    public async get(url: string, config?: AxiosRequestConfig) {
        try {
            return await this.service.get(url,  {withCredentials: true, ...config});
        } catch (error) {
            throw error;
        }
    }

    public async post<T>(url: string, data?: T,  config?: AxiosRequestConfig) {
        try {
            return await this.service.post(url, data, {withCredentials: true, ...config});
        } catch (error) {
            throw error;
        }
    }

    public async put<T>(url: string, data?: T, config?: AxiosRequestConfig) {
        try {
            return await this.service.put(url, data,  {withCredentials: true, ...config});
        } catch (error) {
            throw error;
        }
    }

    public async delete(url: string, config?: AxiosRequestConfig) {
        try {
            return await this.service.delete(url,  {withCredentials: true, ...config});
        } catch (error) {
            throw error;
        }
    }
}