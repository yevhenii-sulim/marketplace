import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { Backdrop } from 'components/ModalForm/ModalForm.styled';
import {
  Buttons,
  WrapperModal,
  exitOutButton,
  stayInButton,
} from './ConfirmExit.styled';
import { toggleModalForm } from '../../redux/modalForm/slice';

export default function ConfirmExit({ onExit, onToggleModalConfirm }) {
  const dispatch = useDispatch();
  function oncloseByClickOutside(evt) {
    if (evt.currentTarget !== evt.target) return;
    onToggleModalConfirm(false);
  }

  function onExitOutAccount() {
    onExit();
    dispatch(toggleModalForm(false));
  }

  return (
    <Backdrop onMouseDown={oncloseByClickOutside}>
      <WrapperModal>
        <p> Бажаєте вийти з акаунту?</p>
        <Buttons>
          <Button
            type="submit"
            sx={stayInButton}
            onClick={() => onToggleModalConfirm(false)}
          >
            Залишитись
          </Button>
          <Button type="button" sx={exitOutButton} onClick={onExitOutAccount}>
            Так, вийти
          </Button>
        </Buttons>
      </WrapperModal>
    </Backdrop>
  );
}
