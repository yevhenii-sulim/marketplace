import { FormContainer, InputColumn, RedactContainer, RedactButton, CancelRedactingButton } from "./ProfilePage.styled";
import PasswordField from "./PasswordField";
import NewPasswordInput from "./NewPasswordInput";

export default function PasswordForm({ redacting, onSaveChanges, onCancelChanges, onStartRedacting }) {
  return (
    <>
      <FormContainer>
        <InputColumn width={'369px'}>
          <PasswordField
            label='Старий пароль'
            placeholder='Введіть старий пароль'
          />
          {redacting ? (
            <NewPasswordInput />
          ) : null}
        </InputColumn>
      </FormContainer>
      <RedactContainer>
        {redacting ? (
          <>
            <RedactButton onClick={() => onSaveChanges()}>
              Зберегти
            </RedactButton>
            <CancelRedactingButton onClick={() => onCancelChanges()}>
              Скасувати
            </CancelRedactingButton>
          </>
        ) : (
          <RedactButton onClick={() => onStartRedacting()}>
            Редагувати
          </RedactButton>
        )}
      </RedactContainer>
    </>
  )
}