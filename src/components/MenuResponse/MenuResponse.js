import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddAnnouncement from 'components/AddAnnouncement/AddAnnouncement';
import Logo from 'SvgComponents/LogoSVG/Logo';
import CategorySvg from 'SvgComponents/CategorySVG/CategorySvg';
import { theme } from 'utils/theme';
import MarkAsk from 'SvgComponents/MarkAsk/MarkAsk';
import { selectAuth } from '../../redux/auth/selector';
import { toggleModalForm } from '../../redux/modalForm/slice';
import {
  AddContainer,
  AuxiliaryComponents,
  BackDrop,
  Contacts,
  Container,
  EnteredProfile,
  LinkAxillary,
  LinkEnter,
  Menu,
} from './MenuResponse.styled';

export default function MenuResponse({ toggleMenu, isOpenMenu }) {
  const isAuth = useSelector(selectAuth);
  const dispatch = useDispatch();
  console.log(isAuth);

  function onOpen(evt) {
    if (isAuth) {
      toggleMenu();
      return;
    }
    evt.preventDefault();
    dispatch(toggleModalForm(true));
  }
  return (
    <BackDrop>
      <Menu $isOpenMenu={isOpenMenu}>
        <header>
          <Container>
            <Logo fill="#ffffff" />
            <button type="button" onClick={toggleMenu}>
              <CloseIcon sx={{ color: theme.color.bgProduct }} />
            </button>
          </Container>
        </header>
        <main>
          <AddContainer>
            <AddAnnouncement />
          </AddContainer>
          <section>
            <Contacts>
              <MarkAsk />
              <Link to="/contacts" onClick={toggleMenu}>
                Контакти команди
              </Link>
            </Contacts>
          </section>
          <section>
            <EnteredProfile>
              <p>
                Ввійдіть, щоб отримати рекомендації, персональні бонуси і
                знижки.
              </p>
              <LinkEnter to="/user_page/profile" onClick={onOpen}>
                Увійти в профіль
              </LinkEnter>
            </EnteredProfile>
          </section>
          <section>
            <AuxiliaryComponents>
              <LinkAxillary to="/my_order" onClick={toggleMenu}>
                <ShoppingCartOutlinedIcon
                  sx={{ height: '32px', width: '32px' }}
                />
                Кошик
              </LinkAxillary>
              <LinkAxillary to="">
                <CategorySvg stroke="black" height="32px" width="32px" />
                Каталог товарів
              </LinkAxillary>
              <LinkAxillary to="/user_page/selected" onClick={onOpen}>
                <FavoriteBorderIcon sx={{ height: '32px', width: '32px' }} />
                Улюблене
              </LinkAxillary>
            </AuxiliaryComponents>
          </section>
        </main>
      </Menu>
    </BackDrop>
  );
}
