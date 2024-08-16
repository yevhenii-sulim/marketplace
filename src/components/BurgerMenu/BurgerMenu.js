import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Burger } from './BurgerMenu.styled';
import { createPortal } from 'react-dom';
import MenuResponse from 'components/MenuResponse/MenuResponse';

const modalEnter = document.querySelector('#modal');

export default function BurgerMenu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [translateMenu, setTranslateMenu] = useState(false);

  function toggleMenu() {
    setIsOpenMenu(prev => !prev);
    setTimeout(() => setTranslateMenu(prev => !prev), 0);
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
          <MenuResponse toggleMenu={toggleMenu} isOpenMenu={translateMenu} />,
          modalEnter
        )}
    </div>
  );
}
