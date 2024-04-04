import PropTypes from 'prop-types';
import { Contact, Link } from './ContactComponent.styled';
import LinkedinSvg from 'SvgComponents/LinkedinSVG/LinkedinSvg';

export default function ContactComponent({ nameDev, spec, link }) {
  return (
    <Contact>
      <h4>{nameDev}</h4>
      <p>{spec}</p>
      <Link to={link}>
        <LinkedinSvg />
      </Link>
    </Contact>
  );
}
ContactComponent.propTypes = {
  nameDev: PropTypes.string.isRequired,
  spec: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
