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
            <tr
                onClick={() => navigate(`/auth/menu/doctors/${doctor.id}`)}
                key={doctor.id}
                className="transition duration-300 ease-in-out hover:bg-gray-main-theme"
            >

                <td className="px-6 py-1 font-semibold text-green-active-icon">{doctor.surname + ' ' + doctor.name + ' ' + doctor.patronymic}</td>
                <td className="px-6 py-1 text-gray-non-active">{doctor.age}</td>
                <td className="px-6 py-1 text-gray-non-active">{doctor.workExperience}</td>
                <td className="px-6 py-1 text-gray-non-active">{doctor.placeOfWork}</td>
                <td className="px-6 py-1 text-gray-non-active">{doctor.id}</td>

            </tr>
        ))}
      </>
  );
};

export default React.memo(DoctorsList);
