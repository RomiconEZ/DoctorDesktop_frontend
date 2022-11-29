import {IDoctorFull} from "./IDoctorFull";

export const initialDoctorState: IDoctorFull={
    id: -1,
    name: "",
    surname: "",
    patronymic: "",
    birthdate: 0,
    sex: 1,
    workExperience: -1,
    region: "", // значение из списка
    city: "", // значение из списка
    placeOfWork: "", // значение из списка
    occupation: "" ,// значение из списка
    email: "",
    role: -1, // значение из списка
}