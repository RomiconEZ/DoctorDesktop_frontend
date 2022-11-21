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
                {error && <div className="flex justify-center items-center h-screen flex-wrap">
                    <h1 className="text-xl font-medium text-azure-my">
                        Произошла ошибка при загрузке</h1> </div>}
                <Carousel />
            </div>
        </div>
    );
};

export default PostContainer;