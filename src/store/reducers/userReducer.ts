import {UserAction, UserState, UserActionTypes} from "../../types/user";

const initialState: UserState = {
    doctors: [],
    loading: false,
    error: null,
    limit: 10,
    page: 1,
}

export const userReducer = (state = initialState, action: UserAction): UserState=> {
    switch (action.type){
        case UserActionTypes.FETCH_USERS:
            return{...state, loading: true, error: null }
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return{...state, loading: false, error: null, doctors: action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
            return{...state, loading: false, error: action.payload}
        case UserActionTypes.SET_USERS_PAGE:
            return{...state, page: action.payload}
        default:
            return state
    }
}