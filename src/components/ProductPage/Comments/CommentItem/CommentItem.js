import React from 'react';
import {
  CommentsAnswer,
  CommentsContainer,
  CommentsContentBlock,
  CommentsDataBlock,
  CommentsExpandedButton,
  CommentsExpandedWrapper,
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
  addToCommentsExpanded,
  deleteIdInCommentsExpanded,
  dislikeComment,
  likeComment,
} from '../../../../redux/productPage/productPageSlice';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { userIdForProductPage } from '../../../../redux/productPage/selectors';
import CreateCommentField from '../CreateCommentField/CreateCommentField';
import { Rating } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../../../index.css';

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
  commentsExpanded,
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

  const handlerExpandedComments = id => {
    if (commentsExpanded.has(id)) {
      dispatch(deleteIdInCommentsExpanded(id));
    } else {
      dispatch(addToCommentsExpanded(id));
    }
  };

  return (
    <>
      <CommentsWrapper $isNested={isNested}>
        <CommentsContainer $isNested={isNested}>
          <CommentsIconBlock $isNested={isNested} />
          <CommentsContentBlock $isNested={isNested}>
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
      {isNested
        ? comments.length > 0 &&
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
          ))
        : comments.length > 0 && (
            <TransitionGroup>
              {comments.length < 3 ? null : (
                <CommentsExpandedWrapper>
                  <CommentsExpandedButton
                    onClick={() => handlerExpandedComments(parent)}
                  >
                    <KeyboardArrowDownIcon
                      className={`arrow-icon ${
                        commentsExpanded.has(parent) ? 'down' : 'up'
                      }`}
                    />{' '}
                    {!(comments.length - 2) ? null : (
                      <span
                        className={`count_comments ${
                          commentsExpanded.has(parent) ? 'hidden' : 'show'
                        }`}
                      >
                        {comments.length - 2}
                      </span>
                    )}{' '}
                    Відповіді
                  </CommentsExpandedButton>{' '}
                </CommentsExpandedWrapper>
              )}
              {comments
                .slice(0, commentsExpanded.has(parent) ? Infinity : 2)
                .map((comment, idx) => (
                  <CSSTransition key={idx} timeout={500} classNames="slide">
                    <CommentItem
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
                      commentsExpanded={commentsExpanded}
                    />
                  </CSSTransition>
                ))}
            </TransitionGroup>
          )}
    </>
  );
}

export default CommentItem;
