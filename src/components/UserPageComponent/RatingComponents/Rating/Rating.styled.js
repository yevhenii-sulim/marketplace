import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SetedRating = styled.ul`
  position: absolute;
  left: 0;
  top: 0;
  display: inline-flex;
  gap: 24px;
`;
export const StarList = styled.ul`
  position: relative;
  display: inline-flex;
  justify-content: center;
  gap: 24px;
  width: auto;
  margin-top: 64px;
  margin-bottom: 16px;
  div {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
    background-color: red;
  }
`;
export const Hint = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5; /* 150% */
  }
`;
