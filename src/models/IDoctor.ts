
export interface IDoctor{
    id: number;
    name: string;
    surname: string;
    patronymic: string;
    birthday: string;
    profiled: string;//профиль(хирург)
    role: string;//пользовательский режим
    clinic: string;
    experience: number; //стаж работы
    region: string;
    post: string;//должность(врач)
}