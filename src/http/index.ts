import axios from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";

import {IUser} from "../models/IUser";

export const API_URL = `http://localhost:5000/api`

const $api = axios.create({ // создание инстанса
    withCredentials: true, // к каждому запросу прицеплять cookie
    baseURL: API_URL // url по которому instance axios шлет запрос
})
// axios всегда возвращает объект, а данные хранятся в поле data

// перехватчик на каждый запрос и на каждый ответ
// интерсептор на запрос: перед каждым запросом устанавливает header: autorization и помещать туда токен
// интерсептор на ответ: если статус-код 200 - ничего не делаем
//                       если 401 (не авторизован)- отправляем запрос на обновление токена доступа; повторяем исходный запрос с уже полученным токеном


// На запрос:
$api.interceptors.request.use((config) => { // параметр - callback
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

// На ответ:
$api.interceptors.response.use((config) => {
    return config; // если все успешно, возвращаем конфиг
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true; // указатель на то, что запрос мы уже делали
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})

export default $api;
