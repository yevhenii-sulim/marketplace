import PropTypes from 'prop-types';
import { LinkGoIn, LinkReg, Tytle } from './AuthArea.styled';
import GoogleSVG from 'SvgComponents/GoogleSVG/GoogleSVG';
import FacebookSVG from 'SvgComponents/FacebookSVG/FacebookSVG';
import FormEnter from 'components/FormAuth/FormAuth';

export default function EnterArea({ onClose, toggleWind }) {
  return (
    <>
      <Tytle>Вхiд</Tytle>
      <FormEnter onClose={onClose} />
      <LinkReg type="button" onClick={toggleWind}>
        Зареєструватись
      </LinkReg>
      <LinkGoIn>
        <GoogleSVG />
        <p>
          Продовжити через<span> Google</span>
        </p>
      </LinkGoIn>
      <LinkGoIn>
        <FacebookSVG />
        <p>
          Продовжити через<span> Facebook</span>
        </p>
      </LinkGoIn>
    </>
  );
}

EnterArea.propTypes = {
  onClose: PropTypes.func.isRequired,
  toggleWind: PropTypes.func.isRequired,
};
