import { useDispatch } from 'react-redux';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SidebarListComponent from './SidebarListComponent';
import { logOut } from '../../redux/auth/thunk';

export default function UserPageSidebar() {
  const dispatch = useDispatch();
  function onExit() {
    dispatch(logOut());
  }
  return (
    <>
      <SidebarListComponent nameList="Мої замовлення" path={'my_order'}>
        <ShoppingCartOutlinedIcon />
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
    </>
  );
}
