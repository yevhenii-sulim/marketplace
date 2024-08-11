import { useState } from 'react';
import { BoxEye, Field, FieldPassword, UnView } from './ChangePassword.styled';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

export default function FieldPasswordComponent({
  handleChange,
  setSubmitting,
  name,
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
          onChange={e => {
            handleChange(e);
            setSubmitting(false);
          }}
        />
      ) : (
        <Field
          type="password"
          name={name}
          onChange={e => {
            handleChange(e);
            setSubmitting(false);
          }}
        />
      )}
      <BoxEye onClick={onToggleView} type="button">
        {visible && <UnView></UnView>}
        <RemoveRedEyeOutlinedIcon />
      </BoxEye>
    </FieldPassword>
  );
}
