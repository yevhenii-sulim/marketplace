import PropTypes from 'prop-types';
import { LinkReg, Tytle } from './AuthArea.styled';
import ContinueVia from 'components/ContinueVia/ContinueVia';
import FormAuth from 'components/FormAuth/FormAuth';

export default function AuthArea({ onClose, toggleWind }) {
  return (
    <>
      <Tytle>Вхiд</Tytle>
      <FormAuth onClose={onClose} />
      <LinkReg type="button" onClick={toggleWind}>
        Зареєструватись
      </LinkReg>
      <ContinueVia/>
    </>
  );
}

AuthArea.propTypes = {
  onClose: PropTypes.func.isRequired,
  toggleWind: PropTypes.func.isRequired,
};
