import {ISlideContent} from "./index";

const PatientList: string = "/auth/menu/patients"
const DoctorsList: string = "/auth/menu/doctors"
const AddPatient: string = "/auth/menu/newpatient"
const AddDoctor: string = "/auth/menu/newdoctor"
const Menu: string = ""




export const sliderContent_doctor: ISlideContent[] = [
            {
                title: "Пациенты",
                id: 1,
                sections:
                    [
                        {

                        name: "Список пациентов",
                        to: PatientList,

                    },
                        {

                        name: "Добавить пациента",
                        to: AddPatient,

                        }
                    ],
            },
            {
                title: "Врачи/сотрудники",
                id: 2,
                sections:
                    [
                        {

                            name: "Список сотрудников",
                            to: DoctorsList,

                        },
                    ],
            },
            {
                title: "Остальное",
                id: 3,
                sections:
                    [
                        {
                            name: "Остальное",
                            to: Menu,

                        },
                    ],
            },
    {
        title: "Остальное",
        id: 4,
        sections:
            [
                {
                    name: "Остальное",
                    to: Menu,

                },
            ],
    },
    {
        title: "Остальное",
        id: 5,
        sections:
            [
                {
                    name: "Остальное",
                    to: Menu,

                },
            ],
    },
    {
        title: "Остальное",
        id: 6,
        sections:
            [
                {
                    name: "Остальное",
                    to: Menu,

                },
            ],
    },
    {
        title: "Остальное",
        id: 7,
        sections:
            [
                {
                    name: "Остальное",
                    to: Menu,

                },
            ],
    },


];




export const sliderContent_admin = sliderContent_doctor
export const sliderContent_registry =  sliderContent_doctor
export const sliderContent_developer = sliderContent_doctor
export const sliderContent_codeveloper = sliderContent_doctor
export const sliderContent_expert = sliderContent_doctor
export const sliderContent_dataadmin = sliderContent_doctor