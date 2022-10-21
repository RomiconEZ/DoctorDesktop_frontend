import React, {FC, useContext, useEffect, useState} from 'react';
import LoginForm from "./LoginForm";
import UserService from "../services/UserService";
import {IUser} from "../models/IUser";
import LoginClass from "../store/LoginClass";
import {Context} from "../index";


const LoginPage = () => {
    const {login} = useContext(Context);
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        // проверка на токен
        if (localStorage.getItem('token')) {
            login.checkAuth()
        }
    }, []) // отрабатывает только при первом запуске приложения

    // async function getUsers() {
    //     try {
    //         const response = await UserService.fetchUsers();
    //         setUsers(response.data);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    if (login.isLoading) {
        return <div>Загрузка...</div>
    }

    // if (!store.isAuth) {
    //     return (
    //         <div>
    //             <LoginForm/>
    //             <button onClick={getUsers}>Получить пользователей</button>
    //         </div>
    //     );
    // }

    return (
        <div>
            <h1>{login.isAuth ? `Пользователь авторизован ${login.user?.email}` : 'АВТОРИЗУЙТЕСЬ'}</h1>
            <h1>{login.user?.isActivated ? 'Аккаунт подтвержден по почте' : 'ПОДТВЕРДИТЕ АККАУНТ!!!!'}</h1>
            <button onClick={() => login.logout()}>Выйти</button>
            <div>
                {/*<button onClick={getUsers}>Получить пользователей</button>*/}
            </div>
            {users.map(user =>
                <div key={user.email}>{user.email}</div>
            )}
        </div>
    );
};

export default LoginPage; // длоя отслеживание изменений в данных мобыксом
