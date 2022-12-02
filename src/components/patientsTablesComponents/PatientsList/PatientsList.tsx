import React from 'react';
import {IPatientShort} from "../../../models/IPatientShort";
import {useNavigate} from "react-router-dom";

type PatientsListProps = {
  patients: IPatientShort[];
};

const PatientsList: React.FC<PatientsListProps> = ({ patients }) => {
  const navigate = useNavigate();

  return (
      <>
        {patients.map(patient => (
            <tr
                key={patient.id}
                onClick={() => navigate(`/auth/menu/patients/${patient.id}`)}
                className="transition duration-300 ease-in-out hover:bg-gray-main-theme"
            >
              <td className="px-6 py-1 font-semibold text-green-active-icon">{patient.surname + ' ' + patient.name + ' ' + patient.patronymic}</td>
              <td className="px-6 py-1 text-gray-non-active">{patient.birthdate}</td>
              <td className="px-6 py-1 text-gray-non-active">{patient.age + " лет"}</td>
                {patient.sex == 1 && <td className="px-6 py-1 text-gray-non-active">мужской</td>}
                {patient.sex == 0 && <td className="px-6 py-1 text-gray-non-active">женский</td>}
              <td className="px-6 py-1 text-gray-non-active">{patient.region}</td>
              <td className="px-6 py-1 text-gray-non-active">{patient.city}</td>
              <td className="px-6 py-1 text-gray-non-active">{patient.residenseregion}</td>
            </tr>
        ))}
      </>
  );
};

export default React.memo(PatientsList);
