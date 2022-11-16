import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUser} from "./ActionCreators";

interface UserState {
    user: IUser | null;
    isLoading: boolean;
    error: string;
    isAuth: boolean;

}

const initialState: UserState = {
    user: {
        id: "",
        name: "",
        surname: "",
        patronymic: "",
        region: "",
        city: "",
        placeofwork:"",
        birthdate: 0,
        sex: "",
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
        // эти редусеры НЕ ИСПОЛЬЗУЕМ !!!
        [fetchUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.isLoading = false;
            state.error = ''
            state.user = action.payload;
        },
        [fetchUser.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUser.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default userSlice.reducer; // вытаскиваем reducer
