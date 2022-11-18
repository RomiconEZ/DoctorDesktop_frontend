import { SelectProps as MuiSelectProps } from '@mui/material';
import React from 'react';
import {OptionsItemType} from "../../common/Fields/SelectField/SelectField";
import {SelectField} from "../../common/Fields";

type PatientsDisplayCountProps = MuiSelectProps & {
  count: number;
  setCount: (e: any) => void;
  options: OptionsItemType[];
};

const PatientsDisplayCount: React.FC<PatientsDisplayCountProps> = ({ count, setCount, options }) => {
  return (
    <SelectField
      style={{ minWidth: '140px' }}
      name='pageSize'
      autoWidth={true}
      label='Отображать по'
      value={String(count)}
      onChange={e => setCount(e)}
      options={options}
    />
  );
};

export default PatientsDisplayCount;
