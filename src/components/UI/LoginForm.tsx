import React, {FC, useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";



const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {login} = useContext(Context);
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

            <button onClick={() => login.login(email, password)}>
                Логин
            </button>
            {/*<button onClick={() => login.registration(email, password)}>*/}
            {/*    Регистрация*/}
            {/*</button>*/}
        </div>
    );
};

export default observer(LoginForm);
