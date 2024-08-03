import styled from 'styled-components';

export const CommentsWrapper = styled.section`
  width: ${({ $isNested }) => ($isNested ? '82%' : '100%')};
  border-radius: 12px;
  margin: ${({ $isNested }) => ($isNested ? '8px auto 0 120px' : '24px 0 0 0')};
`;
export const CommentsContainer = styled.article`
  display: flex;
  width: 98%;
  margin: 16px auto;
  ${({ $isNested }) => ($isNested ? '' : 'justify-content: space-evenly')};
`;
export const CommentsIconBlock = styled.div`
  width: ${({ $isNested }) => ($isNested ? '32px' : '64px')};
  height: ${({ $isNested }) => ($isNested ? '32px' : '64px')};
  background-color: #d9d9d9;
  border-radius: 50%;
  border: 1px solid black;
`;

export const CommentsContentBlock = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  ${({ $isNested }) => ($isNested ? 'margin-left: 16px' : '')};
`;

export const CommentsNameAndDataBlock = styled.div`
  display: flex;
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
  width: 98%;
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
  align-items: center;
  cursor: pointer;
`;
export const CommentsRatingThumbDown = styled.div`
  display: flex;
  margin-left: 12px;
  align-items: center;
  cursor: pointer;
`;
export const CommentsRatingThumbQuantity = styled.span`
  display: flex;

  align-items: center;
  margin-left: 2px;
`;
export const IconLikeWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2px;
  background-color: ${props =>
    props.checked ? props.theme.color.bgButton : 'transparent'};
  border-radius: 50%;
`;
export const IconDislikeWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2px;
  background-color: ${props =>
    props.checked ? props.theme.color.bgButton : 'transparent'};
  border-radius: 50%;
`;

export const CommentsAnswer = styled.button`
  display: flex;
  margin-left: 2px;
  align-items: center;
  background-color: transparent;
  margin-left: 12px;
`;

export const DotsWrapper = styled.div`
  margin-left: auto;
`;
export const WrapperForRating = styled.div`
  display: flex;
`;
export const RatingNumber = styled.span`
  margin-left: 4px;
  color: #faaf00;
`;

export const ParameterWrapper = styled.div`
  font-weight: 400;
  margin-left: 5px;
`;

export const CommentsExpandedWrapper = styled.div`
  width: 100%;
  margin-left: 17%;
  display: flex;
`;
export const CommentsExpandedButton = styled.button`
  width: 110px;
  display: flex;
  align-items: center;
  background-color: transparent;
  justify-content: space-between;
`;

export const AllCommentsContainer = styled.div``;
