import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import patientReducer from "./reducers/PatientSlice"
const rootReducer = combineReducers(
    {
        patientReducer
    }
)

export const setupStore =() => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']