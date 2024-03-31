import { Backdrop, Container, LinkGoIn, LinkReg } from './EnterArea.styled';
import GoogleSVG from 'SvgComponents/GoogleSVG/GoogleSVG';
import FacebookSVG from 'SvgComponents/FacebookSVG/FacebookSVG';
import FormEnter from 'components/FormEnter/FormEnter';

export default function EnterArea({ onClose }) {
  return (
    <Backdrop>
      <Container>
        <h2>Вхiд</h2>
        <FormEnter onClose={onClose} />
        <LinkReg>Зареєструватись</LinkReg>
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
      </Container>
    </Backdrop>
  );
}
