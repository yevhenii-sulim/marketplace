import styled from 'styled-components';

export const ButtonBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 140px;
  gap: 4px;
  justify-content: space-between;
  @media (max-width: 767px) {
    gap: 0;
    height: 144px;
    background-color: white;
    align-items: center;
    padding-bottom: 25px;
  }
`;
