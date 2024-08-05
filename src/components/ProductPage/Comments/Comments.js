import React, { useState } from 'react';
import CommentItems from './CommentItem/CommentItems';
import CreateCommentField from './CreateCommentField/CreateCommentField';
import { useSelector } from 'react-redux';
import {
  commentsExpandedSelector,
  productForProductPage,
} from '../../../redux/productPage/selectors';
import { AllCommentsContainer } from './CommentItem/CommentItem.styled';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../../index.css';
import CommentsExpanded from './CommentsExpande';

function Comments() {
  const product = useSelector(productForProductPage);
  const [commentId, setCommentId] = useState('');
  const commentsExpanded = useSelector(commentsExpandedSelector);
  const [page, setPage] = useState(1);
  const [toggleAnimationArrow, setToggleAnimationArrow] = useState(false);
  const [commentsLeft, setCommentsLeft] = useState(product.comments.length - 4);
  function calculateDate(createDate) {
    const givenDate = new Date(createDate);
    const currentDate = new Date();
    const differenceInMs = currentDate - givenDate;
    const msInDay = 1000 * 60 * 60 * 24;
    const daysPassed = Math.floor(differenceInMs / msInDay);

    return writePassedTime(daysPassed);
  }

  function writePassedTime(daysPassed) {
    if (daysPassed === 0) {
      return 'Меньше 1 дня';
    }
    if (daysPassed < 1) {
      return daysPassed + ' день';
    } else if (daysPassed === 1 || daysPassed % 10 === 1) {
      return daysPassed + ' день';
    } else if (daysPassed > 1 && daysPassed < 5) {
      return daysPassed + ' дні';
    } else if (daysPassed <= 7) {
      return daysPassed + ' днів';
    } else if (daysPassed === 7) {
      return '1 тиждень';
    } else if (daysPassed > 7 && daysPassed <= 14) {
      return '2 тижні';
    } else if (daysPassed > 14 && daysPassed <= 30) {
      return '3 тижні';
    } else if (daysPassed > 30 && daysPassed <= 60) {
      return '1 місяць';
    } else if (daysPassed > 60 && daysPassed <= 365) {
      const monthsPassed = Math.floor(daysPassed / 30);
      if (monthsPassed === 1) {
        return monthsPassed + ' місяць';
      } else if (monthsPassed > 1 && monthsPassed < 5) {
        return monthsPassed + ' місяці';
      } else {
        return monthsPassed + ' місяців';
      }
    } else {
      const yearsPassed = Math.floor(daysPassed / 365);
      if (yearsPassed === 1 || yearsPassed % 10 === 1) {
        return yearsPassed + ' рік';
      } else if (
        yearsPassed === 2 ||
        yearsPassed === 3 ||
        yearsPassed === 4 ||
        yearsPassed % 10 === 2 ||
        yearsPassed % 10 === 3 ||
        yearsPassed % 10 === 4
      ) {
        return yearsPassed + ' роки';
      } else {
        return yearsPassed + ' років';
      }
    }
  }
  const processComments = comments => {
    console.log(comments);
    return comments.map(comment => ({
      ...comment,
      daysPassed: calculateDate(comment.createDate),
      comments: comment.comments ? processComments(comment.comments) : [],
    }));
  };

  const processedComments = processComments(product.comments || []);

  const handlerExpandedComments = () => {
    if (!commentsLeft) return;
    setToggleAnimationArrow(true);
    setPage(prev => prev + 1);
    setTimeout(() => {
      setToggleAnimationArrow(false);
      setCommentsLeft(prev => prev - 4);
    }, 500);
  };

  return (
    <>
      <AllCommentsContainer>
        <TransitionGroup component={null}>
          {processedComments.length > 0 &&
            processedComments.slice(0, page * 4).map((el, index) => (
              <CSSTransition key={el._id} timeout={500} classNames="fade">
                <div>
                  <CommentItems
                    key={index}
                    name={el.author.firstName}
                    body={el.body}
                    like={el.like}
                    dislike={el.dislike}
                    id={el._id}
                    daysPassed={el.daysPassed}
                    comments={el.comments}
                    isNested={false}
                    product={el.product}
                    commentId={commentId}
                    parentIndex={index}
                    parent={el._id}
                    rating={el.rating}
                    setCommentId={setCommentId}
                    commentsExpanded={commentsExpanded}
                  />
                </div>
              </CSSTransition>
            ))}
        </TransitionGroup>
        <CommentsExpanded
          parent={null}
          handlerExpandedComments={handlerExpandedComments}
          commentsExpanded={commentsExpanded}
          commentsLeft={commentsLeft}
          textForButton={'Ще 4 відгуки'}
          mainComments={true}
          toggleAnimationArrow={toggleAnimationArrow}
        />
      </AllCommentsContainer>
      <CreateCommentField productId={product._id} />
    </>
  );
}

export default Comments;
