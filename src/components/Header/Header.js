import AddAnnouncement from 'components/AddAnnouncement/AddAnnouncement';
import CategorySvg from 'SvgComponents/CategorySVG/CategorySvg';
import Logo from 'SvgComponents/LogoSVG/Logo';
import {
  Container,
  HeaderContainer,
  NavContainer,
  NavLink,
  TitleNav,
} from './Header.styled';
import Search from 'components/Search/Search';
import Auxiliarys from 'components/Auxiliarys/Auxiliarys';

function searchProduct(nameProduct) {
  console.log(nameProduct);
}

export default function Header() {
  return (
    <HeaderContainer>
      <Container>
        <NavContainer>
          <Logo fill="#ffffff" />
          <NavLink to="nav">
            <CategorySvg />
            <TitleNav>Категорії товарів</TitleNav>
          </NavLink>
        </NavContainer>
        <Search searchProduct={searchProduct} />
        <Auxiliarys />
        <AddAnnouncement />
      </Container>
    </HeaderContainer>
  );
}
