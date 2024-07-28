import styled from 'styled-components';

export const Container = styled.li`
  [type='checkbox'] {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }
  [type='checkbox']:checked + label {
    color: ${({ theme }) => theme.color.colorTextHover};
    border: 1px solid ${({ theme }) => theme.color.colorTextHover};
  }
  h3 {
    position: relative;
    font-family: Jost;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.45;
  }
`;
export const SizeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 8px;
`;
export const ButtonExpand = styled.button`
  position: absolute;
  top: 50%;
  right: 5px;
  background-color: transparent;
  transform: translateY(-50%);
  font-size: 0;
`;
export const Box = styled.div`
  font-size: 18px;
  line-height: 26px;
  min-width: 60px;
  min-height: 44px;

  label {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.color.borderSize};
    border-radius: 6px;
    cursor: pointer;
    transition: all 500ms ease;
    &:hover {
      color: ${({ theme }) => theme.color.colorTextHover};
      border: 1px solid ${({ theme }) => theme.color.colorTextHover};
    }
  }
`;
