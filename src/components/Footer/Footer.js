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
import { windowScrollTop } from 'utils/windowScrollTop';

export default function Footer() {
  return (
    <FooterContainer>
      <Container>
        <ContainerFooter>
          <About>
            <LogoContainer onClick={windowScrollTop}>
              <Logo fill="#000000" />
            </LogoContainer>
            <AboutContent>Сервіс де продати і купити може кожен!</AboutContent>
          </About>
          <Confederacy>
            <div>
              <Link to="/agreement" onClick={windowScrollTop}>
                Угода користувача
              </Link>
              <Link to="/confederacy" onClick={windowScrollTop}>
                Політика конфіденційності
              </Link>
            </div>
            <Link to="/contacts" onClick={windowScrollTop}>
              Наші контакти
            </Link>
          </Confederacy>
        </ContainerFooter>
        <Sign>© Розробка "Team Challenge" 2024. Усі права захищені.</Sign>
        <a href="https://rzekl.com/g/1e8d114494a44cfda69c16525dc3e8/" target="_blank" rel="noopener noreferrer">
        Перейти до магазину
      </a>
      </Container>
    </FooterContainer>
  );
}
