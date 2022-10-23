import {IUser} from "../models/IUser";
import AuthService from "../services/AuthService";
import axios from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import {API_URL} from "../http";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {userSlice} from "./reducers/UserSlice";

const {user, isLoading, error, isAuth} = useAppSelector(state => state.userReducer)

export default class LoginClass {

    user = user
    isAuth = isAuth
    isLoading = isLoading
    error=error


    setAuth(bool: boolean) {
        const dispatch = useAppDispatch()
        dispatch(userSlice.actions.ChangeIsAuth(bool));
    }

    setUser(user: IUser) {
        const dispatch = useAppDispatch()
        dispatch(userSlice.actions.ChangeUser(user));
    }

    setLoading(bool: boolean) {
        const dispatch = useAppDispatch()
        dispatch(userSlice.actions.ChangeIsLoading(bool));
    }

    setError(str: string) {
        const dispatch = useAppDispatch()
        dispatch(userSlice.actions.ChangeError(str));
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);//токен доступа сохрянем в localstorage
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
            this.setError(e.response?.data?.message);
        }
    }

    async registration(email: string, password: string) {
        try {
            const response = await AuthService.registration(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
            this.setError(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (e) {
            console.log(e.response?.data?.message);
            this.setError(e.response?.data?.message);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            // пользуемся классический запромсом axios без интерсептора, чтобы не делать лишних проверок
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
            this.setError(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }
}
