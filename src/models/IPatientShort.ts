export interface IPatientShort{
    id: number
    name: string
    surname: string
    patronymic: string
    birthdate: number | Date
    age: number
    sex: boolean
    region: string
    city: string
    residenseregion: string
}
