import React from 'react';
import {
  CommentsContainer,
  CommentsIconBlock,
  CommentsWrapper,
} from '../CommentItem/CommentItem.styled';
import {
  CommentButtonBlock,
  CreateCommentInput,
  CreateFieldBlock,
} from './CreateCommentField.styled';
import { Button } from '@mui/material';

function CreateCommentField() {
  return (
    <CommentsWrapper>
      <CommentsContainer>
        <CommentsIconBlock></CommentsIconBlock>
        <CreateFieldBlock>
          <CreateCommentInput placeholder="Placeholder" />
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
