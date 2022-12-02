export interface IPatientCreate{
    name: string
    surname: string
    patronymic: string
    birthdate: number | Date
    race: string
    sex: boolean | number
    region: string
    city: string
    residenseregion: string
}