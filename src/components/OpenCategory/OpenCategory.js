import { createPortal } from 'react-dom';
import CategorySvg from 'SvgComponents/CategorySVG/CategorySvg';
import { OpenCategoryButton, TitleNav } from './OpenCategory.styled';
import NavComponent from 'components/NavComponent/NavComponent';
import { memo, useEffect, useState } from 'react';

const categoryModal = document.querySelector('#category');

export default memo(function OpenCategory() {
  const [toggleModal, setToggleModal] = useState(false);
  useEffect(() => {
    function onCloseByEsc(evt) {
      if (evt.code === 'Escape') {
        setToggleModal(false);
      }
    }
    window.addEventListener('keydown', onCloseByEsc);
    return () => {
      window.removeEventListener('keydown', onCloseByEsc);
    };
  }, []);

  function onOpen(bool) {
    setToggleModal(bool);
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
      {toggleModal &&
        createPortal(
          <NavComponent onCloseModal={oncloseByClickOutside} />,
          categoryModal
        )}
    </>
  );
});
