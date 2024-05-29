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

  return (
    <ContainerUserMain>
      <Sidebar>
        <UserPageSidebar />
      </Sidebar>
      <Main>
        <Title>{location.state}</Title>
        <PagesForSidebar>
          <Outlet />
        </PagesForSidebar>
      </Main>
    </ContainerUserMain>
  );
}
