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
  RatingNumber,
  WrapperForRating,
} from './CommentItem.styled';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useDispatch, useSelector } from 'react-redux';
import {
  dislikeComment,
  likeComment,
} from '../../../../redux/productPage/productPageSlice';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { userIdForProductPage } from '../../../../redux/productPage/selectors';
import CreateCommentField from '../CreateCommentField/CreateCommentField';
import { Rating } from '@mui/material';

function CommentItem({
  name,
  body,
  like,
  dislike,
  id,
  daysPassed,
  index,
  isNested,
  product,
  comments = [],
  commentId,
  parentIndex,
  parent,
  rating,
  setCommentId,
}) {
  const dispatch = useDispatch();
  const userId = useSelector(userIdForProductPage);

  const handlerLike = (commentId, index) => {
    dispatch(likeComment({ commentId, index }));
  };

  const handlerDislike = (commentId, index) => {
    dispatch(dislikeComment({ commentId, index }));
  };

  const toggleCommentForm = id => {
    if (id === commentId) {
      setCommentId('');
    } else {
      setCommentId(id);
    }
  };

  return (
    <>
      <CommentsWrapper $isNested={isNested}>
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
            {rating ? (
              <WrapperForRating>
                <Rating
                  name="half-rating"
                  value={rating}
                  readOnly
                  size="small"
                />{' '}
                <RatingNumber>{rating}</RatingNumber>
              </WrapperForRating>
            ) : null}
            <CommentsTextBlock>{body}</CommentsTextBlock>
            <CommentsRating>
              <CommentsRatingThumbUp>
                <IconLikeWrapper checked={like.indexOf(userId) !== -1}>
                  <ThumbUpOffAltIcon onClick={() => handlerLike(id, index)} />
                </IconLikeWrapper>
                <CommentsRatingThumbQuantity>
                  {like.length}
                </CommentsRatingThumbQuantity>
              </CommentsRatingThumbUp>
              <CommentsRatingThumbDown>
                <IconDislikeWrapper checked={dislike.indexOf(userId) !== -1}>
                  <ThumbDownOffAltIcon
                    onClick={() => handlerDislike(id, index)}
                  />
                </IconDislikeWrapper>
                <CommentsRatingThumbQuantity>
                  {dislike.length}
                </CommentsRatingThumbQuantity>
              </CommentsRatingThumbDown>
              <CommentsAnswer onClick={() => toggleCommentForm(id)}>
                Відповісти
              </CommentsAnswer>
            </CommentsRating>
          </CommentsContentBlock>
        </CommentsContainer>
        {id === commentId ? (
          <CreateCommentField
            productId={product}
            parent={parent}
            parentIndex={parentIndex}
          />
        ) : null}
      </CommentsWrapper>
      {comments.length > 0 &&
        comments.map((comment, idx) => (
          <CommentItem
            key={idx}
            name={comment.author.firstName}
            body={comment.body}
            like={comment.like}
            dislike={comment.dislike}
            id={comment._id}
            daysPassed={comment.daysPassed}
            index={idx}
            isNested={true}
            comments={comment.comments}
            product={comment.product}
            commentId={commentId}
            parentIndex={parentIndex}
            parent={comment.parent !== null ? comment.parent : null}
            setCommentId={setCommentId}
          />
        ))}
    </>
  );
}

export default CommentItem;
