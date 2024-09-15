import styled from 'styled-components';

export const CreateFieldBlock = styled.div`
  display: flex;
  width: 100%;
  margin: 16px 0;

  justify-content: flex-end;
`;

export const CreateCommentInput = styled.textarea`
  width: 100%;
  height: 140px;
  background-color: transparent;
  border: none;
  border: 1px solid black;
  border-radius: 8px;
  padding: 4px 4px 8px 4px;
  outline: none;
  margin-top: 8px;
  margin-left: auto;
  font-size: 16px;
  font-family: 'Nunito Sans', sans-serif;
  resize: none;
`;

export const CommentButtonBlock = styled.div`
  display: flex;
  width: ${({ $isNested }) => ($isNested ? '75%' : '55%')};
  justify-content: space-between;
  margin: 8px 0 0 auto;
  @media (max-width: 1440px) {
    width: ${({ $isNested }) => ($isNested ? '85%' : '55%')};
  }
  @media (max-width: 1120px) {
    width: ${({ $isNested }) => ($isNested ? '95%' : '55%')};
  }
  @media (max-width: 1024px) {
    width: ${({ $isNested }) => ($isNested ? '65%' : '55%')};
    margin: 8px 0 0 auto;
  }
  @media (max-width: 767px) {
    width: ${({ $isNested }) => ($isNested ? '65%' : '55%')};
  }
  @media (max-width: 600px) {
    width: ${({ $isNested }) => ($isNested ? '80%' : '55%')};
  }
  @media (max-width: 500px) {
    width: ${({ $isNested }) => ($isNested ? '90%' : '55%')};
  }
  @media (max-width: 430px) {
    width: ${({ $isNested }) => ($isNested ? '100%' : '55%')};
  }
`;

export const ErrorValidationComment = styled.span`
  color: red;
`;
export const LoaderWrapper = styled.div`
  position: absolute;
  top: 5px;
  left: 4px;
`;

export const CreateFieldContainer = styled.div`
  position: relative;
  width: 75%;
  margin: 0 60px 0 auto;
`;
