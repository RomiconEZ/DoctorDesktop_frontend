import React, {FC, useContext, useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {Context} from "../index";


const LoginPage = () => {
    const {login} = useContext(Context);

    useEffect(() => {
        // проверка на токен
        if (localStorage.getItem('token')) {
            login.checkAuth()
        }
    }, []) // отрабатывает только при первом запуске приложения


    if (login.isLoading) {
        return <div>Загрузка...</div>
    }

    return (
        <div>
            <h1>{login.isAuth ? `Пользователь авторизован ${login.user?.email}` : 'АВТОРИЗУЙТЕСЬ'}</h1>
            <h1>{login.user?.isActivated ? 'Аккаунт подтвержден по почте' : 'ПОДТВЕРДИТЕ АККАУНТ!!!!'}</h1>
            <button onClick={() => login.logout()}>Выйти</button>
        </div>
    );
};

export default LoginPage; // длоя отслеживание изменений в данных мобыксом
