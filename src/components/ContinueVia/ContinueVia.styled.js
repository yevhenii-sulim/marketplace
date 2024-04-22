import styled from 'styled-components';

export const LinkGoIn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 2px solid ${({ theme }) => theme.color.borderRegistr};
  border-radius: 6px;
  padding: 6px 43px;
  text-decoration: none;
  width: 100%;
  color: inherit;
  span {
    font-weight: 700;
  }
`;
