import React from 'react';
import { CommentsWrapper } from './CommentItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCommentsExpanded,
  deleteIdInCommentsExpanded,
  dislikeComment,
  likeComment,
} from '../../../../redux/productPage/productPageSlice';
import { userIdForProductPage } from '../../../../redux/productPage/selectors';
import CreateCommentField from '../CreateCommentField/CreateCommentField';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CommentsExpanded from '../CommentsExpande';
import CommentItem from './CommentItem';
import '../../../../index.css';

function CommentItems({
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
        <CommentItem
          isNested={isNested}
          daysPassed={daysPassed}
          name={name}
          rating={rating}
          body={body}
          like={like}
          userId={userId}
          handlerLike={handlerLike}
          id={id}
          index={index}
          dislike={dislike}
          handlerDislike={handlerDislike}
          toggleCommentForm={toggleCommentForm}
        />
        <CSSTransition
          in={id === commentId}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <CreateCommentField
            productId={product}
            parent={parent}
            parentIndex={parentIndex}
            isNested={isNested}
          />
        </CSSTransition>
      </CommentsWrapper>
      {isNested
        ? comments.length > 0 &&
          comments.map((comment, idx) => (
            <CommentItems
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
                <CommentsExpanded
                  handlerExpandedComments={handlerExpandedComments}
                  parent={parent}
                  commentsExpanded={commentsExpanded}
                  commentsLeft={comments.length - 2}
                  textForButton={'Відповіді'}
                />
              )}
              {comments
                .slice(0, commentsExpanded.has(parent) ? Infinity : 2)
                .map((comment, idx) => (
                  <CSSTransition key={idx} timeout={500} classNames="slide">
                    <CommentItems
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

export default CommentItems;
