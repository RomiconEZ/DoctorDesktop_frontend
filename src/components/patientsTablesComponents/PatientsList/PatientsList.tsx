import React from 'react';
import PatientCard from '../PatientCard';
import {IPatientShort} from "../../../models/IPatientShort";

type PatientsListProps = {
  patients: IPatientShort[];
};

const PatientsList: React.FC<PatientsListProps> = ({ patients }) => {
  return (
    <tr>
      {patients.map(patient => (
        <td key={patient.id}>
          <PatientCard {...patient} />
        </td>
      ))}
    </tr>
  );
};

export default React.memo(PatientsList);
