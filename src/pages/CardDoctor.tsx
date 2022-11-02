import React from "react";
import {useLocation} from "react-router-dom";

const CardDoctor = () =>{
    const location = useLocation()
    const {doctor} = location.state

    return(
        <div>
            <h1>Карточка сотрудника</h1>
            <ul>
                <li>
                    <span>ФИО</span>
                    <p>{doctor.SurNamePatronymic}</p>
                </li>
                <li>
                    <span>Дата рождения</span>
                    <p>40 лет</p>
                </li>
                <li>
                    <span>Должность</span>
                    <p>{doctor.DoctorProfile}</p>
                </li>
                <li>
                    <span>Пользовательский режим</span>
                    <p>врач-эксперт</p>
                </li>
                <li>
                    <span>Стаж</span>
                    <p>10 лет</p>
                </li>
                <li>
                    <span>Регион</span>
                    <p>Ленинградская область</p>
                </li>
                <li>
                    <span>Учреждение</span>
                    <p>Пирогова</p>
                </li>
                <li>
                    <span>Профиль</span>
                    <p>кардио-хирург</p>
                </li>
            </ul>
        </div>
    );
}

export default CardDoctor