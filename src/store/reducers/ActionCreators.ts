
import {createAsyncThunk} from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService";


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
            console.log('Получили ответ с сервера на логин')
            console.log(response.data.accessToken)
            localStorage.setItem('token', response.data.accessToken);//токен доступа сохрянем в localstorage
            console.log('Достали из локального хранилища')
            console.log(localStorage.getItem('token'))
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
            console.log('Перед проверкой на аунтификацию')
            console.log(localStorage.getItem('token'))
            const response = await AuthService.refresh();
            console.log(response.data);
            localStorage.setItem('token', response.data.accessToken);
            return(response.data.user);
        }
        catch (e) {
            localStorage.removeItem('token');
            console.log(e.response?.data?.message);
            return(e.response?.data?.message);
        }
    }
)