import styled from 'styled-components';
import { Link as Location } from 'react-router-dom';
import { theme } from 'utils/theme';

export const WrapperOrder = styled.div`
  display: grid;
  grid-template-columns: 2fr 300px;
  gap: 32px;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.44;
  & .visibility-hidden {
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
export const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 12px;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 24px;
`;
export const FormSearch = styled.form`
  width: 433px;
  height: 48px;
  position: relative;
  input {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    padding: 8px 8px 8px 24px;
    background-color: ${({ theme }) => theme.color.bgProduct};
    border: 1px solid ${({ theme }) => theme.color.borderSearch};
    outline: none;
    &:placeholder {
      font-size: 18px;
      line-height: 1.44;
      color: ${({ theme }) => theme.color.borderSearch};
    }
  }
  button {
    background-color: ${({ theme }) => theme.color.bgButton};
    color: ${({ theme }) => theme.color.colorButtonText};
    font-weight: 700;
    line-height: 1.25;
    border-radius: 8px;
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 6px 12px;
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translatey(-50%);
    &:active {
      box-shadow: inset 0 0 3px ${({ theme }) => theme.color.colorButtonText};
    }
  }
  svg {
    fill: ${({ theme }) => theme.color.colorButtonText};
  }
`;
export const WrapperStoryOrder = styled.ul`
  gap: 32px;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.44;
`;

export const WrapperProduct = styled.div`
  display: flex;
  justify-content: space-between;
  &.story {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: 200px;
  &.basket {
    margin-right: auto;
  }
`;
export const Title = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  &.story {
    margin-right: auto;
  }
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
  &.story {
    margin: auto;
  }
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
  width: 100%;
  &.story {
    flex-direction: column;
    gap: 32px;
    justify-content: center;
  }
  &.basket button {
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
  &.story {
    display: flex;
    align-items: center;
  }
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
  whiteSpace: 'nowrap',
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

export const viewProductButton = {
  textTransform: 'none',
  display: 'flex',
  alignItems: 'center',
  bgcolor: theme.color.bgProduct,
  borderRadius: '8px',
  height: '48px',
  padding: '6px 16px',
  fontFamily: 'Jost',
  fontSize: '22px',
  fontWeight: '700',
  lineHeight: '1.45',
  outline: 'none',
  color: theme.color.bgHeader,
  whiteSpace: 'nowrap',
  border: `1px solid ${theme.color.bgButton}`,
  '&:hover': {
    color: theme.color.colorButtonText,
    backgroundColor: theme.color.bgButtonHover,
  },
  '&:active': {
    boxShadow: `inset 0 0 5px 0px ${theme.color.bgHeader}`,
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
  margin: 16px 16px 16px 0;
  border-radius: 50%;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

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
`;

export const ListStoryOrder = styled.li`
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 12px;
  padding: 32px;
  display: grid;
  grid-template-columns: 2fr 300px;
  &:not(:last-child) {
    margin-bottom: 24px;
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

export const NumberOrder = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25; /* 125% */
`;
export const DateOrer = styled.span`
  color: ${({ theme }) => theme.color.colorTextExplainment};
  font-family: 'Nunito Sans';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  white-space: nowrap;
`;
export const ImageStory = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 16px 16px 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const State = styled.span`
  font-size: 18px;
  font-weight: 800;
  line-height: 1.44; /* 144.444% */
  color: ${({ $state, theme }) => {
    switch ($state[0]) {
      case 'worked':
        return theme.color.colorTextWorkedOrder;
      case 'waited':
        return theme.color.colorTextWaitedOrder;
      default:
        return theme.color.colorTextCancelledOrder;
    }
  }};
`;
export const Coust = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  flex-grow: 2;
  align-items: center;
  margin-left: 16px;
`;

export const WrapperModal = styled.div`
  width: 100%;
  position: absolute;
  box-shadow: 0px 9px 30px 2px rgba(0, 0, 0, 0.15),
    0px -164px 46px 0px rgba(130, 130, 130, 0),
    0px -105px 42px 0px rgba(130, 130, 130, 0.01),
    0px -59px 35px 0px rgba(130, 130, 130, 0.03),
    0px -26px 26px 0px rgba(130, 130, 130, 0.05),
    0px -7px 14px 0px rgba(130, 130, 130, 0.06);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.bgProduct};
  padding: 44px 52px;
  @media screen and (min-width: 480px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 424px;
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 32px;
      height: 100%;
    }
  }
  p {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.25;
    text-align: center;
    margin-bottom: 12px;
  }
  .close-modal {
    width: 30px;
    height: 30px;
    background-color: transparent;
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .comment {
    font-family: 'Nunito Sans';
    font-size: 18px;
    font-weight: 400;
    line-height: 1, 44;
    width: 100%;
    min-height: 400px;
    border-radius: 6px;
    resize: vertical;
    outline: none;
    padding: 16px;
    focus {
      box-shadow: inset 0 0 0 2px ${({ theme }) => theme.color.bgButton};
    }
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.bgBackdrop};
`;

export const stayInButton = {
  width: '148px',
  fontSize: '18px',
  whiteSpace: 'nowrap',
  fontWeight: '800',
  fontFamily: 'Nunito Sans',
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
