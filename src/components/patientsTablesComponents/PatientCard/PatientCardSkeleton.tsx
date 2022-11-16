import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const PatientCardSkeleton = () => {
  return (
    <div >
      <Skeleton variant='rectangular' animation='wave' height={150} />
      <Skeleton variant='text' animation='wave' height={50} />
      <Skeleton variant='text' animation='wave' height={50} />
    </div>
  );
};

export default PatientCardSkeleton;
