import AddAnnouncement from 'components/AddAnnouncement/AddAnnouncement';
import Logo from 'SvgComponents/LogoSVG/Logo';
import Search from 'components/Search/Search';
import OpenCategory from 'components/OpenCategory/OpenCategory';
import Auxiliary from 'components/Auxiliary/Auxiliary';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { Container, HeaderContainer, NavContainer } from './Header.styled';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
const dpr = window.devicePixelRatio;
export default function Header() {
  const { width } = useWindowDimensions();

  return (
    <HeaderContainer>
      <Container>
        {width / dpr < 1440 && <BurgerMenu />}
        <NavContainer>
          <Logo fill="#ffffff" />
          {width / dpr >= 1440 && <OpenCategory />}
        </NavContainer>
        {width / dpr >= 1440 && <Search />}
        <Auxiliary />
        {width / dpr >= 1440 && <AddAnnouncement />}
      </Container>
    </HeaderContainer>
  );
}
