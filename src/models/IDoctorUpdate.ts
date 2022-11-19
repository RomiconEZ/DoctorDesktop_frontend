export interface IDoctorUpdate{
    id: string
    name?: string
    surname?: string
    patronymic?: string
    birthdate?: number
    sex?: string
    workExperience?: number
    region?: string // значение из списка
    city?: string // значение из списка
    placeOfWork?: string // значение из списка
    occupation?: string // значение из списка
    email?: string
    password?: string
    role?: number // значение из списка
}