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
  DotsWrapper,
  IconDislikeWrapper,
  IconLikeWrapper,
} from './CommentItem.styled';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useDispatch } from 'react-redux';
import {
  dislikeComment,
  likeComment,
} from '../../../../../../../redux/productPage/productPageSlice';
import axios from 'axios';
import { useProductPageContext } from 'components/ProductPage/context/ProductPageProvider';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function CommentItem({ name, body, like, dislike, id, daysPassed, index }) {
  const dispatch = useDispatch();

  const handlerLike = (commentId, index) => {
    dispatch(likeComment({ commentId, index }));
  };

  const handlerDislike = (commentId, index) => {
    dispatch(dislikeComment({ commentId, index }));
  };

  return (
    <CommentsWrapper>
      <CommentsContainer>
        <CommentsIconBlock></CommentsIconBlock>
        <CommentsContentBlock>
          <CommentsNameAndDataBlock>
            {name}
            <CommentsDataBlock>{daysPassed} тому</CommentsDataBlock>
            <DotsWrapper>
              <MoreVertIcon />
            </DotsWrapper>
          </CommentsNameAndDataBlock>
          <CommentsTextBlock>{body}</CommentsTextBlock>
          <CommentsRating>
            <CommentsRatingThumbUp>
              <IconLikeWrapper
                checked={like.indexOf(localStorage.getItem('userId')) !== -1}
              >
                <ThumbUpOffAltIcon onClick={() => handlerLike(id, index)} />
              </IconLikeWrapper>
              <CommentsRatingThumbQuantity>
                {like.length}
              </CommentsRatingThumbQuantity>
            </CommentsRatingThumbUp>
            <CommentsRatingThumbDown>
              <IconDislikeWrapper
                checked={dislike.indexOf(localStorage.getItem('userId')) !== -1}
              >
                <ThumbDownOffAltIcon
                  onClick={() => handlerDislike(id, index)}
                />
              </IconDislikeWrapper>
              <CommentsRatingThumbQuantity>
                {dislike.length}
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
