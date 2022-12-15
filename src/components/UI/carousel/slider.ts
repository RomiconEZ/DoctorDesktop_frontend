import {ISlideContent} from "./index";

const PatientList: string = "patients"
const DoctorsList: string = "doctors"
const CreateDoctor: string = "newdoctor"

const AddPatient: string = "newpatient"
const GraphInter: string = "graphinter"




export const sliderContent_doctor: ISlideContent[] = [
            {
                title: "Пациенты",
                id: 1,
                sections:
                    [
                        {
                            id: 1,
                        name: "Список пациентов",
                        to: PatientList,

                    },
                        {
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
                            name: "DICOM",
                            to: GraphInter,

                        },

                    ],
            },

];

export const sliderContent_admin: ISlideContent[] = [
    {
        title: "Врачи/сотрудники",
        id: 2,
        sections:
            [
                {
                    id: 1,
                    name: "Список сотрудников",
                    to: DoctorsList,

                },
                {
                    id: 2,
                    name: "Создание доктора",
                    to: CreateDoctor,

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
                    name: "DICOM",
                    to: GraphInter,

                },

            ],
    },

];

export const sliderContent_registry: ISlideContent[] = [
    {
        title: "Пациенты",
        id: 1,
        sections:
            [
                {
                    id: 1,
                    name: "Список пациентов",
                    to: PatientList,

                },
                {
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
                    name: "DICOM",
                    to: GraphInter,

                },

            ],
    },

];

export const sliderContent_developer: ISlideContent[] = [
    {
        title: "Пациенты",
        id: 1,
        sections:
            [
                {
                    id: 1,
                    name: "Список пациентов",
                    to: PatientList,

                },
                {
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
                    id: 1,
                    name: "Список сотрудников",
                    to: DoctorsList,

                },


                //этой кнопки быть не должно
                {
                    id: 2,
                    name: "Создание доктора",
                    to: CreateDoctor,

                },
                //


            ],
    },
    {
        title: "Остальное",
        id: 3,
        sections:
            [
                {
                    id: 1,
                    name: "DICOM",
                    to: GraphInter,

                },

            ],
    },

];

export const sliderContent_codeveloper: ISlideContent[] = [
    {
        title: "Пациенты",
        id: 1,
        sections:
            [
                {
                    id: 1,
                    name: "Список пациентов",
                    to: PatientList,

                },
            ],
    },
    {
        title: "Врачи/сотрудники",
        id: 2,
        sections:
            [
                {
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
                    name: "DICOM",
                    to: GraphInter,

                },

            ],
    },

];

export const sliderContent_expert: ISlideContent[] = [
    {
        title: "Пациенты",
        id: 1,
        sections:
            [
                {
                    id: 1,
                    name: "Список пациентов",
                    to: PatientList,

                },
                {
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
                    name: "DICOM",
                    to: GraphInter,

                },

            ],
    },

];

export const sliderContent_dataadmin = sliderContent_admin

export const sliderContent_demo: ISlideContent[] = [
    {
        title: "Пациенты",
        id: 1,
        sections:
            [
                {
                    id: 1,
                    name: "Список пациентов",
                    to: PatientList,

                },
                {
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
                    id: 1,
                    name: "Список сотрудников",
                    to: DoctorsList,

                },
                {
                    id: 2,
                    name: "Создание доктора",
                    to: CreateDoctor,

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
                    name: "DICOM",
                    to: GraphInter,

                },

            ],
    },

];
