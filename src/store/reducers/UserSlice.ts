import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {checkAuth,login, logout} from "./ActionCreators";

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
        placeOfWork:"",
        birthdate: 0,
        sex: 1,
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
            console.log(action.payload)
            if (action.payload.id !== undefined &&
                action.payload.name !== undefined &&
                action.payload.surname !== undefined &&
                action.payload.patronymic !== undefined &&
                action.payload.region !== undefined &&
                action.payload.city !== undefined &&
                action.payload.placeOfWork !== undefined &&
                action.payload.birthdate !== undefined &&
                action.payload.sex !== undefined &&
                action.payload.workExperience !== undefined &&
                action.payload.occupation !== undefined &&
                action.payload.email !== undefined &&
                action.payload.role !== undefined )
            {
                state.error = '';
                state.isAuth = true;

                state.user = action.payload;
                state.isLoading = false;
            }
            else {
                state.error = 'Пользователь не определен';
                state.isLoading = false;
            }


        },
        [login.pending.type]: (state) => {
            console.log("login pending")
            state.isLoading = true;
        },
        [login.rejected.type]: (state,  action: PayloadAction<any>) => {
                console.log("login reject")
                state.isAuth = false; // !!! эксперементально
                state.error = action.payload
                state.isLoading = false;


        },


        [logout.fulfilled.type]: (state) => {
            console.log("logout fulfilled")
            state.isAuth=false;
            state.user = {} as IUser
            state.isLoading = false;
        },
        [logout.pending.type]: (state) => {
            console.log("logout pending")
            state.isLoading = true;
        },
        [logout.rejected.type]: (state,  action: PayloadAction<string>) => {
            console.log("logout rejected")
            state.error = action.payload
            state.isLoading = false;
        },

        [checkAuth.fulfilled.type]: (state, action: PayloadAction<any>) => {
            console.log(action.payload)
            if (action.payload.id !== undefined &&
                action.payload.name !== undefined &&
                action.payload.surname !== undefined &&
                action.payload.patronymic !== undefined &&
                action.payload.region !== undefined &&
                action.payload.city !== undefined &&
                action.payload.placeOfWork !== undefined &&
                action.payload.birthdate !== undefined &&
                action.payload.sex !== undefined &&
                action.payload.workExperience !== undefined &&
                action.payload.occupation !== undefined &&
                action.payload.email !== undefined &&
                action.payload.role !== undefined )
            {
                state.isAuth = true;
                state.user = action.payload
                state.isLoading = false;
            }
            else {
                state.isAuth = false;
                state.user = {} as IUser
                state.isLoading = false;
            }

        },
        [checkAuth.pending.type]: (state) => {
            state.isLoading = true;
        },
        [checkAuth.rejected.type]: (state,  action: PayloadAction<any>) => {
                state.error = action.payload
                state.user = {} as IUser
                state.isLoading = false;

        },

    }
})

export default userSlice.reducer; // вытаскиваем reducer
