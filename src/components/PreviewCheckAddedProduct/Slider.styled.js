import styled from 'styled-components';

export const SliderContainer = styled.section`
  height: 320px;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: white;
  border-radius: 12px;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.sx}) {
    height: 480px;
  }
`;
export const SlidersWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  width: 100%;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
export const ArrowLeftWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  background-color: #f5f5f5;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
`;
export const ArrowRightWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  background-color: #f5f5f5;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
`;
export const WrapperSlide = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* img {
    width: 80%;
    height: auto;
  } */
`;
