import React, { useState } from 'react';
import CommentItem from './CommentItem/CommentItem';
import CreateCommentField from './CreateCommentField/CreateCommentField';

function Comments() {
  const [arrComments, setArrComments] = useState([
    {
      firstName: 'Іван',
      body: ` Ці навушники - справжня знахідка для всіх, хто цінує високу якість
  звуку та комфорт під час прослуховування музики, перегляду відео або
  геймінгу.`,
      like: 4,
      dislike: 2,
    },
    {
      firstName: 'Іван',
      body: ` Ці навушники - справжня знахідка для всіх, хто цінує високу якість
  звуку та комфорт під час прослуховування музики, перегляду відео або
  геймінгу.`,
      like: 4,
      dislike: 2,
    },
  ]);
  return (
    <>
      <CreateCommentField
        arrComments={arrComments}
        setArrComments={setArrComments}
      />
      {arrComments.map((el, index) => (
        <CommentItem
          key={index}
          name={el.firstName}
          body={el.body}
          like={el.like}
          dislike={el.dislike}
          id={index}
          setArrComments={setArrComments}
          arrComments={arrComments}
        />
      ))}
    </>
  );
}

export default Comments;
