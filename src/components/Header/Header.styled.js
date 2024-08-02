import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.color.bgHeader};
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1440px;
  padding-left: 58px;
  padding-right: 58px;
  margin: auto;
  padding-top: 18px;
  padding-bottom: 18px;
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 18px;
`;
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
