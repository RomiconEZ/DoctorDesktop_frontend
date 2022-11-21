import React from 'react';
import DoctorCardSkeleton from "../DoctorCard/DoctorCardSkeleton";

const DoctorsListSkeleton = ({ pageSize }: { pageSize: number }) => {
  const doctorsSkeletonArray = Array(pageSize).fill('');
  return (
    <tr >
      {doctorsSkeletonArray.map((_, idx) => (
        <td key={idx} >
          <DoctorCardSkeleton />
        </td>
      ))}
    </tr>
  );
};

export default DoctorsListSkeleton;
