import {IDoctorFull} from "./IDoctorFull";

export const initialDoctorState: IDoctorFull={
    id: "",
    name: "",
    surname: "",
    patronymic: "",
    birthdate: 0,
    sex: true,
    workExperience: -1,
    region: "", // значение из списка
    city: "", // значение из списка
    placeOfWork: "", // значение из списка
    occupation: "" ,// значение из списка
    email: "",
    role: 3, // значение из списка
}