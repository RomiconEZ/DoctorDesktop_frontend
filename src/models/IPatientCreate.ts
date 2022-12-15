export interface IPatientCreate{
    first_name: string
    second_name: string
    patronymic: string
    birthday: number | Date
    race: string
    sex: boolean | number
    clinic: string,
    residenseregion: string
}