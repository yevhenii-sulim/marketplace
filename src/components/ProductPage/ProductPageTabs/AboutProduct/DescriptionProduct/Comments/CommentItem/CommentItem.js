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
import axios from 'axios';
import { useProductPageContext } from 'components/ProductPage/context/ProductPageProvider';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function CommentItem({ name, body, like, dislike, id, daysPassed }) {
  const context = useProductPageContext();
  const handlerLike = async id => {
    try {
      await axios.post(
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
    } catch (error) {
      console.error(error);
    } finally {
      context.setTriggerRerender(prev => !prev);
    }
  };

  const handlerDislike = async id => {
    try {
      await axios.post(
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
    } catch (error) {
      console.error(error);
    } finally {
      context.setTriggerRerender(prev => !prev);
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
