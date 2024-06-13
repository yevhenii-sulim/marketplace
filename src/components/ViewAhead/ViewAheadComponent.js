import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toggleModalView } from '../../redux/modalViewProduct/slice';
import { Backdrop, WrapperModal } from 'components/ModalForm/ModalForm.styled';

export default function ViewAheadComponent() {
  const dispatch = useDispatch();

  function closeViewAddedProduct() {
    dispatch(toggleModalView(false));
  }

  function oncloseByClickOutside(evt) {
    if (evt.currentTarget !== evt.target) return;
    closeViewAddedProduct();
  }

  return (
    <Backdrop onMouseDown={oncloseByClickOutside}>
      <WrapperModal>
        <Button type="button" onClick={closeViewAddedProduct}>
          Попередній перегляд
        </Button>
      </WrapperModal>
    </Backdrop>
  );
}
