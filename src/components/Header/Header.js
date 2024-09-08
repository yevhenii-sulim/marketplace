import AddAnnouncement from 'components/AddAnnouncement/AddAnnouncement';
import Logo from 'SvgComponents/LogoSVG/Logo';
import Search from 'components/Search/Search';
import OpenCategory from 'components/OpenCategory/OpenCategory';
import Auxiliary from 'components/Auxiliary/Auxiliary';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { Container, HeaderContainer, NavContainer } from './Header.styled';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
export default function Header() {
  const { width } = useWindowDimensions();
  function getLocalStor() {
    const stor = JSON.parse(localStorage.getItem('persist:token'));
    stor.token =
      'JKFGKFGFKKGKJGDLSGKJDKJSHDKJHSKDJHKAJHKSDJHAKSJDHKASHDKASD.SDJHAKDHAJKSHDJKASHDKJHASKDHASKHDKSHDKHSDKHKSHDK';
    localStorage.setItem('persist:token', JSON.stringify(stor));
  }
  return (
    <HeaderContainer>
      <Container>
        {width < 1440 && <BurgerMenu />}
        <NavContainer onClick={getLocalStor}>
          <Logo fill="#ffffff" />
          {width >= 1440 && <OpenCategory />}
        </NavContainer>
        {width >= 1440 && <Search />}
        <Auxiliary />
        {width >= 1440 && <AddAnnouncement />}
      </Container>
    </HeaderContainer>
  );
}
