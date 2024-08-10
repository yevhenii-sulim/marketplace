import ChangePassword from 'components/ChangePassword/ChangePassword';
import { Box, Title, Wrapper } from './RecoverPassword.styled';
export default function RecoverPassword() {
  return (
    <Wrapper>
      <Box>
        <Title>Зміна пароля</Title>
        <ChangePassword />
      </Box>
    </Wrapper>
  );
}
