import { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Filters from '../FilterList/Filters';
import { Backdrop, cssButtonClose, Wrapper } from './FiltersModal.styled';
import SortModal from '../SortModal/SortModal';

export default function FiltersModal({
  onClose,
  isOpenMenu,
  isOpenSort,
  isOpenFilter,
  setIsOpenSort,
  setIsOpenFilter,
  setTranslateMenu,
  setPage,
}) {
  useEffect(() => {
    function onCloseFilter(bool) {
      setTranslateMenu(bool);
      setTimeout(() => setIsOpenFilter(bool), 500);
    }

    function onCloseSort(bool) {
      setTranslateMenu(bool);
      setTimeout(() => setIsOpenSort(bool), 500);
    }
    function onCloseByEsc(evt) {
      if (evt.code === 'Escape') {
        setTimeout(() => {
          onClose(false);
        }, 500);
        if (isOpenFilter) {
          onCloseFilter(false);
          return;
        }
        if (isOpenSort) {
          onCloseSort(false);
          return;
        }
      }
    }
    window.addEventListener('keydown', onCloseByEsc);
    return () => {
      window.removeEventListener('keydown', onCloseByEsc);
    };
  }, [
    isOpenFilter,
    isOpenSort,
    onClose,
    setIsOpenFilter,
    setIsOpenSort,
    setTranslateMenu,
  ]);

  function onCloseFilter(bool) {
    setTranslateMenu(bool);
    setTimeout(() => setIsOpenFilter(bool), 200);
  }

  function onCloseSort(bool) {
    setTranslateMenu(bool);
    setTimeout(() => setIsOpenSort(bool), 200);
  }

  function oncloseByClickOutside(evt) {
    if (evt.currentTarget !== evt.target) return;
    setTimeout(() => {
      onClose(false);
    }, 200);
    if (isOpenFilter) {
      onCloseFilter(false);
      return;
    }
    if (isOpenSort) {
      onCloseSort(false);
      return;
    }
  }
  function onCloseWithButton() {
    setTimeout(() => {
      onClose(false);
    }, 200);
    if (isOpenFilter) {
      onCloseFilter(false);
      return;
    }
    if (isOpenSort) {
      onCloseSort(false);
      return;
    }
  }

  return (
    <Backdrop onMouseDown={oncloseByClickOutside}>
      <Wrapper $isOpenMenu={isOpenMenu}>
        <IconButton sx={cssButtonClose} onClick={onCloseWithButton}>
          <CloseIcon className="close" />
        </IconButton>
        {isOpenFilter && <Filters setPage={setPage} />}
        {isOpenSort && <SortModal />}
      </Wrapper>
    </Backdrop>
  );
}
