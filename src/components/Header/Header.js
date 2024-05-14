import AddAnnouncement from 'components/AddAnnouncement/AddAnnouncement';
import Logo from 'SvgComponents/LogoSVG/Logo';
import { Container, HeaderContainer, NavContainer } from './Header.styled';
import Search from 'components/Search/Search';
import OpenCategory from 'components/OpenCategory/OpenCategory';
import Auxiliary from 'components/Auxiliary/Auxiliary';
// import useWindowDimensions from 'hooks/useWindowDimensions';

function searchProduct(nameProduct) {
  console.log(nameProduct);
}

export default function Header() {
  // const { width } = useWindowDimensions();

  return (
    <HeaderContainer>
      <Container>
        <NavContainer>
          <Logo fill="#ffffff" />
          <OpenCategory />
        </NavContainer>
        <Search searchProduct={searchProduct} />
        <Auxiliary />
        <AddAnnouncement />
      </Container>
    </HeaderContainer>
  );
}
