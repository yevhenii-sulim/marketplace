import Logo from 'SvgComponents/LogoSVG/Logo';
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
import { Link } from 'react-router-dom';

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
            <Link to="/agreement">Угода користувача </Link>
            <Link to="/confederacy">Політика конфіденційності</Link>
          </Confederacy>
          <Link to="/contacts">Наші контакти</Link>
        </ContainerFooter>
        <Sign>© Розробка "Team Challenge" 2024. Усі права захищені.</Sign>
      </Container>
    </FooterContainer>
  );
}
