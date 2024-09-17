import { FormField } from './ProfilePage.styled';

export default function GenderSelect({ disabled, value, onChange }) {
  return (
    <FormField required={false}>
      {disabled ? (
        <>
          <p>Стать</p>
          <span>{value && (value === 'male' ? 'Чоловік' : 'Жінка')}</span>
        </>
      ) : (
        <>
          <label>Оберіть стать</label>
          <select
            onChange={event => {
              onChange(event);
            }}
          >
            <option disabled>Оберіть стать</option>
            <option value="male">Чоловіча</option>
            <option value="female">Жіноча</option>
          </select>
        </>
      )}
    </FormField>
  );
}
