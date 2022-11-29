import React from 'react';
import {SelectField} from "../../common/Fields";

const patientsSortArray = [
  { name: 'По убыванию возраста', value: { path: 'age', order: 'desc' } },
  { name: 'По возрастанию возраста', value: { path: 'age', order: 'asc' } },
];

type PatientsSortProps = {
  sortBy: { path: string; order: 'asc' | 'desc' };
  onSort: (event: any) => void;
};

const PatientsSort: React.FC<PatientsSortProps> = ({ sortBy, onSort }) => {
  return (
    <SelectField
      name='patientSort'
      style={{ minWidth: '200px' }}
      label='Сортировать'
      value={JSON.stringify(sortBy)}
      onChange={onSort}
      options={patientsSortArray}
    />
  );
};

export default PatientsSort;
