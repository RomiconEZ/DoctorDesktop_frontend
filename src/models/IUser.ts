export interface IUser {
    id: number;
    name: string;
    surname: string
    patronymic: string
    region: string
    city: string
    placeofwork:string
    birthdate: number | Date
    sex: boolean
    workExperience: number
    occupation: string
    email: string;
    role: number;
    isActivated?: boolean;
    deleted_at?:  string;
    created_at?:  string;
    updated_at?:  string;

}
