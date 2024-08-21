import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddAnnouncement from 'components/AddAnnouncement/AddAnnouncement';
import Logo from 'SvgComponents/LogoSVG/Logo';
import CategorySvg from 'SvgComponents/CategorySVG/CategorySvg';
import { theme } from 'utils/theme';
import MarkAsk from 'SvgComponents/MarkAsk/MarkAsk';
import { selectAuth } from '../../redux/auth/selector';
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
import { modalFormAuthReducer } from '../../redux/modalAuth/slice';

export default function MenuResponse({ toggleMenu, isOpenMenu }) {
  const isAuth = useSelector(selectAuth);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function onOpenSelected(evt) {
    if (isAuth) {
      toggleMenu();
      navigate('/user_page/selected');
      return;
    }
    evt.preventDefault();
    dispatch(modalFormAuthReducer(true));
  }
  function onOpenProfile(evt) {
    if (isAuth) {
      toggleMenu();
      navigate('/user_page/profile');

      return;
    }
    evt.preventDefault();
    dispatch(modalFormAuthReducer(true));
  }
  function onOpenCatalog() {
    toggleMenu();
    navigate('/catalog');
  }
  function onOpenAddGood(evt) {
    toggleMenu();
  }

  function oncloseByClickOutside(evt) {
    if (evt.currentTarget !== evt.target) return;
    toggleMenu();
  }

  return (
    <BackDrop onMouseDown={oncloseByClickOutside}>
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
          <AddContainer onClick={onOpenAddGood}>
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
              <LinkEnter to="/user_page/profile" onClick={onOpenProfile}>
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
              <LinkAxillary to="/catalog" onClick={onOpenCatalog}>
                <CategorySvg stroke="black" height="32px" width="32px" />
                Каталог товарів
              </LinkAxillary>
              <LinkAxillary to="/user_page/selected" onClick={onOpenSelected}>
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
