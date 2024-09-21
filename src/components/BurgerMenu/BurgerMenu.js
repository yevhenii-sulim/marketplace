import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Burger } from './BurgerMenu.styled';
import { createPortal } from 'react-dom';
import MenuResponse from 'components/MenuResponse/MenuResponse';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../redux/auth/selector';
import { windowScrollTop } from 'utils/windowScrollTop';

const modalEnter = document.querySelector('#modal');

export default function BurgerMenu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [translateMenu, setTranslateMenu] = useState(false);
  const isAuth = useSelector(selectAuth);
  function toggleMenu() {
    if (isOpenMenu) {
      if (!isAuth) return;
      setTimeout(() => {
        setIsOpenMenu(prev => !prev);
      }, 500);
    } else {
      setIsOpenMenu(prev => !prev);
    }
    setTimeout(() => setTranslateMenu(prev => !prev), 0);
  }

  function onCloseMenu() {
    setTimeout(() => setTranslateMenu(prev => !prev), 0);
    setTimeout(() => {
      setIsOpenMenu(prev => !prev);
    }, 500);
    windowScrollTop();
  }
  return (
    <div>
      <Burger type="button" onClick={toggleMenu}>
        <MenuIcon
          sx={{ width: '36px', height: '36px', pointerEvents: 'none' }}
        />
      </Burger>
      {isOpenMenu &&
        createPortal(
          <MenuResponse
            toggleMenu={toggleMenu}
            isOpenMenu={translateMenu}
            onCloseMenu={onCloseMenu}
          />,
          modalEnter
        )}
    </div>
  );
}
