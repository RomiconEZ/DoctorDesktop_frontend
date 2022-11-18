import React from 'react';
import PatientCard from '../PatientCard';
import {IPatientShort} from "../../../models/IPatientShort";

type PatientsListProps = {
  patients: IPatientShort[];
};

const PatientsList: React.FC<PatientsListProps> = ({ patients }) => {
  return (
    <ul>
      {patients.map(patient => (
        <li key={patient.id}>
          <PatientCard {...patient} />
        </li>
      ))}
    </ul>
  );
};

export default React.memo(PatientsList);
