import { useState } from 'react';
import { BoxEye, Field, FieldPassword } from './ChangePassword.styled';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import HiddenPassword from 'SvgComponents/HiddenPassword/HiddenPassword';
import { theme } from 'utils/theme';

export default function FieldConfirmComponent({
  handleChange,
  setSubmitting,
  name,
  value,
  isConfirm,
  touched,
}) {
  const [visible, setVisible] = useState(false);
  function onToggleView() {
    setVisible(prev => !prev);
  }
  return (
    <FieldPassword>
      {visible ? (
        <Field
          type="text"
          name={name}
          value={value}
          onChange={e => {
            handleChange(e);
            setSubmitting(false);
          }}
          style={
            isConfirm
              ? {
                  border: 'none',
                  boxShadow: `inset 0 0 0 3px ${theme.color.colorTextErrorForm}`,
                }
              : {}
          }
        />
      ) : (
        <Field
          type="password"
          name={name}
          onChange={e => {
            handleChange(e);
            setSubmitting(false);
          }}
          style={
            isConfirm
              ? {
                  border: 'none',
                  boxShadow: `inset 0 0 0 3px ${theme.color.colorTextErrorForm}`,
                }
              : {}
          }
        />
      )}
      <BoxEye onClick={onToggleView} type="button">
        {visible ? <RemoveRedEyeOutlinedIcon /> : <HiddenPassword />}
      </BoxEye>
    </FieldPassword>
  );
}
