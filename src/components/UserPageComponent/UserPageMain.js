import { Outlet, useLocation } from 'react-router-dom';

import {
  ContainerUserMain,
  Main,
  PagesForSidebar,
  Sidebar,
  Title,
} from './UserPageComponent.styled';
import UserPageSidebar from './UserPageSidebar';

export default function UserPageMain() {
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
      <Sidebar>
        <UserPageSidebar />
      </Sidebar>
      <Main>
        <Title>{titleSection()}</Title>
        <PagesForSidebar>
          <Outlet />
        </PagesForSidebar>
      </Main>
    </ContainerUserMain>
  );
}
