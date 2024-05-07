import styled from 'styled-components';
export const OpenCategoryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  border: none;
  outline: none;
  background-color: transparent;
`;
export const TitleNav = styled.p`
  font-family: 'Jost';
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45;
  color: ${({ theme }) => theme.color.colorSecondText};
`;
