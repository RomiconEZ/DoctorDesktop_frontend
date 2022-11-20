import React, {useContext, useEffect} from 'react';
import {useAppSelector} from "../../hooks/redux";
import {useAppDispatch} from "../../store/store";
import {checkAuth, login, logout} from "../../store/reducers/ActionCreators";
import LoginForm from "../UI/LoginForm";
import {useNavigate} from "react-router-dom";
import Loader from "../common/Loader";



const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const {user, isLoading, error, isAuth} = useAppSelector(state => state.userReducer)

    useEffect(() => {
        // проверка на токен
        if (localStorage.getItem('token')) {
            dispatch(checkAuth())
        }
    }, []) // отрабатывает только при первом запуске приложения


    if (isLoading) {
        return <Loader/>
    }

    if (isAuth == true) {
        navigate('/auth/menu');
    }

    return (
        <div>
            <LoginForm/>
        </div>
    );
};

export default LoginPage; // длоя отслеживание изменений в данных мобыксом
