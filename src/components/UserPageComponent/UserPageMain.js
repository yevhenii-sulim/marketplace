import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import UserPageSidebar from './UserPageSidebar';
import UserPageHeader from './UserPageHeader';
import { selectMyUser } from '../../redux/auth/selector';
import {
  ContainerUserMain,
  Main,
  PagesForSidebar,
  Sidebar,
  Title,
  WrapperSidebar,
} from './UserPageComponent.styled';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { theme } from 'utils/theme';

export default function UserPageMain() {
  const location = useLocation();
  const user = useSelector(selectMyUser);
  const { width } = useWindowDimensions();

  function titleSection() {
    if (location.pathname.includes('my_order')) return 'Мій кошик';
    if (location.pathname.includes('sold-goods')) return 'Продані товари';
    if (location.pathname.includes('my_poster')) return 'Створити оголошення';
    if (location.pathname.includes('my_story_order'))
      return 'Історія замовлень';
    if (location.pathname.includes('my_post_list')) return 'Мої оголошення';
    if (location.pathname.includes('notification')) return 'Повідомлення';
    if (location.pathname.includes('selected')) return 'Обрані товари';
    if (location.pathname.includes('profile')) return 'Профіль';
    if (location.pathname.includes('ordering')) return 'Оформлення замовлення';
  }
  return (
    <ContainerUserMain $screenwidth={`${width}px`}>
      {width >= parseInt(theme.breakPoints.lg) ? (
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
            <UserPageSidebar />
          </Sidebar>
        </WrapperSidebar>
      ) : null}
      <Main>
        <Title>{titleSection()}</Title>
        <PagesForSidebar>
          <Outlet />
        </PagesForSidebar>
      </Main>
    </ContainerUserMain>
  );
}
