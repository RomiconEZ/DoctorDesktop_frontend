import React from 'react';
import DoctorCardSkeleton from "../DoctorCard/DoctorCardSkeleton";
import Skeleton from "@mui/material/Skeleton";

const DoctorsListSkeleton = ({ pageSize }: { pageSize: number }) => {
  const doctorsSkeletonArray = Array(pageSize).fill('');
  return (
    < >
      {doctorsSkeletonArray.map((_, idx) => (
        <tr key={idx} >
          <td ><Skeleton variant='text' animation='wave' height={50} /></td>
          <td><Skeleton variant='text' animation='wave' height={50} /></td>
          <td><Skeleton variant='text' animation='wave' height={50} /></td>
          <td><Skeleton variant='text' animation='wave' height={50} /></td>
          <td><Skeleton variant='text' animation='wave' height={50} /></td>
        </tr>
      ))}
    </>
  );
};

export default DoctorsListSkeleton;
