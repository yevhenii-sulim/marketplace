import styled from 'styled-components';

export const CreateFieldBlock = styled.div`
  width: 80%;
`;

export const CreateCommentInput = styled.input`
  width: 100%;
  height: 24px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid black;
  padding: 4px 0 8px 0;
  outline: none;
  margin-top: 8px;
  font-size: 16px;
`;

export const CommentButtonBlock = styled.div`
  display: flex;
  width: 65%;
  justify-content: space-between;
  margin: 8px 0 0 auto;
`;

export const ErrorValidationComment = styled.span`
  color: red;
`;
