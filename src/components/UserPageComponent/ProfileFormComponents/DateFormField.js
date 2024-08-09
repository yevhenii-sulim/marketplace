import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DateInput, FormField } from "./ProfilePage.styled";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";

export default function DateFormField({ label, disabled, value, onChange }) {

  const convertDateToString = (value) => {
    if (value === '') {
      return;
    }

    const valueToDate = dayjs(value);

    const month = `${(valueToDate.toDate().getMonth() + 1 < 10) && '0'}${valueToDate.toDate().getMonth() + 1}`;
    const date = `${(valueToDate.toDate().getDate() < 10) ? '0' : ''}${valueToDate.toDate().getDate()}`;
    const fullYear = `${valueToDate.toDate().getFullYear()}`;

    return `${fullYear}-${month}-${date}`;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormField required={false}>
        {disabled ? (
          <>
            <p>
              {label}
            </p>
            <span>{convertDateToString(value) || '01-01-2024'}</span>
          </>
        ) : (
          <>
            <label>
              {label}
            </label>
            <DateInput>
              <DatePicker 
                onChange={value => {
                  onChange(convertDateToString(value));
                }}
                defaultValue={dayjs(value || '01-01-2024')} 
                disabled={disabled} 
              />
            </DateInput>
          </>
        )}
      </FormField>
    </LocalizationProvider>
  );
}