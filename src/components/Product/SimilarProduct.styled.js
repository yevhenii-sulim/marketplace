import styled from 'styled-components';
const dpr = window.devicePixelRatio;
export const SimilarProductItem = styled.li`
  width: 160px;
  @media screen and (min-width: calc(768px/${dpr})) {
    width: 232px;
    height: 440px;
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
  font-size: 18px;
  font-weight: 400;
  margin-top: 12px;
  height: 42px;
  color: ${({ theme }) => theme.color.colorMainText};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
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
    background-color: ${({ theme }) => theme.color.bgLike};
  }
  &:active {
    background-color: ${({ theme }) => theme.color.bgButtonHover};
  }
`;
