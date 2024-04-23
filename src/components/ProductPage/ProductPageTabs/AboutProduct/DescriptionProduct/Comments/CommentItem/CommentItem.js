import React from 'react';
import {
  CommentsAnswer,
  CommentsContainer,
  CommentsContentBlock,
  CommentsDataBlock,
  CommentsIconBlock,
  CommentsNameAndDataBlock,
  CommentsRating,
  CommentsRatingThumbDown,
  CommentsRatingThumbQuantity,
  CommentsRatingThumbUp,
  CommentsTextBlock,
  CommentsWrapper,
} from './CommentItem.styled';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

function CommentItem({
  name,
  body,
  like,
  dislike,
  id,
  arrComments,
  setArrComments,
}) {
  const handlerLike = id => {
    const updatedComments = [...arrComments];
    const commentObj = updatedComments[id];
    const updatedLike = commentObj.like + 1;
    updatedComments[id] = { ...commentObj, like: updatedLike };
    setArrComments(updatedComments);
  };

  const handlerDislike = id => {
    const updatedComments = [...arrComments];
    const commentObj = updatedComments[id];
    const updatedDislike = commentObj.dislike + 1;
    updatedComments[id] = { ...commentObj, dislike: updatedDislike };
    setArrComments(updatedComments);
  };

  return (
    <CommentsWrapper>
      <CommentsContainer>
        <CommentsIconBlock></CommentsIconBlock>
        <CommentsContentBlock>
          <CommentsNameAndDataBlock>
            {name}
            <CommentsDataBlock>день тому</CommentsDataBlock>
          </CommentsNameAndDataBlock>
          <CommentsTextBlock>{body}</CommentsTextBlock>
          <CommentsRating>
            <CommentsRatingThumbUp>
              <ThumbUpOffAltIcon onClick={() => handlerLike(id)} />
              <CommentsRatingThumbQuantity>{like}</CommentsRatingThumbQuantity>
            </CommentsRatingThumbUp>
            <CommentsRatingThumbDown>
              <ThumbDownOffAltIcon onClick={() => handlerDislike(id)} />
              <CommentsRatingThumbQuantity>
                {dislike}
              </CommentsRatingThumbQuantity>
            </CommentsRatingThumbDown>
            <CommentsAnswer>Відповісти</CommentsAnswer>
          </CommentsRating>
        </CommentsContentBlock>
      </CommentsContainer>
    </CommentsWrapper>
  );
}

export default CommentItem;
