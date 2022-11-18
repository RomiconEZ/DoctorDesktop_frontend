import React from 'react';
import DoctorCardSkeleton from "../DoctorCard/DoctorCardSkeleton";

const DoctorsListSkeleton = ({ pageSize }: { pageSize: number }) => {
  const doctorsSkeletonArray = Array(pageSize).fill('');
  return (
    <ul >
      {doctorsSkeletonArray.map((_, idx) => (
        <li key={idx} >
          <DoctorCardSkeleton />
        </li>
      ))}
    </ul>
  );
};

export default DoctorsListSkeleton;
