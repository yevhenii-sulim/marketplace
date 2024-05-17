import { Outlet } from 'react-router-dom';

import {
  ContainerUserMain,
  PagesForSidebar,
  Sidebar,
} from './UserPageComponent.styled';
import UserPageSidebar from './UserPageSidebar';

export default function UserPageMain() {
  return (
    <ContainerUserMain>
      <Sidebar>
        <UserPageSidebar />
      </Sidebar>
      <PagesForSidebar>
        <Outlet />
      </PagesForSidebar>
    </ContainerUserMain>
  );
}
