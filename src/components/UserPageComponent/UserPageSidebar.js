import { useDispatch } from 'react-redux';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SidebarListComponent from './SidebarListComponent';
import { logOut } from '../../redux/auth/thunk';
import StoryOrderSvg from 'SvgComponents/StoryOrderSvg/StoryOrderSvg';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import ViewAheadComponent from 'components/ViewAhead/ViewAheadComponent';
const modalEnter = document.querySelector('#modal');
export default function UserPageSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  function onExit() {
    dispatch(logOut());
  }

  function onToggleModal(bool) {
    setIsOpen(bool);
  }

  return (
    <>
      <SidebarListComponent nameList="Мій кошик" path={'my_order'}>
        <ShoppingCartOutlinedIcon />
      </SidebarListComponent>
      <SidebarListComponent
        nameList="Історія замовлень"
        path={'my_story_order'}
      >
        <StoryOrderSvg />
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
      <SidebarListComponent
        nameList="Вийти"
        path={'/'}
        onClick={() => onToggleModal(true)}
      >
        <LogoutOutlinedIcon />
      </SidebarListComponent>
      {isOpen &&
        createPortal(
          <ViewAheadComponent onExit={onExit} onToggleModal={onToggleModal} />,
          modalEnter
        )}
    </>
  );
}
