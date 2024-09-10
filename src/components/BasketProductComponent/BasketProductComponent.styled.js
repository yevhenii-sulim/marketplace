import styled from 'styled-components';

export const List = styled.li`
  border-radius: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.color.borderBasketList};
  padding-top: 32px;
  padding-bottom: 32px;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.sx}) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;
export const WrapperProduct = styled.div`
  display: flex;
  justify-content: space-between;
  &.story {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;
export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 114px;
  height: 114px;
  box-sizing: border-box;
  margin: 16px 16px 16px 0;
  border-radius: 50%;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const About = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-right: auto;
  gap: 8px;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    gap: 40px;
  }
`;

export const AboutProduct = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 130px;
  gap: 4px;
`;

export const Actives = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  button {
    display: block;
    background-color: transparent;
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 12px;
`;

export const Count = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3px;
  width: 16px;
  height: 16px;
  gap: 8px;
  background-color: transparent;
  line-height: 0;
  .buttons {
    display: flex;
    align-items: center;
  }
  svg {
    width: 16px;
    height: 16px;
    @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
      width: 24px;
      height: 24px;
    }
  }
  .count {
    background: transparent;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .MuiSvgIcon-root:active {
    color: ${({ theme }) => theme.color.bgButton};
  }
`;
export const Price = styled.div`
  font-family: Jost;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45;

  .price-discount {
    display: flex;
    color: ${({ theme }) => theme.color.colorPriceDiscant};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    text-decoration: line-through;
    white-space: nowrap;
  }
  .discount {
    color: ${({ theme }) => theme.color.colorTextPrice};
    white-space: nowrap;
  }
  .price {
    color: ${({ theme }) => theme.color.colorMainText};
    white-space: nowrap;
  }
`;
