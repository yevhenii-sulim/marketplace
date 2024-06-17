import { Link as Location } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'utils/theme';

export const WrapperOrder = styled.div`
  display: grid;
  grid-template-columns: 2fr 300px;
  gap: 32px;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.44;
`;

export const WrapperProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  margin-right: auto;
`;
export const Title = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`;
export const Actives = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Price = styled.div`
  font-family: Jost;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45;
  .price-discount {
    color: ${({ theme }) => theme.color.colorPriceDiscant};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25; /* 125% */
    text-decoration: line-through;
  }
  .discount {
    color: ${({ theme }) => theme.color.colorTextPrice};
  }
  .price {
    color: ${({ theme }) => theme.color.colorMainText};
  }
`;
export const DeleteAdd = styled.div`
  display: flex;
  gap: 44px;
  button {
    background-color: transparent;
  }
`;
export const TotalPrice = styled.div`
  background-color: ${({ theme }) => theme.color.bgProduct};
  width: 100%;
  border-radius: 12px;
  padding: 32px 8px;
`;
export const WrapperBuy = styled.div`
  .info-price {
    font-size: 18px;
    font-weight: 800;
    line-height: 1.44; /* 144.444% */
    &_discount {
      color: ${({ theme }) => theme.color.colorTextPrice};
    }
  }
  .info {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.25;
  }
`;
export const WrapperButton = styled.div`
  text-align: center;
`;
export const addProductButton = {
  width: '264px',
  fontSize: '22px',
  fontWeight: '700',
  fontFamily: 'Jost',
  color: theme.color.colorButtonText,
  bgcolor: theme.color.bgButton,
  borderRadius: '6px',
  textAlign: 'center',
  padding: '8px 0px',
  lineHeight: 1.4,
  textTransform: 'none',
  translate: 'all 100ms ease',
  '&:hover': {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    bgcolor: theme.color.bgButton,
  },
  '&:active': {
    boxShadow: 'none',
  },
  '&:disabled': {
    color: 'black',
  },
};

export const Sum = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
`;
export const Discount = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 65px;
`;
export const Total = styled.div`
  font-family: Jost;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45; /* 145.455% */
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 32px;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 114px;
  height: 114px;
  box-sizing: border-box;
  padding: 16px;
  border-radius: 50%;
  overflow: hidden;
`;

export const ContainerOrders = styled.form``;
export const ContainerFavorite = styled.div`
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 12px;
`;
export const ContainerNotification = styled.div`
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 12px;
  padding-top: 56px;
  padding-bottom: 56px;

  p {
    max-width: 755px;
    text-align: center;
  }
`;
export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 34px;
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 12px;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 75px;

  p {
    color: ${({ theme }) => theme.color.colorTextStartUserPage};
  }
`;

export const styleRemoveProductButton = {
  position: 'absolute',
  color: `${theme.color.bgButton}`,
  bgcolor: `${theme.color.bgBackdrop}`,
  borderRadius: '6px',
  zIndex: '2',
  bottom: '10px',
  right: '10px',
  cursor: 'pointer',
};

export const Link = styled(Location)`
  background-color: ${({ theme }) => theme.color.bgButton};
  color: ${({ theme }) => theme.color.colorButtonText};
  font-family: 'Jost';
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45;
  border-radius: 8px;
  padding: 4px 10px;
`;

export const List = styled.li`
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 12px;
  padding: 32px;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  .hidden {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }
`;
export const Count = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  .count {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.color.bgButton};
    border-radius: 3px;
    width: 16px;
    height: 16px;
    background-color: transparent;
  }
`;
