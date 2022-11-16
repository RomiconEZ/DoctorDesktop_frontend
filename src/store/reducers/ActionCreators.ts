import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {userSlice} from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    IAnthropometric_data,
    IClinical_data,
    IConcom_desease, IEchocardiogram, IMultispiral_CT,
    IPatient_history,
    IPersonal_data
} from "../../models/IPatientFull";
import AuthService from "../../services/AuthService";
import {AuthResponse} from "../../models/response/AuthResponse";
import {API_URL} from "../../http";

// Асинхронный редусер

// Упрощение для toolkit

export const fetchUser = createAsyncThunk(
    'user',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/user2s')
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить пользователя")
        }
    }
)
export interface email_and_password{
    email: string,
    password: string,
}

export const login = createAsyncThunk(
    'login',
    async (logdata:email_and_password, thunkAPI) => {
        try {
            const response = await AuthService.login(logdata.email, logdata.password);
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
    async (logdata:email_and_password, thunkAPI) => {
        try {
            // пользуемся классический запромсом axios без интерсептора, чтобы не делать лишних проверок
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            return(response.data.user);
        }
        catch (e) {
            console.log(e.response?.data?.message);
            return(e.response?.data?.message);
        }
    }
)