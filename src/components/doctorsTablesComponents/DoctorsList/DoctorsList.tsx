import React from 'react';
import DoctorCard from '../DoctorCard';
import {IDoctorShort} from "../../../models/IDoctorShort";

type DoctorListProps = {
  doctors: IDoctorShort[];
};

const DoctorsList: React.FC<DoctorListProps> = ({ doctors }) => {
  return (
    <ul>
      {doctors.map(doctor => (
        <li key={doctor.id}>
          <DoctorCard {...doctor} />
        </li>
      ))}
    </ul>
  );
};

export default React.memo(DoctorsList);
