export interface IUser {
    id: number;
    name: string;
    surname: string
    patronymic: string
    region: string
    city: string
    placeOfWork:string
    birthdate: number | Date
    sex: boolean | number
    workExperience: number
    occupation: string
    email: string;
    role: number;
    isActivated?: boolean;

}
