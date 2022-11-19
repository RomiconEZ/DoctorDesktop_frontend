import {IUser} from "../IUser";

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser; // ? не должно быть, но возникает проблема с полученим юзера
}
