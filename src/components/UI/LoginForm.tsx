import React, {FC, useState} from 'react';
import {useAppDispatch} from "../../store/store";
import {login} from "../../store/reducers/ActionCreators";
import Button from "../common/Button"


const LoginForm: FC = () => {
    const dispatch = useAppDispatch()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <div className="z-[10] flex flex-row justify-self-center place-content-center content-center items-center h-screen">
            <div className="grid columns-1 gap-y-3 w-500" >
                <h1 className="flex justify-center font-lg text-black-dark-my font-semibold">ВХОД</h1>
                <input
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder='Email'
                    className = 'h-8 w-100 text-slate-400 bg-gray-50 p-1 pl-4 border rounded-md border-gray-300'
                />
                <input
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder='Пароль'
                    className = 'h-8 w-100 text-slate-400 bg-gray-50 p-1 pl-4 border rounded-md border-gray-300'
                />

                <Button
                    onClick={()=>dispatch(login({email: email, password: password}))}
                >
                    Войти
                </Button>
            </div>

        </div>
    );
};

export default LoginForm;