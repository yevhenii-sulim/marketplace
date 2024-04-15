import styled from 'styled-components';
import { Link as linkContact } from 'react-router-dom';
export const Contact = styled.li`
  display: flex;
  flex-direction: column;
  gap: 11px;
  line-height: 1.4;
  h4 {
    white-space: nowrap;
    font-size: 18px;
    font-weight: 800;
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
