import styled from 'styled-components';

export const SellerInfoWrapper = styled.article`
  width: 100%;
  background-color: white;
  border-radius: 12px;
  margin-top: 24px;
`;
export const SellerInfoContainer = styled.section`
  width: 93%;
  margin: 0 auto;
`;
export const SellerRole = styled.span`
  display: block;
  font-weight: 700;
  margin-top: 16px;
`;
export const SellerDate = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin-top: 16px;
`;
export const SellerIconWrapper = styled.div`
  display: flex;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1px black solid;
  background-color: #d9d9d9;
`;
export const SellerNameBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SellerName = styled.span`
  font-family: Nunito Sans;
  font-size: 20px;
  font-weight: 500;
  display: flex;
`;
export const SellerRatingBlock = styled.span`
  display: flex;
  align-items: center;
`;
export const SellerRating = styled.span`
  font-family: Nunito Sans;
  font-size: 18px;
  display: flex;
  margin-left: 2px;
`;
export const LinkMoreProductsSeller = styled.a`
  font-family: Nunito Sans;
  font-size: 18px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  margin: 16px 0;
  cursor: pointer;
`;
