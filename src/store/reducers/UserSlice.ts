import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {checkAuth,login, logout} from "./ActionCreators";
import {setupStore} from "../store";

interface UserState {
    user: IUser | null;
    isLoading: boolean;
    error: string;
    isAuth: boolean;

}

const initialState: UserState = {
    user: {
        id: -1,
        name: "",
        surname: "",
        patronymic: "",
        region: "",
        city: "",
        placeofwork:"",
        birthdate: 0,
        sex: true,
        workExperience: -1,
        occupation: "",
        email: "",
        role: -1,
        isActivated: false,
    },
    isLoading: false,
    error: '',
    isAuth: false,
}

// slice - reducer в контексте toolkit
// Затем можем вытащить отдельно reducer и action creator
export const userSlice = createSlice({
    name: 'user', // у каждого слайса уникальное название
    initialState, // дефолтное значение состояния
    reducers:
        {
            ChangeIsLoading (state, action: PayloadAction<boolean>)
            {
                state.isLoading = action.payload
            },
            ChangeIsAuth (state, action: PayloadAction<boolean>)
            {
                state.isLoading = action.payload
            },
            ChangeUser (state, action: PayloadAction<IUser>)
            {
                state.user = action.payload
            },
            ChangeError (state, action: PayloadAction<string>)
            {
                state.error = action.payload
            },
        },
    extraReducers: {


        [login.fulfilled.type]: (state, action: PayloadAction<any>) => {
            console.log("login fulfilled")
            if (action.payload!==undefined) {
                if (action.payload.BirthDate !== undefined &&
                    action.payload.ClinicID !== undefined &&
                    action.payload.Name !== undefined &&
                    action.payload.OccupationID !== undefined &&
                    action.payload.Patronymic !== undefined &&
                    action.payload.RoleID !== undefined &&
                    action.payload.Sex !== undefined &&
                    action.payload.Surname !== undefined &&
                    action.payload.WorkExperience !== undefined &&
                    action.payload.email !== undefined &&
                    action.payload.created_at !== undefined &&
                    action.payload.deleted_at !== undefined &&
                    action.payload.updated_at !== undefined &&
                    action.payload.id !== undefined) {
                    const myuser: IUser = {
                        id: action.payload.id,
                        name: action.payload.Name,
                        surname: action.payload.Surname,
                        patronymic: action.payload.Patronymic,
                        region: 'Ленинградская область',
                        city: 'Санкт-Петербург',
                        placeofwork: action.payload.ClinicID,
                        birthdate: action.payload.BirthDate,
                        sex: action.payload.Sex,
                        workExperience: action.payload.WorkExperience,
                        occupation: action.payload.OccupationID,
                        email: action.payload.email,
                        role: action.payload.RoleID,
                        deleted_at:  action.payload.deleted_at,
                        created_at:  action.payload.created_at,
                        updated_at:  action.payload.updated_at,
                    }
                    state.error = '';
                    state.isAuth = true;

                    state.user = myuser;
                    state.isLoading = false;
                } else {
                    console.log("Пользователь не определен")
                    console.log(action.payload)
                    state.error = 'Пользователь не определен';
                    state.isLoading = false;
                }
            } else {
                console.log("Не определенный данные")
                state.error = 'Пользователь не определен';
                state.isLoading = false;
            }
            // state.error = '';
            // state.isAuth = true;
            //
            // state.isLoading = false;


        },
        [login.pending.type]: (state) => {
            console.log("login pending")
            state.isLoading = true;
        },
        [login.rejected.type]: (state,  action: PayloadAction<any>) => {
            if (action.payload!==undefined) {
                console.log("login reject")
                state.isAuth = false; // !!! эксперементально
                state.error = action.payload
                state.isLoading = false;
            }

        },


        [logout.fulfilled.type]: (state) => {
            state.isAuth=false;
            state.user = {} as IUser
            state.isLoading = false;

        },
        [logout.pending.type]: (state) => {
            state.isLoading = true;
        },
        [logout.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.error = action.payload
            state.isLoading = false;
        },

        [checkAuth.fulfilled.type]: (state, action: PayloadAction<any>) => {

            console.log(action.payload)
            if (action.payload!==undefined) {
                if (action.payload.BirthDate !== undefined &&
                    action.payload.ClinicID !== undefined &&
                    action.payload.Name !== undefined &&
                    action.payload.OccupationID !== undefined &&
                    action.payload.Patronymic !== undefined &&
                    action.payload.RoleID !== undefined &&
                    action.payload.Sex !== undefined &&
                    action.payload.Surname !== undefined &&
                    action.payload.WorkExperience !== undefined &&
                    action.payload.email !== undefined &&
                    action.payload.created_at !== undefined &&
                    action.payload.deleted_at !== undefined &&
                    action.payload.updated_at !== undefined &&
                    action.payload.id !== undefined) {
                    const myuser: IUser = {
                        id: action.payload.id,
                        name: action.payload.Name,
                        surname: action.payload.Surname,
                        patronymic: action.payload.Patronymic,
                        region: 'Ленинградская область',
                        city: 'Санкт-Петербург',
                        placeofwork: action.payload.ClinicID,
                        birthdate: action.payload.BirthDate,
                        sex: action.payload.Sex,
                        workExperience: action.payload.WorkExperience,
                        occupation: action.payload.OccupationID,
                        email: action.payload.email,
                        role: action.payload.RoleID,
                        deleted_at:  action.payload.deleted_at,
                        created_at:  action.payload.created_at,
                        updated_at:  action.payload.updated_at,
                    }
                    console.log(action.payload)
                    state.error = '';
                    state.isAuth = true;
                    state.user = myuser;
                    state.isLoading = false;
                } else {
                    console.log("checkAuth Пользователь не определен")
                    console.log(action.payload)
                    state.isAuth = false;
                    state.user = {} as IUser
                    state.isLoading = false;

                }
            } else {
                console.log(action.payload)
                console.log("checkAuth Не определенный данные")
                state.isLoading = false;
            }

        },
        [checkAuth.pending.type]: (state) => {
            state.isLoading = true;
        },
        [checkAuth.rejected.type]: (state,  action: PayloadAction<any>) => {
            if (action.payload!==undefined) {
                state.error = action.payload
                state.user = {} as IUser
                state.isLoading = false;
            }
        },

    }
})

export default userSlice.reducer; // вытаскиваем reducer
