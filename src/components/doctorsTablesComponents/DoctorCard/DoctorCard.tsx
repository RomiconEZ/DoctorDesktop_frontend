
import React from 'react';
import { Link } from 'react-router-dom';
import {IDoctorShort} from "../../../models/IDoctorShort";

// нужно настроить стили
const DoctorCard: React.FC <IDoctorShort> = ({ id, name, surname, patronymic, age, workExperience, placeOfWork, city, }) => {

  return (
    <div >
      <Link to={`/doctors/${id}`}>

      </Link>
    </div>
  );
};

export default DoctorCard;
