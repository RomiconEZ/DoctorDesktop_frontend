import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";
import {Link} from "react-router-dom";
import {getPageCount, getPagesArray} from "./pages";
import {IDoctor} from "../models/IDoctor";
import {Simulate} from "react-dom/test-utils";



const TableDoctors = () => {
    const {doctors, error, loading, limit, page} = useTypedSelector(state => state.user)
    const {fetchUsers, setUserPage} = useActions()
    // const pages = [] as arr[];
    let pages: Array<any> = []
    const totalPages = getPageCount((doctors.length), limit)
    pages = getPagesArray(totalPages)

    useEffect(() => {
        fetchUsers(page, limit)
    },[page])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Фамилия Имя Отчество</th>
                    <th>Дата рождения</th>
                    <th>Роль</th>
                    <th>Профиль</th>
                    <th>Учреждение</th>
                    <th>ID</th>
                </tr>
                </thead>
                <tbody>
                {doctors.map(doctor =>
                    <tr key={doctor.id}>
                        <Link to={`/doctor/${doctor.id}`} state={{doctor}}><td>{doctor.surname+ ' ' + doctor.name + ' ' + doctor.patronymic}</td></Link>
                        <td>{doctor.birthday}</td>
                        <td>{doctor.role}</td>
                        <td>{doctor.profiled}</td>
                        <td>{doctor.clinic}</td>
                        <td>{doctor.id}</td>
                    </tr>
                )}
                </tbody>
            </table>

            <div style={{display: "flex"}}>
                {pages.map(p =>
                    <div onClick={() => setUserPage(p)}
                         style={{border: p === page ? '2px solid green' : '1px solid gray', padding: 10}}>
                        {p}
                    </div>
                )}
            </div>

        </div>
    );
};
export default TableDoctors;