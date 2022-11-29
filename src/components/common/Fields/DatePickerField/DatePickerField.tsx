import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField, TextFieldProps} from '@mui/material';
import ruLocale from 'date-fns/locale/ru';
import React from 'react';

type DatePickerFieldProps = DatePickerProps<any, any> & {
  label: string;
  value: Date | number;
  minDate: Date | number;
  name: string;
  error?: string;
};

const DatePickerField: React.FC<DatePickerFieldProps> = ({label, name, value, minDate, onChange, error, ...rest}) => {
  const convertToDefEventParam = (name: string, value: Date | number | null) => ({
    target: {
      name,
      value: new Date(Number(value)).getTime(),
    },
  });

  return (
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ruLocale}>
        <DatePicker
            mask='__.__.____'
            label={label}
            value={value}
            minDate={minDate || Date.now()}
            InputProps={{placeholder: 'ДД.ММ.ГГГГ'}}
            onChange={(date: number | Date | null) => {
              onChange(convertToDefEventParam(name, date));
            }}
            renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField {...params} {...(error && { error: true, helperText: error })} />}
      />
    </LocalizationProvider>
  );
};

export default React.memo(DatePickerField);
