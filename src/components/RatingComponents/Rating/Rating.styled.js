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
  gap: 4px;
  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;
export const StarList = styled.ul`
  position: relative;
  display: inline-flex;
  justify-content: center;
  width: auto;
  margin-top: 64px;
  margin-bottom: 16px;
  gap: 4px;
  div {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
    background-color: red;
  }
  svg {
    width: 60px;
    height: 60px;
    @media screen and (min-width: 768px) {
      width: 72px;
      height: 72px;
    }
  }
  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;
export const Hint = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  width: 100%;
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5; /* 150% */
  }
`;
