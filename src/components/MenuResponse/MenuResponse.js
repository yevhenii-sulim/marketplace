import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Logo from 'SvgComponents/LogoSVG/Logo';
import CategorySvg from 'SvgComponents/CategorySVG/CategorySvg';
import MarkAsk from 'SvgComponents/MarkAsk/MarkAsk';
import UserPageSidebar from 'components/UserPageComponent/UserPageSidebar';
import UserPageHeader from 'components/UserPageComponent/UserPageHeader';
import AddAnnouncement from './AddAnnouncement';
import { theme } from 'utils/theme';
import { selectAuth, selectMyUser } from '../../redux/auth/selector';
import { toggleModalAuth } from '../../redux/modalAuth/slice';
import {
  AddContainer,
  BackDrop,
  CategoryList,
  Contacts,
  Container,
  EnteredProfile,
  LinkAxillary,
  LinkEnter,
  Menu,
  Sidebar,
  WrapperSidebar,
} from './MenuResponse.styled';

export default function MenuResponse({ toggleMenu, isOpenMenu, onCloseMenu }) {
  const isAuth = useSelector(selectAuth);
  const user = useSelector(selectMyUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function onOpenProfile(evt) {
    if (isAuth) {
      toggleMenu();
      navigate('/user_page/profile');
      return;
    }
    evt.preventDefault();
    dispatch(toggleModalAuth(true));
  }

  function onOpenAddGood(evt) {
    toggleMenu();
  }

  function oncloseByClickOutside(evt) {
    if (evt.currentTarget !== evt.target) return;
    onCloseMenu();
  }

  return (
    <BackDrop onMouseDown={oncloseByClickOutside}>
      <Menu $isOpenMenu={isOpenMenu}>
        <header>
          <Container>
            <Logo fill="#ffffff" />
            <button type="button" onClick={onCloseMenu}>
              <CloseIcon sx={{ color: theme.color.bgProduct }} />
            </button>
          </Container>
        </header>
        <main>
          <AddContainer onClick={onOpenAddGood}>
            <AddAnnouncement />
          </AddContainer>
          {isAuth ? (
            <>
              <WrapperSidebar>
                <UserPageHeader
                  rating={0 || user?.rating.count}
                  nameUser={0 || user?.firstName}
                  imgUser={
                    user?.profilePictureSrc !== ''
                      ? user?.profilePictureSrc
                      : '/marketplace/images/catalog/for-free.png'
                  }
                />
                <Sidebar>
                  <CategoryList>
                    <LinkAxillary to={'/catalog'} onClick={onCloseMenu}>
                      <p
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '20px',
                        }}
                      >
                        <CategorySvg height="32px" width="32px" />
                        Каталог товарів
                      </p>
                      <ArrowForwardIosIcon />
                    </LinkAxillary>
                  </CategoryList>
                  <UserPageSidebar onCloseMenu={onCloseMenu} />
                </Sidebar>
              </WrapperSidebar>
            </>
          ) : (
            <>
              <section>
                <Contacts
                  onClick={() => {
                    onCloseMenu();
                    navigate('/contacts');
                  }}
                >
                  <MarkAsk />
                  <Link to="/contacts" onClick={onCloseMenu}>
                    Контакти команди
                  </Link>
                </Contacts>
              </section>
              <section>
                <EnteredProfile>
                  <p>
                    Увійдіть, щоб отримати рекомендації, персональні бонуси і
                    знижки.
                  </p>
                  <LinkEnter to="/user/menu" onClick={onOpenProfile}>
                    Увійти в профіль
                  </LinkEnter>
                </EnteredProfile>
              </section>
              <section>
                <div>
                  <LinkAxillary to="/my_order" onClick={onCloseMenu}>
                    <ShoppingCartOutlinedIcon
                      sx={{ height: '32px', width: '32px' }}
                    />
                    Кошик
                  </LinkAxillary>
                  <LinkAxillary to="/catalog" onClick={onCloseMenu}>
                    <CategorySvg stroke="black" height="32px" width="32px" />
                    Каталог товарів
                  </LinkAxillary>
                </div>
              </section>
            </>
          )}
        </main>
      </Menu>
    </BackDrop>
  );
}
