import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth'

const RequireAuth = ({children}) => {
    const location = useLocation();
    const {user} = useAuth(); // изменить на доставвание из хранилища

    if (!user) {
        return <Navigate to='/login' state={{from: location}} />
    }

    return children;
}

export {RequireAuth};