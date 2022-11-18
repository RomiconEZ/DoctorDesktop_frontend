import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import Carousel from "../UI/carousel";

const PostContainer = () => {
    const {isLoading, error} = useAppSelector(state => state.userReducer);


    return (
        <div>
            <div>
                Menu page
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке</h1>}

                {/*в карусели ошибка, посмотрю позже*/}
                {/*<Carousel />*/}
            </div>
        </div>
    );
};

export default PostContainer;
