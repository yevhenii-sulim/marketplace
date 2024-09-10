import styled from 'styled-components';
export const FormSearch = styled.form`
  max-width: 300px;
  width: 100%;
  height: 32px;
  position: relative;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  height: 48px;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
    margin-left: auto;
    margin-right: auto;
    padding-left: 0;
    padding-right: 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    max-width: 100%;
    width: 300px;
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.xl}) {
    width: 433px;
  }
  input {
    border: 1px solid ${({ theme }) => theme.color.borderRegister};
    width: 100%;
    height: 100%;
    padding: 8px 8px 8px 24px;
    outline: none;
    background-color: ${({ theme }) => theme.color.bgProduct};
    border-radius: 8px;
    font-size: 16px;
    line-height: 26px;
    &:placeholder {
      font-size: 16px;
      line-height: 1.44;
      color: ${({ theme }) => theme.color.borderSearch};
    }
  }
  button {
    background-color: ${({ theme }) => theme.color.bgButton};
    color: ${({ theme }) => theme.color.colorButtonText};
    font-weight: 700;
    line-height: 1.25;
    border-radius: 8px;
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 0 12px;
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translatey(-50%);

    &:active {
      box-shadow: inset 0 0 3px ${({ theme }) => theme.color.colorButtonText};
    }
    @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
      padding: 6px 12px;
    }
  }

  svg {
    fill: ${({ theme }) => theme.color.colorButtonText};
  }
`;
export const styleSkeleton = {
  position: 'absolute',
  bottom: '-90%',
  left: '0',
  width: '100%',
};
export const PrevShowSearchedProduct = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;
  top: calc(100% + 32px);
  left: 50%;
  z-index: 5;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 6px;
  width: 500px;
  max-height: 500px;
  overflow-y: auto;
  padding: 15px;
  li {
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.color.bgButton};
    }
  }
`;
export const BoxLoader = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  right: 120px;
  transform: translateY(-50%);
  align-items: center;
`;
