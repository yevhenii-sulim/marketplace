import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { logOut } from '../../redux/auth/thunk';
import { selectPoster } from '../../redux/myPoster/selector';
import StoryOrderSvg from 'SvgComponents/StoryOrderSvg/StoryOrderSvg';
import SidebarListComponent from './SidebarListComponent';
import ConfirmExit from 'components/ConfirmExit/ConfirmExit';
import { Exit } from './UserPageComponent.styled';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { theme } from 'utils/theme';

const modalEnter = document.querySelector('#modal');

export default function UserPageSidebar({ onCloseMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  const condition = useSelector(selectPoster);
  const { width } = useWindowDimensions();
  function choosePath() {
    if (width < parseInt(theme.breakPoints.lg)) {
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
        onClick={onCloseMenu}
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
        onClick={onCloseMenu}
      >
        <NotificationsNoneIcon />
      </SidebarListComponent>
      <SidebarListComponent
        nameList="Продані товари"
        path={`${choosePath() + 'sold-goods'}`}
        onClick={onCloseMenu}
      >
        <ProductionQuantityLimitsIcon />
      </SidebarListComponent>
      <SidebarListComponent
        nameList="Обране"
        path={`${choosePath() + 'selected'}`}
        onClick={onCloseMenu}
      >
        <FavoriteBorderIcon />
      </SidebarListComponent>
      <SidebarListComponent
        nameList="Профіль"
        path={`${choosePath() + 'profile'}`}
        onClick={onCloseMenu}
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
