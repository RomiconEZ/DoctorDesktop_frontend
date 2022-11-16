
import React from 'react';
import { Link } from 'react-router-dom';
import {IPatientShort} from "../../../models/IPatientShort";

// нужно настроить стили
const PatientCard: React.FC <IPatientShort> = ({id, name, surname, patronymic, age, city, sex, region, residenseregion, birthdate }) => {

  return (
    <div >
      <Link to={`auth/menu/patients/${id}`}>
          <span>Фамилия Имя Отчество</span>
          <span>{surname + ' ' + name + ' ' + patronymic} </span>
      </Link>
    </div>
  );
};

export default PatientCard;
