import { useLocation, Navigate } from 'react-router-dom';
import {useAppSelector} from "../../hooks/redux";

// doctor - 1
// developer - 2
// codeveloper - 3
// admin - 4
// registry - 5
// expert - 6
// dataadmin - 7

const RequireAuthPatientsListPage = ({children}) => {
    const location = useLocation();
    const {user, isLoading, error, isAuth} = useAppSelector(state => state.userReducer)

    if (!isAuth)
    {

        return <Navigate to='/login' state={{from: location}} />
    }
    if ((user.role !==1)&&(user.role !==6)&&(user.role !==3)&&(user.role !==0))
    {

        return <Navigate to='/auth/menu' state={{from: location}} />
    }
    return children;
}

export {RequireAuthPatientsListPage};