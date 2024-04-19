import styled from 'styled-components';

export const SimilarProductItem = styled.li`
  width: 232px;
  display: flex;
  gap: 12px;
  flex-direction: column;
  padding: 8px;
  a {
    width: 100%;
    display: flex;
    gap: 12px;
    flex-direction: column;
  }
`;

export const SimilarProductDatePublic = styled.p`
  color: ${({ theme }) => theme.color.colorTextPublicProduct};
`;
export const SimilarProductItemIcon = styled.div`
  position: relative;
  height: 216px;
  width: 100%;
  box-shadow: inset 0 0 1px black;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  .eco {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`;
export const SimilarProductItemName = styled.h4`
  font-size: 18px;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.colorMainText};
`;
export const SimilarProductItemDiscount = styled.p`
  color: ${({ theme }) => theme.color.colorPriceDiscont};
  text-decoration: line-through;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
`;
export const SimilarProductItemPrice = styled.div`
  font-weight: 800;
  font-size: 22px;
  color: ${({ theme }) => theme.color.colorTextPrice};
`;
export const SimilarProductItemButtonBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const SimilarProductItemIconWrapper = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 50%;
  &:hover {
    background-color: ${({ theme }) => theme.color.bgButton};
  }
  &:hover svg {
    color: ${({ theme }) => theme.color.colorSecondText};
  }
  &:active {
    box-shadow: inset 0 0 10px 0px ${({ theme }) => theme.color.bgButonHover};
  }
`;
