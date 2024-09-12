import ChangePassword from 'components/ChangePassword/ChangePassword';
import { Box, Title, Wrapper } from './RecoverPassword.styled';
export default function RecoverPassword() {
  return (
    <Wrapper>
      <Box>
        <Title>Новий пароль</Title>
        <ChangePassword />
      </Box>
    </Wrapper>
  );
}
