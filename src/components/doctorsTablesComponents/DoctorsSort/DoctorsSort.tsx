import React from 'react';
import {SelectField} from "../../common/Fields";

const doctorsSortArray = [
  { name: 'По убыванию возраста', value: { path: 'age', order: 'desc' } },
  { name: 'По возрастанию возраста', value: { path: 'age', order: 'asc' } },
  { name: 'По убыванию опыта', value: { path: 'workExperience', order: 'desc' } },
  { name: 'По возрастанию опыта', value: { path: 'workExperience', order: 'asc' } },
];

type DoctorsSortProps = {
  sortBy: { path: string; order: 'asc' | 'desc' };
  onSort: (event: any) => void;
};

const DoctorsSort: React.FC<DoctorsSortProps> = ({ sortBy, onSort }) => {
  return (
    <SelectField
      name='roomSort'
      style={{ minWidth: '200px' }}
      label='Сортировать'
      value={JSON.stringify(sortBy)}
      onChange={onSort}
      options={doctorsSortArray}
    />
  );
};

export default DoctorsSort;
