export interface IUser {
    id: number;
    name: string;
    surname: string
    patronymic: string
    region: string
    city: string
    placeofwork:string
    birthdate: number
    sex: string
    workExperience: number
    occupation: string
    email: string;
    role: number;
    isActivated?: boolean;
}
