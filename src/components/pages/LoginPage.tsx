import React, {useContext, useEffect} from 'react';
import {Context} from "../../index";
import {useAppSelector} from "../../hooks/redux";



const LoginPage = () => {
    const {login} = useContext(Context);
    const {user, isLoading, error, isAuth} = useAppSelector(state => state.userReducer)

    useEffect(() => {
        // проверка на токен
        if (localStorage.getItem('token')) {
            login.checkAuth()
        }
    }, []) // отрабатывает только при первом запуске приложения


    if (isLoading) {
        return <div>Загрузка...</div>
    }

    return (
        <div>
            <h1>{isAuth ? `Пользователь авторизован ${user?.email}` : 'АВТОРИЗУЙТЕСЬ'}</h1>
            <h1>{user?.isActivated ? 'Аккаунт подтвержден по почте' : 'ПОДТВЕРДИТЕ АККАУНТ!!!!'}</h1>
            <button onClick={() => login.logout()}>Выйти</button>
        </div>
    );
};

export default LoginPage; // длоя отслеживание изменений в данных мобыксом
