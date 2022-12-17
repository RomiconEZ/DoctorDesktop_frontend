import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks/redux";
import {useAppDispatch} from "../../store/store";
import {checkAuth} from "../../store/reducers/ActionCreators";
import LoginForm from "../UI/LoginForm";
import {useNavigate} from "react-router-dom";
import Loader from "../common/Loader";



const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const {isLoading, isAuth} = useAppSelector(state => state.userReducer)

    useEffect(() => {
        // проверка на токен
        if (localStorage.getItem('token')) {
            dispatch(checkAuth())
        }
    }, []) // отрабатывает только при первом запуске приложения


    useEffect(() => {
        if (isAuth === true) {
            navigate('/auth/menu');
        }
    }, [isAuth])// отрабатывает только при первом запуске приложения


    return (
        <div className='z-[0]'>
            {isLoading && <Loader/>}
            <LoginForm/>
        </div>
    );
};

export default LoginPage;






