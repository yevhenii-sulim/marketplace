import React, { useState } from 'react';
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
  IconDislikeWrapper,
  IconLikeWrapper,
} from './CommentItem.styled';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import axios from 'axios';
import { useProductPageContext } from 'components/ProductPage/context/ProductPageProvider';

function CommentItem({ name, body, like, dislike, id, daysPassed }) {
  const [stateComment, setStateComment] = useState({ like, dislike });

  const context = useProductPageContext();
  const handlerLike = async id => {
    try {
      const comment = await axios.post(
        process.env.REACT_APP_API_URL + '/comment/like',
        {
          commentId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      setStateComment({ ...stateComment, like: comment.data.like });
      context.setTriggerRerender(prev => !prev);
    } catch (error) {
      console.error(error);
    }
  };

  const handlerDislike = async id => {
    try {
      const comment = await axios.post(
        process.env.REACT_APP_API_URL + '/comment/dislike',
        {
          commentId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      setStateComment({ ...stateComment, dislike: comment.data.like });
      context.setTriggerRerender(prev => !prev);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CommentsWrapper>
      <CommentsContainer>
        <CommentsIconBlock></CommentsIconBlock>
        <CommentsContentBlock>
          <CommentsNameAndDataBlock>
            {name}
            <CommentsDataBlock>{daysPassed} тому</CommentsDataBlock>
          </CommentsNameAndDataBlock>
          <CommentsTextBlock>{body}</CommentsTextBlock>
          <CommentsRating>
            <CommentsRatingThumbUp>
              <IconLikeWrapper
                checked={like.indexOf(localStorage.getItem('userId')) !== -1}
              >
                <ThumbUpOffAltIcon onClick={() => handlerLike(id)} />
              </IconLikeWrapper>
              <CommentsRatingThumbQuantity>
                {like.length}
              </CommentsRatingThumbQuantity>
            </CommentsRatingThumbUp>
            <CommentsRatingThumbDown>
              <IconDislikeWrapper
                checked={dislike.indexOf(localStorage.getItem('userId')) !== -1}
              >
                <ThumbDownOffAltIcon onClick={() => handlerDislike(id)} />
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
