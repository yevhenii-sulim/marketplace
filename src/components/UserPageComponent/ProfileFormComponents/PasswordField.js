import { FormField, PasswordInput, PasswordToggleButton } from "./ProfilePage.styled";
import { useState } from "react";
import EyeSvg from 'SvgComponents/PasswordEyeSVG/PasswordEyeSvg';
import ClosedEyeSvg from "SvgComponents/PasswordClosedEyeSVG/PasswordClosedEyeSvg";

export default function PasswordField({ label, placeholder }) {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <FormField>
        <label>
          {label}
        </label>
        <PasswordInput>
          <input 
            type={`${showPassword ? 'text' : 'password'}`} 
            placeholder={placeholder}
            readOnly
          />
          {showPassword ? (
            <PasswordToggleButton onClick={() => setShowPassword(!showPassword)}>
              <EyeSvg />
            </PasswordToggleButton>
          ) : (
            <PasswordToggleButton onClick={() => setShowPassword(!showPassword)}>
              <ClosedEyeSvg />
            </PasswordToggleButton>
          )}
        </PasswordInput>
      </FormField>
    </>
  )
}