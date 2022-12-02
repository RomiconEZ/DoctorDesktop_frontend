import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";

// axios всегда возвращает объект, а данные хранятся в поле data
export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('auth/login', {email, password}) // 2-ой параметр - тело запроса
    }

    // static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    //     return $api.post<AuthResponse>('auth/registration', {email, password})
    // }

    static async refresh(): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('auth/refresh', {withCredentials: true})
    }

    static async logout(): Promise<void> {
        return $api.post('auth/logout')
    }

}

