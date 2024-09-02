import styled from 'styled-components';

export const ButtonBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 140px;
  gap: 4px;
  justify-content: space-between;
  @media (max-width: 1024px) {
    height: 144px; 
    flex-direction: row;
    align-items: center;

    & > * {
      order: 0;
    }
    & > :nth-child(1) {
      order: 2;
    }
    & > :nth-child(2) {
      order: 1;
    }
    & > :nth-child(3) {
      order: 0;
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
    background-color: white;
    padding-bottom: 25px;
    & > :nth-child(1) {
      order: 1;
    }
    & > :nth-child(2) {
      order: 2;
    }
  }
`;
