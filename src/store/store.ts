import {Action, combineReducers, configureStore, ThunkAction} from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import additionalReducer from './reducers/AdditionalSlice'

import {patientAPI} from "../services/PatientService";
import {doctorAPI} from "../services/DoctorService";
import {useDispatch} from "react-redux";
import patientsReducer from "./reducers/PatientsSlice";
import doctorsReducer from './reducers/DoctorsSlice'


// не обязательно объединять все reducers
const rootReducer = combineReducers({
    userReducer, // слайс
    additionalReducer,
    patientsReducer,
    doctorsReducer,
    // регистрация reducer
    [patientAPI.reducerPath]: patientAPI.reducer,
    [doctorAPI.reducerPath]: doctorAPI.reducer,
})

export const setupStore = () => {
    // Конфигурируем redux-хранилище
    // Иструменты разраба и thunk идет из коробки с toolkit
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(patientAPI.middleware) // этот момент сомнительный, нужно проверить, что можно соединять цепочкой
                .concat(doctorAPI.middleware)
    })
}

// Получение типов для задания типизации
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']


export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk = ThunkAction<Promise<any>, RootState, unknown, Action>;