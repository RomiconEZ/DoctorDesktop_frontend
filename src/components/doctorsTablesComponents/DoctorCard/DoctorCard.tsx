
import React from 'react';
import { Link } from 'react-router-dom';
import {IDoctorShort} from "../../../models/IDoctorShort";

// нужно настроить стили
const DoctorCard: React.FC <IDoctorShort> = ({ id, name, surname, patronymic, age, workExperience, placeOfWork, city, }) => {

  return (
    <div >
      <Link to={`auth/menu/doctors/${id}`}>
          <span>Фамилия Имя Отчество</span>
          <span>{surname + ' ' + name + ' ' + patronymic} </span>
      </Link>
    </div>
  );
};

export default DoctorCard;
