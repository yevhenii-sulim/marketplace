import { Button } from '@mui/material';
import { buttonAddMoreComments } from './CreateCommentField/material.styles';

export default function ButtonAddMoreComments({
  handlerExpandedComments,
  commentsLeft,
}) {
  console.log(commentsLeft);
  return (
    <>
      {commentsLeft > 0 && (
        <Button
          variant="outlined"
          sx={buttonAddMoreComments}
          onClick={(event, quantity = commentsLeft > 10 ? 10 : commentsLeft) =>
            handlerExpandedComments(event, quantity)
          }
        >
          Завантажити ще {commentsLeft > 10 ? 10 : commentsLeft} коментарів
        </Button>
      )}
    </>
  );
}
