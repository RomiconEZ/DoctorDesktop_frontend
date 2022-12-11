import React, {FC} from 'react';
import {useAppDispatch} from "../../store/store";
import {login} from "../../store/reducers/ActionCreators";
import {useForm} from "react-hook-form";
const LoginForm: FC = () => {
    const dispatch = useAppDispatch()
    const {register, handleSubmit} = useForm({ shouldUseNativeValidation: true })

    const onSubmit = async (data:any) => {
        dispatch(login(data))
        //dispatch(login({email: email, password: password}))
        //alert(JSON.stringify(data))
    }

    return (
        <div className="z-[10] flex justify-self-center place-content-center content-center items-center h-screen">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col w-80 bg-white px-8 py-12 gap-y-4 rounded-md">
                    <h1 className="font-sans text-2xl pb-4 text-our-dark font-semibold">Авторизация</h1>

                        <input
                            {...register("email", { required: "Пожалуйста, введите вашу почту" })}
                            type="email"
                            placeholder='Email'
                            className='focus:outline-none focus:border-our-greenish-300 focus:border-2 text-slate-400
                                bg-our-gray-main-theme p-2 px-4 border rounded-md border-gray-300
                                focus:bg-white focus:text-our-dark'
                        />

                        <input
                            {...register("password", { required: "Пожалуйста, введите ваш пароль" })}
                            type="password"
                            placeholder='Пароль'
                            className='focus:outline-none focus:border-our-greenish-300 focus:border-2 text-slate-400
                                bg-our-gray-main-theme p-2 px-4 border rounded-md border-gray-300
                                focus:bg-white focus:text-our-dark'
                        />

                        <input
                            type="submit"
                            className="rounded-md p-2 border-our-greenish-400 bg-our-greenish-400
                                text-gray-50 border-2 font-medium hover:text-white hover:bg-our-greenish-500
                                transition ease-in duration-200"
                            value="Войти"
                        />

                </div>

            </form>

        </div>
    );
};

export default LoginForm;