import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Backdrop, WrapperModal, stayInButton } from './PagesForSidebar.styled';
import { Button } from '@mui/material';
// import { useDispatch } from 'react-redux';

export default function SendComment({ onSend, onCloseModal }) {
  const [comment, setComment] = useState('');
  function hendleChange(evt) {
    setComment(evt.target.value);
  }
  function oncloseByClickOutside(evt) {
    if (evt.currentTarget !== evt.target) return;
    onCloseModal(false);
  }
  //   const dispatch = useDispatch();
  //   function oncloseByClickOutside(evt) {
  //     if (evt.currentTarget !== evt.target) return;
  //     onToggleModalConfirm(false);
  //   }

  //   function onExitOutAccount() {
  //     onExit();
  //     dispatch(toggleModalForm(false));
  //   }

  return (
    <Backdrop onMouseDown={oncloseByClickOutside}>
      <WrapperModal>
        <button
          type="button"
          className="close-modal"
          onClick={() => onCloseModal(false)}
        >
          <CloseIcon />
        </button>
        <p>Залиште відгук</p>
        <form onSubmit={onSend}>
          <textarea
            name="comment"
            className="comment"
            type="text"
            value={comment}
            onChange={hendleChange}
          />
          <Button type="submit" sx={stayInButton}>
            Відправити
          </Button>
        </form>
      </WrapperModal>
    </Backdrop>
  );
}
