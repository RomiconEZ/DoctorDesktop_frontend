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
    user: null,
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
        }, // аналогично switch/case как в обычном reducer
    extraReducers: {
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
