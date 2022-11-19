export interface IDoctorCreate{
    name: string
    surname: string
    patronymic: string
    birthdate: number
    sex: boolean
    workExperience: number
    region: string // значение из списка
    city: string // значение из списка
    placeOfWork: string // значение из списка
    occupation: string // значение из списка
    email: string
    password: string
    role: number
}