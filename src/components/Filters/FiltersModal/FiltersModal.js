import { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Filters from '../FilterList/Filters';
import { Backdrop, cssButtonClose, Wrapper } from './FiltersModal.styled';

export default function FiltersModal({ onClose, isOpenMenu }) {
  useEffect(() => {
    function onCloseByEsc(evt) {
      if (evt.code === 'Escape') {
        onClose(false);
      }
    }
    window.addEventListener('keydown', onCloseByEsc);
    return () => {
      window.removeEventListener('keydown', onCloseByEsc);
    };
  }, [onClose]);

  function oncloseByClickOutside(evt) {
    if (evt.currentTarget !== evt.target) return;
    onClose(false);
  }
  function onCloseWithButton() {
    onClose(false);
  }

  return (
    <Backdrop onMouseDown={oncloseByClickOutside}>
      <IconButton sx={cssButtonClose} onClick={onCloseWithButton}>
        <CloseIcon className="close" />
      </IconButton>
      <Wrapper $isOpenMenu={isOpenMenu}>
        <Filters />
      </Wrapper>
    </Backdrop>
  );
}
