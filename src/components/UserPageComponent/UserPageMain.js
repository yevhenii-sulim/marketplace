import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import UserPageSidebar from './UserPageSidebar';
import { selectMyUser } from '../../redux/auth/selector';
import {
  ContainerUserMain,
  Main,
  PagesForSidebar,
  Sidebar,
  Title,
  WrapperSidebar,
} from './UserPageComponent.styled';
import UserPageHeader from './UserPageHeader';

export default function UserPageMain() {
  const user = useSelector(selectMyUser);
  const location = useLocation();
  function titleSection() {
    if (location.pathname.includes('my_order')) return 'Мій кошик';
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
    <ContainerUserMain>
      <WrapperSidebar>
        <UserPageHeader
          rating={0 || user?.rating.count}
          nameUser={0 || user?.firstName}
          imgUser={user?.img || '/marketplace/images/catalog/for-free.png'}
        />
        <Sidebar>
          <UserPageSidebar />
        </Sidebar>
      </WrapperSidebar>
      <Main>
        <Title>{titleSection()}</Title>
        <PagesForSidebar>
          <Outlet />
        </PagesForSidebar>
      </Main>
    </ContainerUserMain>
  );
}
