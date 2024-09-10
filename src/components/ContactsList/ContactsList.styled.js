import styled from 'styled-components';

export const ContactList = styled.ul`
  display: grid;
  height: 100%;
  justify-content: center;
  align-content: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 8px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 12px;
  padding-right: 12px;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.xl}) {
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    align-items: center;
  }
`;
export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.mx}) {
    width: 500px;
  }
`;
export const LogoTeam = styled.div``;
