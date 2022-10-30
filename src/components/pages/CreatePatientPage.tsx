import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import RegisterForm from "../UI/RegisterForm";

const PostContainer = () => {
    const {isLoading, error} = useAppSelector(state => state.userReducer);

// нужна кнопка создать
    return (
        <div>
            <div className="post__list">
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке</h1>}
                <RegisterForm />
            </div>
        </div>
    );
};

export default PostContainer;
