import styled from 'styled-components';

export const CommentsWrapper = styled.section`
  width: 100%;
  border-radius: 12px;
  margin-top: 24px;
`;
export const CommentsContainer = styled.article`
  display: flex;
  width: 98%;
  margin: 16px auto;
  justify-content: space-evenly;
`;
export const CommentsIconBlock = styled.div`
  width: 64px;
  height: 64px;
  background-color: #d9d9d9;
  border-radius: 50%;
  border: 1px solid black;
`;

export const CommentsContentBlock = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const CommentsNameAndDataBlock = styled.div`
  font-weight: 800;
  font-size: 18px;
`;
export const CommentsDataBlock = styled.span`
  font-weight: 400;
  font-size: 18px;
  color: #686868;
  margin-left: 8px;
`;
export const CommentsTextBlock = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin-top: 4px;
`;
export const CommentsRating = styled.div`
  display: flex;
  margin-top: 8px;
`;
export const CommentsRatingThumbUp = styled.div`
  display: flex;
  cursor: pointer;
`;
export const CommentsRatingThumbDown = styled.div`
  display: flex;
  margin-left: 12px;
  cursor: pointer;
`;
export const CommentsRatingThumbQuantity = styled.span`
  display: flex;
  margin-left: 2px;
`;
export const CommentsAnswer = styled.button`
  display: flex;
  margin-left: 2px;
  background-color: transparent;
  margin-left: 12px;
`;
