// export interface IUser {
//     id: number;
//     name: string;
//     email: string;
// }

export interface Login {
    email:string
    password: string
}
export interface Login_response {
    email:string
    isActivated: boolean
    id: string
}

export interface Registration {
    email:string
    password: string
}
export interface Registration_response  {
    email:string
    isActivated: boolean
    id: string
}

export interface getAllPatients{
    encryption: string
    name: string
    surname: string
    patronymic: string
    residenseRegion: string
}
export interface getAllPatients_response{
    name: string
    surname: string
    patronymic: string
    birthDate: string
    sex: boolean
    residenseRegion: string

}

export interface getDoctor{
    name: string
    surname: string
    patronymic: string
    birthDate: string
    age: number
    workExperience: number
    residenseRegion: string
    city: string
    placeOfWork: string
}

