import React from 'react';
import Skeleton from "@mui/material/Skeleton";

const PatientsListSkeleton = ({ pageSize }: { pageSize: number }) => {
  const patientsSkeletonArray = Array(pageSize).fill('');
  return (
    <>
      {patientsSkeletonArray.map((_, idx) => (
          <tr key={idx} >
            <td ><Skeleton variant='text' animation='wave' height={50} /></td>
            <td><Skeleton variant='text' animation='wave' height={50} /></td>
            <td><Skeleton variant='text' animation='wave' height={50} /></td>
            <td><Skeleton variant='text' animation='wave' height={50} /></td>
            <td><Skeleton variant='text' animation='wave' height={50} /></td>
            <td><Skeleton variant='text' animation='wave' height={50} /></td>
            <td><Skeleton variant='text' animation='wave' height={50} /></td>
          </tr>
      ))}
    </>
  );
};

export default PatientsListSkeleton;
