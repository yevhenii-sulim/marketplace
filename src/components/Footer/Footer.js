import Logo from 'SvgComponents/LogoSVG/Logo';
import { Link } from 'react-router-dom';
import {
  About,
  AboutContent,
  Container,
  FooterContainer,
  LogoContainer,
  Confederacy,
  Sign,
  ContainerFooter,
} from './Footer.styled';

export default function Footer() {
  return (
    <FooterContainer>
      <Container>
        <ContainerFooter>
          <About>
            <LogoContainer>
              <Logo fill="#000000" />
            </LogoContainer>
            <AboutContent>Сервіс де продати і купити може кожен!</AboutContent>
          </About>
          <Confederacy>
            <div>
              <Link to="/agreement">Угода користувача </Link>
              <Link to="/confederacy">Політика конфіденційності</Link>
            </div>
            <Link to="/contacts">Наші контакти</Link>
          </Confederacy>
        </ContainerFooter>
        <Sign>© Розробка "Team Challenge" 2024. Усі права захищені.</Sign>
      </Container>
    </FooterContainer>
  );
}
