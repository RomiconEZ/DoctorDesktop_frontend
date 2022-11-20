import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import Carousel from "../UI/carousel";
import Loader from "../common/Loader";

const PostContainer = () => {
    const {isLoading, error} = useAppSelector(state => state.userReducer);


    return (
        <div>
            <div>
                {isLoading && <Loader/>}
                {error && <h1>Произошла ошибка при загрузке</h1>}
                <Carousel />
            </div>
        </div>
    );
};

export default PostContainer;
