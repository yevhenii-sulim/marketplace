import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { logOut } from '../../redux/auth/thunk';
import { selectPoster } from '../../redux/myPoster/selector';
import StoryOrderSvg from 'SvgComponents/StoryOrderSvg/StoryOrderSvg';
import SidebarListComponent from './SidebarListComponent';
import ConfirmExit from 'components/ConfirmExit/ConfirmExit';
import { Exit } from './UserPageComponent.styled';
import { useLocation } from 'react-router-dom';

const modalEnter = document.querySelector('#modal');

export default function UserPageSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const condition = useSelector(selectPoster);
  const location = useLocation();
  console.log(location);

  function choosePath() {
    if (location.pathname === '/user/menu') {
      return '/user_page/';
    }
    return '';
  }

  const dispatch = useDispatch();
  function onExit() {
    dispatch(logOut());
  }
  function onToggleModalConfirm(bool) {
    setIsOpen(bool);
  }

  return (
    <>
      <SidebarListComponent
        nameList="Історія замовлень"
        path={`${choosePath() + 'my_story_order'}`}
      >
        <StoryOrderSvg />
      </SidebarListComponent>
      <SidebarListComponent
        nameList="Мої оголошення "
        path={
          condition
            ? `${choosePath() + 'my_poster'}`
            : `${choosePath() + 'my_post_list'}`
        }
      >
        <NotificationsNoneIcon />
      </SidebarListComponent>
      <SidebarListComponent
        nameList="Повідомлення"
        path={`${choosePath() + 'notification'}`}
      >
        <ChatBubbleOutlineIcon />
      </SidebarListComponent>
      <SidebarListComponent
        nameList="Обране"
        path={`${choosePath() + 'selected'}`}
      >
        <FavoriteBorderIcon />
      </SidebarListComponent>
      <SidebarListComponent
        nameList="Профіль"
        path={`${choosePath() + 'profile'}`}
      >
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
