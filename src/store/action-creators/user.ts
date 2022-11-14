import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";
import {IDoctor} from "../../models/IDoctor";

export const fetchUsers = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type:UserActionTypes.FETCH_USERS})
            const res = await axios.get<IDoctor>('https://my-json-server.typicode.com/Alina-Smol/json-server/doctors',{
                params:{
                    _page: page,
                    _limit: limit,
                }
            })
            // @ts-ignore
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: res.data})
        } catch (e){
            dispatch({
                type:UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }

    }
}

export function setUserPage(page:number): UserAction{
    return {type: UserActionTypes.SET_USERS_PAGE, payload: page}
}

