import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const PatientCardSkeleton = () => {
  return (
    <div >
        <Skeleton variant='text' animation='wave' height={20} />
    </div>
  );
};

export default PatientCardSkeleton;
