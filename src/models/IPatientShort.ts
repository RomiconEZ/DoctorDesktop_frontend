export interface IPatientShort{
    id: string
    first_name: string
    second_name: string
    patronymic: string
    birthday: number | Date
    age: number
    sex: boolean | number
    city: string
    clinic: string
    residenseregion: string
}
