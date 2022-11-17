import React, {FC, useState} from 'react';
import {useAppDispatch} from "../../store/store";
import {login} from "../../store/reducers/ActionCreators";



const LoginForm: FC = () => {
    const dispatch = useAppDispatch()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
   /* const dispatch = useAppDispatch()
    const {user, isLoading, error} = useAppSelector(state => state.userReducer) // достаем переменные из хранилища*/

    //
    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [ ])
    {/*{isLoading && <h1>Идет загрузка...</h1>}*/}
    {/*{error && <h1>{error}</h1>}*/}
    {/*{JSON.stringify(users, null, 2)}*/}

    return (
        <div>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
            />
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Пароль'
            />

            <button onClick={() => dispatch(login({email: email, password: password}))}>
                Логин
            </button>
            {/*<button onClick={() => login.registration(email, password)}>*/}
            {/*    Регистрация*/}
            {/*</button>*/}
        </div>
    );
};

export default LoginForm;
