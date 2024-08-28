import { FormField } from "./ProfilePage.styled"

export default function PhoneNumberFormField({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  disabled, 
  width
}) {

  return (
    <FormField $width={width}>
      {disabled ? (
        <>
          <p>{label}</p>
          <span>{value}</span>
        </>
      ) : (
        <>
          <label>
            {label}
          </label>
          <input 
            type="tel" 
            placeholder={placeholder} 
            defaultValue={value}
            onChange={onChange} 
          />
        </>
      )}
    </FormField>
  )
}