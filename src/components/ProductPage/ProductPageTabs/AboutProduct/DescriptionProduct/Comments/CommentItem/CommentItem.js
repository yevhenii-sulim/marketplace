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

function CommentItem({ name, body, like, dislike }) {
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
              <ThumbUpOffAltIcon />
              <CommentsRatingThumbQuantity>{like}</CommentsRatingThumbQuantity>
            </CommentsRatingThumbUp>
            <CommentsRatingThumbDown>
              <ThumbDownOffAltIcon />
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
