import React from 'react';
import Loader from "../common/Loader";
import {useAppSelector} from "../../hooks/redux";

const NotFound = () => {
    const {isLoading, error} = useAppSelector(state => state.userReducer);

    return (

        <div className="flex justify-center items-center h-screen flex-wrap">
            <div className="grid columns-1">
                <h1 className="text-9xl font-bold text-azure-my flex justify-center items-center"> 404 </h1>
                <h1 className="text-2xl font-medium">Извините, мы не нашли то, что вы искали!</h1>
            </div>
        </div>
    );
};

export default NotFound;