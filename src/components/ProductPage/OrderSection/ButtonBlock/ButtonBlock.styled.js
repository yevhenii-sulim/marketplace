import styled from 'styled-components';

export const ButtonBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 140px;
  justify-content: space-between;
  @media (max-width: 767px) {
    height: 144px;
    background-color: white;
    align-items: center;
    padding-bottom: 25px;
  }
`;
