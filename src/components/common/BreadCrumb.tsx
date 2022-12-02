import React from "react";

// https://github.com/icd2k3/use-react-router-breadcrumbs.git

export const DynamicEditDoctorBreadcrumb = ({ match }: {  match: any }) => (
    <span>Редактирование сотрудника: {match.params.id}</span>
);
export const DynamicDoctorBreadcrumb = ({ match }: {  match: any }) => (

    <span>Сотрудник: {match.params.id}</span>
);
export const DynamicPatientBreadcrumb = ({ match }: {  match: any }) => (
    <span>Пациент: {match.params.id}</span>
);


// define custom breadcrumbs for certain routes.
// breadcrumbs can be components or strings.
export const routes = [
    { path: "/auth/menu", breadcrumb: " Меню " },
    { path: "/auth", breadcrumb: null },
    { path: "/", breadcrumb: null },
    { path: "/auth/menu/newpatient", breadcrumb: " Создать пациента " },
    { path: "/auth/menu/newdoctor", breadcrumb: " Создать сотрудника " },
    { path: "/auth/menu/patients", breadcrumb: " Список пациентов " },
    { path: "/auth/menu/doctors", breadcrumb: " Список сотрудников " },
    { path: "/auth/menu/selfpage", breadcrumb: " Личная страница " },
    { path: "/auth/menu/doctors/editdoctor", breadcrumb: null },
    { path: "/auth/menu/doctors/editdoctor/:id", breadcrumb: DynamicEditDoctorBreadcrumb },
    { path: "/auth/menu/doctors/:id", breadcrumb: DynamicDoctorBreadcrumb },
    { path: "/auth/menu/patients/:id", breadcrumb: DynamicPatientBreadcrumb },

];