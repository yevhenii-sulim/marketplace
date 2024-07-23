import React, { useState } from 'react';
import CommentItem from './CommentItem/CommentItem';
import CreateCommentField from './CreateCommentField/CreateCommentField';
import { useSelector } from 'react-redux';
import { productForProductPage } from '../../../redux/productPage/selectors';

function Comments() {
  const product = useSelector(productForProductPage);
  const [commentId, setCommentId] = useState('');

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
    return comments.map(comment => ({
      ...comment,
      daysPassed: calculateDate(comment.createDate),
      comments: comment.comments ? processComments(comment.comments) : [],
    }));
  };

  const processedComments = processComments(product.comments || []);
  return (
    <>
      <CreateCommentField productId={product._id} />

      {processedComments.length > 0 &&
        processedComments.map((el, index) => (
          <CommentItem
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
          />
        ))}
    </>
  );
}

export default Comments;
