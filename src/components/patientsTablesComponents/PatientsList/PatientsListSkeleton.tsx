import React from 'react';
import PatientCardSkeleton from "../PatientCard/PatientCardSkeleton";

const PatientsListSkeleton = ({ pageSize }: { pageSize: number }) => {
  const patientsSkeletonArray = Array(pageSize).fill('');
  return (
    <tr >
      {patientsSkeletonArray.map((_, idx) => (
        <td key={idx} >
          <PatientCardSkeleton />
        </td>
      ))}
    </tr>
  );
};

export default PatientsListSkeleton;
