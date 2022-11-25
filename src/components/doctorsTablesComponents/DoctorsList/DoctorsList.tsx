import React from 'react';
import {IDoctorShort} from "../../../models/IDoctorShort";
import {useNavigate} from "react-router-dom";

type DoctorListProps = {
  doctors: IDoctorShort[];
};

const DoctorsList: React.FC<DoctorListProps> = ({ doctors }) => {
    const navigate = useNavigate();

    return (

      <>
      {doctors.map(doctor => (
            <tr key={doctor.id} onClick={() => navigate(`/auth/menu/doctors/${doctor.id}`)}>
                <td >{doctor.surname + ' ' + doctor.name + ' ' + doctor.patronymic}</td>
                <td>{doctor.age}</td>
                <td>{doctor.workExperience}</td>
                <td>{doctor.placeOfWork}</td>
                <td>{doctor.id}</td>
            </tr>
        ))}
      </>
  );
};

export default React.memo(DoctorsList);
