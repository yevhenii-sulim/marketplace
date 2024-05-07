import styled from 'styled-components';

export const List = styled.li`
  border-radius: 10px;
  &:hover {
    box-shadow: inset 0 0 5px 0px ${({ theme }) => theme.color.bgNavCommonHover};
  }
  &:hover p {
    font-weight: 600;
  }
  a {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: space-between;
    padding: 16px;
  }
  img {
    display: block;
    width: 88px;
    height: 88px;
    margin: auto;
    border-radius: 50%;
  }
  p {
    width: 100%;
    font-size: 18px;
    line-height: 1.44;
    color: ${({ theme }) => theme.color.colorMainText};
    text-align: center;
  }
  .hover-tab {
    &:hover {
      background-color: ${({ theme }) => theme.color.bgNavCommonHover};
    }
  }
`;
