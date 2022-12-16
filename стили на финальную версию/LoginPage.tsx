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
            <div className="grid columns-1 gap-y-4 w-500 rounded-md border-2 p-5 bg-white pr-7 pl-7 pb-10 pt-10" >
                <h1 className="flex justify-center font-lg text-our-dark font-semibold">ВХОД</h1>
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

                <button className="rounded-md border-our-greenish-400 bg-our-greenish-400 text-white border-2 font-medium hover:text-white hover:bg-our-greenish-500 hover:border-our-greenish-500" onClick={()=>dispatch(login({email: email, password: password}))}>
                    Войти
                </button>
            </div>

        </div>
    );
};

export default LoginForm;
