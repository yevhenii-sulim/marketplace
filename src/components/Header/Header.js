import AddAnnouncement from 'components/AddAnnouncement/AddAnnouncement';
import Logo from 'SvgComponents/LogoSVG/Logo';
import Search from 'components/Search/Search';
import OpenCategory from 'components/OpenCategory/OpenCategory';
import Auxiliary from 'components/Auxiliary/Auxiliary';
// import useWindowDimensions from 'hooks/useWindowDimensions';
import {} from '../../redux/product/selector';
import { Container, HeaderContainer, NavContainer } from './Header.styled';

export default function Header() {
  // const { width } = useWindowDimensions();

  return (
    <HeaderContainer>
      <Container>
        <NavContainer>
          <Logo fill="#ffffff" />
          <OpenCategory />
        </NavContainer>
        <Search />
        <Auxiliary />
        <AddAnnouncement />
      </Container>
    </HeaderContainer>
  );
}
