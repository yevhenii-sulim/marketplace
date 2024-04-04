import styled from 'styled-components';
export const AddButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.bgCommon};
  border-radius: 8px;
  height: 48px;
  padding: 6px 16px;
  font-family: Jost;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45;
  color: ${({ theme }) => theme.color.bgHeader};
  &:active {
    box-shadow: inset 0 0 3px ${({ theme }) => theme.color.bgHeader};
  }
`;
