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
                  className="transition duration-300 ease-in-out hover:bg-our-gray-main-theme"
              >
                  <td className="px-6 py-1 font-semibold text-our-greenish-300">{patient.surname + ' ' + patient.name + ' ' + patient.patronymic}</td>
                  <td className="px-6 py-1 text-slate-700">{patient.birthdate}</td>
                  <td className="px-6 py-1 text-slate-700">{patient.age + " лет"}</td>
                  {patient.sex == 1 && <td className="px-6 py-1 text-slate-700">мужской</td>}
                  {patient.sex == 0 && <td className="px-6 py-1 text-slate-700">женский</td>}
                  <td className="px-6 py-1 text-slate-700">{patient.region}</td>
                  <td className="px-6 py-1 text-slate-700">{patient.city}</td>
                  <td className="px-6 py-1 text-slate-700">{patient.residenseregion}</td>
              </tr>
          ))}
      </>
  );
};

export default React.memo(PatientsList);
