import { Link as LinkCategory } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'utils/theme';

export const Link = styled(LinkCategory)`
  text-decoration: none;
  color: inherit;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
  }
`;
export const NameCategory = styled.p`
  text-align: center;
  font-family: 'Jost';
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5; /* 150% */
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.45;
  }
`;

export const Category = styled.ul`
  margin-bottom: 32px;
  margin-top: 32px;
`;

export const List = styled.li`
  width: 160px;
  padding: 4px;
`;

export const ButtonSlider = {
  color: theme.color.colorButtonText,
  '&:hover': {
    color: theme.color.colorButton,
  },
};

export const Pointer = styled.ul`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  gap: 4px;
  li {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.bgCommon};
    & + li {
      background-color: ${({ theme }) => theme.color.bgButton};
    }
    & + li + li {
      background-color: ${({ theme }) => theme.color.bgCommon};
    }
  }
`;
