import React, { useState } from 'react';
import { CommentsWrapper } from '../CommentItem/CommentItem.styled';
import {
  CommentButtonBlock,
  CreateCommentInput,
  CreateFieldBlock,
  CreateFieldContainer,
  ErrorValidationComment,
  LoaderWrapper,
} from './CreateCommentField.styled';
import { Button } from '@mui/material';
import { SyncLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../../../redux/productPage/productPageSlice';
import { Rating } from '@mui/material';
import { cancelButton, commentedButton, rating } from './material.styles';

function CreateCommentField({
  productId,
  parent,
  parentIndex,
  isNested,
  toggleCommentForm,
}) {
  const createCommentLoading = useSelector(
    state => state.productPage.createCommentLoading
  );

  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState('');
  const [showValidationComment, setShowValidationComment] = useState(false);
  const validationComment = comment => {
    return comment && comment.length >= 4;
  };
  const addNewComment = async (parent, comment, id, parentIndex, rating) => {
    if (validationComment(comment)) {
      setShowValidationComment(false);

      dispatch(addComment({ parent, comment, id, parentIndex, rating }));
      setNewComment('');
    } else {
      setShowValidationComment(true);
    }
  };

  return (
    <CommentsWrapper>
      <CreateFieldBlock>
        <CreateFieldContainer>
          {showValidationComment && (
            <ErrorValidationComment>
              This comment is very short
            </ErrorValidationComment>
          )}
          {parent ? null : (
            <Rating
              name="half-rating"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={rating}
            />
          )}
          <CreateCommentInput
            placeholder={createCommentLoading ? '' : 'Додайте коментар...'}
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

          <CommentButtonBlock $isNested={isNested}>
            <Button
              variant="outlined"
              sx={cancelButton}
              onClick={() => {
                toggleCommentForm('');
                setNewComment('');
              }}
            >
              Скасувати
            </Button>
            <Button
              variant="contained"
              sx={commentedButton}
              onClick={() =>
                addNewComment(parent, newComment, productId, parentIndex, value)
              }
            >
              Коментувати
            </Button>
          </CommentButtonBlock>
        </CreateFieldContainer>
      </CreateFieldBlock>
    </CommentsWrapper>
  );
}

export default CreateCommentField;
