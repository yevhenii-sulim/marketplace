import { useState } from "react";
import { FormField } from "./ProfilePage.styled";

export default function GenderSelect({ disabled, onChange }) {

  const [gender, setGender] = useState('');

  return (
    <FormField required={false}>
      {disabled ? (
        <>
          <p>Стать</p>
          <span>{gender || '-'}</span>
        </>
      ) : (
        <>
          <label>
            Оберіть стать
          </label>
          <select onChange={event => {
            onChange(event);
            setGender(event.target.value);
          }}>
            <option>Чоловік</option>
            <option>Жінка</option>
          </select>
        </>
      )}
    </FormField>
  );
}