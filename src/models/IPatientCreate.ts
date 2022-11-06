export interface IPatientCreate{
    name: string
    surname: string
    patronymic: string
    birthdate: number | Date
    sex: string
    region: string
    city: string
    residenseregion: string
}