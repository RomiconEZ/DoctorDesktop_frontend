import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import {postAPI} from "../services/PostService";

const rootReducer = combineReducers({
    userReducer, // слайс

    // регистрация reducer
    [postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => {
    // Конфигурируем redux-хранилище
    // Иструменты разраба и thunk идет из коробки с toolkit
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(postAPI.middleware)
    })
}

// Получение типов для задания типизации
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
