export interface IPatientCreate{
    encryption?: string
    name: string
    surname: string
    patronymic: string
    birthdate: string | number
    sex: string
    region: string
    city: string
    residenseregion: string
}