
import React from 'react';
import { Link } from 'react-router-dom';
import {IDoctorShort} from "../../../models/IDoctorShort";

// НЕ ИСПОЛЬЗУЕТСЯ
const DoctorCard: React.FC <IDoctorShort> = ({ id, name, surname, patronymic, age, workExperience, placeOfWork, city, }) => {

  return (

        <>
          <td>{surname + ' ' + name + ' ' + patronymic}</td>
          <td>{age}</td>
          <td>{workExperience}</td>
          <td>{placeOfWork}</td>
          <td>{id}</td>
        </>

  );
};

export default DoctorCard;
