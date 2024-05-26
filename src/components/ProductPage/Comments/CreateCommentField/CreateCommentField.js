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
  LoaderWrapper,
} from './CreateCommentField.styled';
import { Button } from '@mui/material';
import { SyncLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../../../redux/productPage/productPageSlice';

function CreateCommentField({ productId, parent, parentIndex }) {
  const createCommentLoading = useSelector(
    state => state.productPage.createCommentLoading
  );
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState('');
  const [showValidationComment, setShowValidationComment] = useState(false);
  const validationComment = comment => {
    return comment && comment.length >= 4;
  };
  const addNewComment = async (parent, comment, id, parentIndex) => {
    if (validationComment(comment)) {
      setShowValidationComment(false);

      dispatch(addComment({ parent, comment, id, parentIndex }));
      setNewComment('');
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
            placeholder={createCommentLoading ? '' : 'Placeholder'}
            onChange={e => setNewComment(e.target.value)}
            value={newComment}
          />
          <LoaderWrapper>
            <SyncLoader
              color="grey"
              size={5}
              speedMultiplier={0.5}
              loading={createCommentLoading}
            />
          </LoaderWrapper>
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
              onClick={() =>
                addNewComment(parent, newComment, productId, parentIndex)
              }
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
