import { useDispatch, useSelector } from 'react-redux';
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
import ConfirmExit from 'components/ConfirmExit/ConfirmExit';
import { Exit } from './UserPageComponent.styled';
import { selectPoster } from '../../redux/myPoster/selector';

const modalEnter = document.querySelector('#modal');

export default function UserPageSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const condition = useSelector(selectPoster);

  const dispatch = useDispatch();
  function onExit() {
    dispatch(logOut());
  }
  function onToggleModalConfirm(bool) {
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
      <SidebarListComponent
        nameList="Мої оголошення "
        path={condition ? 'my_poster' : 'my_post_list'}
      >
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
      <Exit onClick={() => onToggleModalConfirm(true)}>
        <LogoutOutlinedIcon />
        <span>Вийти</span>
      </Exit>
      {isOpen &&
        createPortal(
          <ConfirmExit
            onExit={onExit}
            onToggleModalConfirm={onToggleModalConfirm}
          />,
          modalEnter
        )}
    </>
  );
}
