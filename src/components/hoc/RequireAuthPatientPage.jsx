import { useLocation, Navigate } from 'react-router-dom';
import {useContext} from "react";
import {Context} from "../../index";
import {useAppSelector} from "../../hooks/redux";

// doctor - 1
// developer - 2
// codeveloper - 3
// admin - 4
// registry - 5
// expert - 6
// dataadmin - 7

const RequireAuthPatientPage = ({children}) => {
    const location = useLocation();
    const {user, isLoading, error, isAuth} = useAppSelector(state => state.userReducer)

    if (!isAuth)
    {

        return <Navigate to='/login' state={{from: location}} />
    }
    if ((user.role !==1)&&(user.role !==2)&&(user.role !==6))
    {

        return <Navigate to='/menu' state={{from: location}} />
    }
    return children;
}

export {RequireAuthPatientPage};