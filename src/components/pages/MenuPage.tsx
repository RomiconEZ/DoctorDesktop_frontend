import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import Carousel from "../UI/carousel";
import Navbar from "../UI/Navbar/Navbar";

const PostContainer = () => {
    const {isLoading, error} = useAppSelector(state => state.userReducer);


    return (
        <div>
            <div>
                <Navbar />
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке</h1>}
                {/*<Carousel />*/}
            </div>
        </div>
    );
};

export default PostContainer;
