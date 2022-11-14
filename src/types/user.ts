
export interface UserState {
    doctors: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    SET_USERS_PAGE ='SET_USERS_PAGE',
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
    //total_count:number;
}

interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
    //payload1: any
}

interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

interface SetUsersPageAction {
    type: UserActionTypes.SET_USERS_PAGE;
    payload: number;
}

export type UserAction =
    FetchUsersAction
    | FetchUsersSuccessAction
    | FetchUsersErrorAction
    | SetUsersPageAction
