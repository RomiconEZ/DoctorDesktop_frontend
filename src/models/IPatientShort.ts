export interface IPatientShort{
    id: string
    name: string
    surname: string
    patronymic: string
    birthdate: number | Date
    age: number
    sex: boolean | number
    region: string
    city: string
    residenseregion: string
}
