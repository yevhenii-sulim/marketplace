import { memo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import CategorySvg from 'SvgComponents/CategorySVG/CategorySvg';
import { OpenCategoryButton, TitleNav } from './OpenCategory.styled';
import NavComponent from 'components/NavComponent/NavComponent';
import { toggleModal } from '../../redux/slice';
import { selectorOpenModal } from '../../redux/selectors';

const categoryModal = document.querySelector('#category');

export default memo(function OpenCategory() {
  const isOpen = useSelector(selectorOpenModal);
  const dispatch = useDispatch();

  useEffect(() => {
    function onCloseByEsc(evt) {
      if (evt.code === 'Escape') {
        return dispatch(toggleModal(false));
      }
    }
    window.addEventListener('keydown', onCloseByEsc);
    return () => {
      window.removeEventListener('keydown', onCloseByEsc);
    };
  }, [dispatch]);

  function onOpen(bool) {
    dispatch(toggleModal(bool));
  }

  function oncloseByClickOutside(evt) {
    if (evt.currentTarget === evt.target) {
      onOpen(false);
    }
  }

  return (
    <>
      <OpenCategoryButton type="button" onClick={() => onOpen(true)}>
        <CategorySvg />
        <TitleNav>Категорії товарів</TitleNav>
      </OpenCategoryButton>
      {isOpen &&
        createPortal(
          <NavComponent onCloseModal={oncloseByClickOutside} />,
          categoryModal
        )}
    </>
  );
});
