import styled from 'styled-components';
import { Link as linkContact } from 'react-router-dom';
export const Contact = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 11px;
  line-height: 1.4;
  h4 {
    white-space: nowrap;
    font-size: 18px;
    font-weight: 800;
    line-height: 0;
    color: ${({ theme }) => theme.color.colorSecondText};
  }
  p {
    font-size: 18px;
  }
`;
export const Link = styled(linkContact)`
  display: block;
  width: 32px;
  height: 32px;
  svg {
    width: 100%;
    height: 100%;
  }
`;
export const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 232px;
  gap: 6px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.bgFooter};
  padding: 4px 10px;
`;
export const Img = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.bgAddImage};
  width: 100px;
  height: 100px;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
