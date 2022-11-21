import React from 'react';
import DoctorCard from '../DoctorCard';
import {IDoctorShort} from "../../../models/IDoctorShort";

type DoctorListProps = {
  doctors: IDoctorShort[];
};

const DoctorsList: React.FC<DoctorListProps> = ({ doctors }) => {
  return (
    <tr>
      {doctors.map(doctor => (
        <td key={doctor.id}>
          <DoctorCard {...doctor} />
        </td>
      ))}
    </tr>
  );
};

export default React.memo(DoctorsList);
