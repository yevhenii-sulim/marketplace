import PropTypes from 'prop-types';
import { Contact, Img, Link, Title } from './ContactComponent.styled';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function ContactComponent({ nameDev, spec, link, img }) {
  return (
    <Contact>
      <Img>
        <img src={img} alt={nameDev} />
      </Img>
      <Title>
        <h4>{nameDev}</h4>
        <Link to={link}>
          <LinkedInIcon sx={{ color: '#0076B2' }} />
        </Link>
      </Title>
      <p>{spec}</p>
    </Contact>
  );
}
ContactComponent.propTypes = {
  nameDev: PropTypes.string.isRequired,
  spec: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
