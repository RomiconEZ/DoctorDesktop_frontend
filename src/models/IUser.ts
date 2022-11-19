export interface IUser {
    id: string;
    name: string;
    surname: string
    patronymic: string
    region: string
    city: string
    placeofwork:string
    birthdate: number | Date
    sex: string
    workExperience: number
    occupation: string
    email: string;
    role: number;
    isActivated?: boolean;
}
