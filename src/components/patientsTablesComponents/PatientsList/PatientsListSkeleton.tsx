import React from 'react';
import PatientCardSkeleton from "../PatientCard/PatientCardSkeleton";

const PatientsListSkeleton = ({ pageSize }: { pageSize: number }) => {
  const patientsSkeletonArray = Array(pageSize).fill('');
  return (
    <ul >
      {patientsSkeletonArray.map((_, idx) => (
        <li key={idx} >
          <PatientCardSkeleton />
        </li>
      ))}
    </ul>
  );
};

export default PatientsListSkeleton;
