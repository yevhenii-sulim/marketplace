import styled from 'styled-components';
export const MerchandiseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 176px;
  padding: 8px;
`;

export const NameItem = styled.h3`
  color: ${({ theme }) => theme.color.colorButton};
  line-height: 1, 43;
`;

export const PriceItem = styled.p`
  color: ${({ theme }) => theme.color.colorButton};
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1, 4;
`;
export const Action = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Buy = styled.button`
  color: ${({ theme }) => theme.color.colorButton};
  background: ${({ theme }) => theme.color.bgButton};
  padding: 6px 32px;
  border-radius: 100px;
  border: none;
  outline: none;
`;
export const Like = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
`;
