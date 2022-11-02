import React, {useState} from "react";
import {Link} from "react-router-dom";
import {doctors} from "./doctors";

const TableDoctor = () =>{
    return(
        <div>
            <table>
                <thead>
                <th>Фамилия Имя Отчество</th>
                <th>Дата рождения</th>
                <th>Учреждение</th>
                <th>Профиль</th>
                <th>Роль</th>
                <th>ID</th>
                </thead>
                <tbody>
                {doctors.map((doctor)=>(
                    <tr>
                        <Link to={`/CardDoctor`} state={{ doctor}}>
                            <td>{doctor.SurNamePatronymic}</td>
                        </Link>
                        <td>{doctor.DateOfBirth}</td>
                        <td>{doctor.PlaceOfWork}</td>
                        <td>{doctor.DoctorProfile}</td>
                        <td>{doctor.Role}</td>
                        <td>{doctor.id}</td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    )
}
export default TableDoctor