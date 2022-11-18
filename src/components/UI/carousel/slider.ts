
const PatientList: string = "auth/menu/patients"
const DoctorsList: string = "auth/menu/doctors"
const AddPatient: string = "auth/menu/addpatient"
const AddDoctor: string = "auth/menu/addpdoctor"



export const sliderContent_doctor = [
    {
        page: 1,
        body: [
            {
                title: "Пациенты",
                id: 1,
                sections:
                    [
                        {
                        // section_one:
                        id: 1,
                        name: "Список пациентов",
                        to: PatientList,


                    },
                        {
                        // section_two:
                        id: 2,
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
                            // section_one:
                            id: 1,
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
                            id: 1,
                            name: "Остальное",
                            to: "auth/menu",

                        },
                    ],
            }

            ]
    },
    {
        page: 2,
        body: [{
            title: "Остальное",
            id: 1,
            sections:
                [
                    {
                        id: 1,
                        name: "Остальное",
                        to: "auth/menu",

                    },
                ],
        }]
    },
];




export const sliderContent_admin = sliderContent_doctor
export const sliderContent_registry =  sliderContent_doctor
export const sliderContent_developer = sliderContent_doctor
export const sliderContent_codeveloper = sliderContent_doctor
export const sliderContent_expert = sliderContent_doctor
export const sliderContent_dataadmin = sliderContent_doctor