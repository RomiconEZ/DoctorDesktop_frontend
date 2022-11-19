export interface IPatientCreate{
    name: string
    surname: string
    patronymic: string
    birthdate: number | Date
    race: string
    sex: boolean
    region: string
    city: string
    residenseregion: string
}