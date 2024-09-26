import styled from 'styled-components';
export const SimilarProductItem = styled.li`
  width: 232px;
  height: 340px;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    width: 160px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
    width: 232px;
    height: 440px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    width: 160px;
    height: 340px;
  }
  position: relative;
  display: flex;
  gap: 12px;
  flex-direction: column;
  justify-content: stretch;
  padding: 8px 8px 20px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.bgProduct};
  a {
    width: 100%;
    display: flex;

    flex-direction: column;
  }
`;

export const SimilarProductDatePublic = styled.p`
  display: flex;
  padding: 0 0 2px 0;
  color: ${({ theme }) => theme.color.colorTextPublicProduct};
  margin: auto 0 0 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 16px;
    line-height: 1.25;
  }
`;
export const SimilarProductItemIcon = styled.div`
  position: relative;
  width: 100%;
  box-shadow: inset 0 0 1px black;
  padding: 2px;
  img {
    width: 100%;
    display: block;
    object-fit: cover;
  }
  .eco {
    position: absolute;
    top: 8px;
    right: 8px;
  }
  .flag-ukraine {
    position: absolute;
    top: 8px;
    left: 8px;
  }
`;
export const Price = styled.div``;
export const SimilarProductItemName = styled.h4`
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  margin-top: 12px;
  color: ${({ theme }) => theme.color.colorMainText};
  height: 30px;
  overflow: hidden;
  position: relative;
  &:hover {
    overflow: visible;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 18px;
    height: 48px;
    line-height: 1.44;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    background-color: ${({ theme }) => theme.color.bgProduct};
    &:hover {
      -webkit-line-clamp: unset;
    }
  }
`;
export const SimilarProductItemPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 14px;
  font-weight: 800;
  font-size: 22px;
  color: ${({ theme, $discount }) =>
    $discount ? theme.color.colorTextPrice : theme.color.colorMainText};
`;

export const SimilarProductItemDiscount = styled.p`
  color: ${({ theme }) => theme.color.colorMainText};
  text-decoration: line-through;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  white-space: nowrap;
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
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    &:hover {
      background-color: ${({ theme }) => theme.color.bgLike};
    }
    &:active {
      background-color: ${({ theme }) => theme.color.bgButtonHover};
    }
  }
`;
