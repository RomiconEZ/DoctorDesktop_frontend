import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import Carousel from "../carousel";

const PostContainer = () => {
    const {isLoading, error} = useAppSelector(state => state.userReducer);


    return (
        <div>
            <div className="post__list">
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке</h1>}
                <Carousel />
            </div>
        </div>
    );
};

export default PostContainer;
