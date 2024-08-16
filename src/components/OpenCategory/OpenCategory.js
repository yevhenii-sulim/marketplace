import { memo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import CategorySvg from 'SvgComponents/CategorySVG/CategorySvg';
import { OpenCategoryButton, TitleNav } from './OpenCategory.styled';
import { toggleModal } from '../../redux/modalCatalog/slice';
import { selectorOpenModal } from '../../redux/modalCatalog/selectors';
import NavsSectionList from 'components/NavsSectionComponent/NavsSectionList';

const categoryModal = document.querySelector('#modal');

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
        <CategorySvg stroke="white" />
        <TitleNav>Категорії товарів</TitleNav>
      </OpenCategoryButton>
      {isOpen &&
        createPortal(
          <NavsSectionList onCloseModal={oncloseByClickOutside} />,
          categoryModal
        )}
    </>
  );
});
