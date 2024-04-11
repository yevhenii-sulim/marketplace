import styled from 'styled-components';
import { Link as LinkProducts } from 'react-router-dom';

export const List = styled.li`
  a {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    padding: 16px;
  }
  img {
    width: 88px;
    height: 88px;
    display: block;
    border-radius: 50%;
    border: 1px solid black;
  }
  p {
    font-size: 18px;
    line-height: 1.44;
    color: ${({ theme }) => theme.color.colorMainText};
  }
`;
export const Link = styled(LinkProducts)``;
