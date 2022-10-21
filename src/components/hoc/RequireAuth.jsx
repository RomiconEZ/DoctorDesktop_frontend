import { useLocation, Navigate } from 'react-router-dom';
import {useContext} from "react";
import {Context} from "../../index";

const RequireAuth = ({children}) => {
    const location = useLocation();
    const {login} = useContext(Context);

    if (!login.checkAuth()) {
        return <Navigate to='/login' state={{from: location}} />
    }

    return children;
}

export {RequireAuth};