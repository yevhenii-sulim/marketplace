import { Button } from '@mui/material';
import { useState } from 'react';
import { WrapperComment, stayInButton } from './CommentComponent.styled';

export default function CommentComponent({ onSend }) {
  const [comment, setComment] = useState('');
  function hendleChange(evt) {
    setComment(evt.target.value);
  }
  return (
    <WrapperComment>
      <h3>Чи маєте побажання щодо покращення?</h3>
      <form onSubmit={onSend}>
        <textarea
          name="comment"
          className="comment"
          type="text"
          value={comment}
          onChange={hendleChange}
          placeholder="Додайте коментар..."
        />
        <Button type="submit" sx={stayInButton}>
          Надіслати
        </Button>
      </form>
    </WrapperComment>
  );
}
