import { Outlet } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {
  ContainerUserMain,
  PagesForSidebar,
  Sidebar,
} from './UserPageComponent.styled';
import SidebarListComponent from './SidebarListComponent';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/thunk';

export default function UserPageMain() {
  const dispatch = useDispatch();
  function onExit() {
    dispatch(logOut());
  }
  return (
    <ContainerUserMain>
      <Sidebar>
        <SidebarListComponent nameList="Мої замовлення" path={'my_order'}>
          <AddShoppingCartIcon />
        </SidebarListComponent>
        <SidebarListComponent nameList="Мої оголошення " path={'my_poster'}>
          <NotificationsNoneIcon />
        </SidebarListComponent>
        <SidebarListComponent nameList="Повідомлення" path={'notification'}>
          <ChatBubbleOutlineIcon />
        </SidebarListComponent>
        <SidebarListComponent nameList="Обране" path={'selected'}>
          <FavoriteBorderIcon />
        </SidebarListComponent>
        <SidebarListComponent nameList="Профіль" path={'profile'}>
          <PersonOutlineOutlinedIcon />
        </SidebarListComponent>
        <SidebarListComponent nameList="Вийти" path={'/'} onClick={onExit}>
          <LogoutOutlinedIcon />
        </SidebarListComponent>
      </Sidebar>
      <PagesForSidebar>
        <Outlet />
      </PagesForSidebar>
    </ContainerUserMain>
  );
}
