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
import axios from 'axios';
import { useProductPageContext } from 'components/ProductPage/context/ProductPageProvider';
import { SyncLoader } from 'react-spinners';

function CreateCommentField({ productId }) {
  const context = useProductPageContext();
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [showValidationComment, setShowValidationComment] = useState(false);
  const validationComment = comment => {
    return comment && comment.length >= 4;
  };
  const addComment = async (comment, id) => {
    try {
      if (validationComment(comment)) {
        setLoading(true);
        const newComment = await axios.post(
          process.env.REACT_APP_API_URL + '/comment',
          {
            body: comment,
            product: id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        console.log(newComment);
        setShowValidationComment(false);
      } else {
        setShowValidationComment(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      context.setTriggerRerender(prev => !prev);

      setNewComment('');
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
          <LoaderWrapper>
            <SyncLoader
              color="grey"
              size={5}
              speedMultiplier={0.5}
              loading={loading}
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
              onClick={() => addComment(newComment, productId)}
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
