import styled from 'styled-components';

export const SliderContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 480px;
  background-color: white;
  border-radius: 12px;
`;
export const SlidersWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  width: 100%;
  overflow-x: scroll;
  overflow-x: hidden;
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
  align-item: center;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  background-color: #f5f5f5;
  padding: 8px 12px;
  border-radius: 4px;
`;
export const ArrowRightWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-item: center;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  background-color: #f5f5f5;
  padding: 8px 12px;
  border-radius: 4px;
`;
export const WrapperSlide = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
`;
