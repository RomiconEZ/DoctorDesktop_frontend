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
            <tr key={patient.id} onClick={() => navigate(`/auth/menu/patients/${patient.id}`)}>
              <td >{patient.first_name + ' ' + patient.first_name + ' ' + patient.patronymic}</td>
              <td>{patient.birthday}</td>
              <td>{patient.age}</td>
              <td>{patient.sex}</td>
              <td>{patient.residenseregion}</td>
                <td>{patient.city}</td>
                <td>{patient.clinic}</td>
            </tr>
        ))}
      </>
  );
};

export default React.memo(PatientsList);
