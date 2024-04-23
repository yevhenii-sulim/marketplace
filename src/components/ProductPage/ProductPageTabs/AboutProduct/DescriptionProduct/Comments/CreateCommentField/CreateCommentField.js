import React, { useState } from 'react';
import {
  CommentsContainer,
  CommentsIconBlock,
  CommentsWrapper,
} from '../CommentItem/CommentItem.styled';
import {
  CommentButtonBlock,
  CreateCommentInput,
  CreateFieldBlock,
  ErrorValidationComment,
} from './CreateCommentField.styled';
import { Button } from '@mui/material';

function CreateCommentField({ arrComments, setArrComments }) {
  const [newComment, setNewComment] = useState('');
  const [showValidationComment, setShowValidationComment] = useState(false);
  const validationComment = comment => {
    return comment && comment.length >= 4;
  };
  const addComment = comment => {
    if (validationComment(comment)) {
      setArrComments([
        ...arrComments,
        {
          firstName: 'Іван',
          body: comment,
          like: 0,
          dislike: 0,
        },
      ]);
      setShowValidationComment(false);
    } else {
      setShowValidationComment(true);
    }
  };

  return (
    <CommentsWrapper>
      <CommentsContainer>
        <CommentsIconBlock></CommentsIconBlock>
        <CreateFieldBlock>
          {showValidationComment && (
            <ErrorValidationComment>
              This comment is very short
            </ErrorValidationComment>
          )}
          <CreateCommentInput
            placeholder="Placeholder"
            onChange={e => setNewComment(e.target.value)}
            value={newComment}
          />
          <CommentButtonBlock>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#43C550',
                textTransform: 'none',
                color: 'black',
                height: '40px',
                padding: '0 20px',
                fontSize: '18px',
                fontWeight: '600',

                '&:focus': {
                  borderColor: '#43C550',
                },
                '&:hover': {
                  borderColor: '#43C550',
                },
              }}
              onClick={() => setNewComment('')}
            >
              Скасувати
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#43C550',
                textTransform: 'none',
                height: '40px',
                padding: '0 20px',
                fontSize: '18px',
                fontWeight: '800',
                '&:focus': {
                  backgroundColor: '#43C550',
                },
                '&:hover': {
                  backgroundColor: '#43C550',
                },
              }}
              onClick={() => addComment(newComment)}
            >
              Коментувати
            </Button>
          </CommentButtonBlock>
        </CreateFieldBlock>
      </CommentsContainer>
    </CommentsWrapper>
  );
}

export default CreateCommentField;
