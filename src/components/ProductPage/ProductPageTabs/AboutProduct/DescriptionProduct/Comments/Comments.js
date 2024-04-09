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
} from './Comments.styled';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

function Comments() {
  return (
    <CommentsWrapper>
      <CommentsContainer>
        <CommentsIconBlock></CommentsIconBlock>
        <CommentsContentBlock>
          <CommentsNameAndDataBlock>
            Іван<CommentsDataBlock>день тому</CommentsDataBlock>
          </CommentsNameAndDataBlock>
          <CommentsTextBlock>
            Ці навушники - справжня знахідка для всіх, хто цінує високу якість
            звуку та комфорт під час прослуховування музики, перегляду відео або
            геймінгу.
          </CommentsTextBlock>
          <CommentsRating>
            <CommentsRatingThumbUp>
              <ThumbUpOffAltIcon />
              <CommentsRatingThumbQuantity>4</CommentsRatingThumbQuantity>
            </CommentsRatingThumbUp>
            <CommentsRatingThumbDown>
              <ThumbDownOffAltIcon />
              <CommentsRatingThumbQuantity>2</CommentsRatingThumbQuantity>
            </CommentsRatingThumbDown>
            <CommentsAnswer>Відповісти</CommentsAnswer>
          </CommentsRating>
        </CommentsContentBlock>
      </CommentsContainer>
    </CommentsWrapper>
  );
}

export default Comments;
