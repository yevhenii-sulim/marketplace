import styled from 'styled-components';
import { Link as LinkEntered } from 'react-router-dom';
import { Link as linkComponents } from 'react-router-dom';
export const BackDrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.bgBackdrop};
  header {
    background-color: ${({ theme }) => theme.color.bgHeader};
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
  main {
    background: ${({ theme }) => theme.color.bgAddImage};
    padding-top: 24px;
    height: 100%;
  }
  section {
    border-bottom: 1px solid ${({ theme }) => theme.color.bgBackdropLinePoPup};
    padding: 16px 0;
    padding-left: 12px;
    padding-right: 12px;
  }
`;
export const Menu = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  left: ${({ $isOpenMenu }) => ($isOpenMenu ? '0%' : '-100%')};
  display: flex;
  flex-direction: column;
  transition: left 500ms ease;
  width: 322px;

  @media screen and (min-width: 768px) {
    width: 414px;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }
`;
export const AddContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.bgBackdropLinePoPup};
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 16px;
  text-align: center;
`;
export const Contacts = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
export const EnteredProfile = styled.div`
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 8px;
  padding: 24px 0px;
  p {
    text-align: center;
    margin-bottom: 16px;
  }
`;
export const LinkEnter = styled(LinkEntered)`
  padding: 10px 48px;
  background-color: ${({ theme }) => theme.color.bgButton};
  border-radius: 4px;
  display: block;
  width: 274px;
  text-align: center;
  font-family: Jost;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45; /* 145.455% */
  color: ${({ theme }) => theme.color.colorSecondText};
  margin: auto;
`;
export const AuxiliaryComponents = styled.div``;
export const LinkAxillary = styled(linkComponents)`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  gap: 12px;
  line-height: 1.5; /* 150% */
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
