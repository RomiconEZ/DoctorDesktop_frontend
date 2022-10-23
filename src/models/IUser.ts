export interface IUser {
    id: number;
    name: string;
    surname: string
    patronymic: string
    region: string
    city: string
    placeofwork:string
    email: string;
    role: number;
    isActivated?: boolean;
}
