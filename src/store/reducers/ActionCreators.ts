import axios from "axios";
import {IUser} from "../../models/IUser";
import {createAsyncThunk} from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService";
import {AuthResponse} from "../../models/response/AuthResponse";
import {API_URL} from "../../env_data";

// axios.defaults.timeout = 1000;

export interface email_and_password{
    email: string,
    password: string,
}

export const login = createAsyncThunk(
    'login',
    async (logdata:email_and_password, thunkAPI) => {
        try {
            const response = await AuthService.login(logdata.email, logdata.password);
            console.log(response.data.accessToken)
            localStorage.setItem('token', response.data.accessToken);//токен доступа сохрянем в localstorage
            return response.data.user;
        } catch (e) {
            console.log(e.response?.data?.message);
            return (e.response?.data?.message)
        }
    }
)
export const logout = createAsyncThunk(
    'logout',
    async (_, thunkAPI) => {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
        } catch (e) {
            console.log(e.response?.data?.message);
            return (e.response?.data?.message)
        }
    }
)

export const checkAuth = createAsyncThunk(
    'checkAuth',
    async (_, thunkAPI) => {
        try {
            // пользуемся классический запромсом axios без интерсептора, чтобы не делать лишних проверок
            console.log(localStorage.getItem('token'))
            const response = await axios.post<AuthResponse>(`${API_URL}/auth/refresh`, {withCredentials: true})
            console.log(response.data);
            localStorage.setItem('token', response.data.accessToken);
            return(response.data.user);
        }
        catch (e) {
            console.log(e.response?.data?.message);
            return(e.response?.data?.message);
        }
    }
)