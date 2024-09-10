import styled from 'styled-components';
import { Link as Location } from 'react-router-dom';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.bgBackdrop};
  z-index: 10;
  overflow-y: auto;
`;
export const Empty = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 34px;
  max-width: 1000px;
  margin: 100px auto;
  background-color: ${({ theme }) => theme.color.bgProduct};
  margin-top: 32px;
  border-radius: 12px;
  padding-top: 24px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 24px;
  p {
    color: ${({ theme }) => theme.color.colorTextStartUserPage};
  }
`;

export const cssButtonClose = {
  position: 'absolute',
  top: '10px',
  right: '10px',
};

export const TitleSection = styled.h1`
  position: absolute;
  left: 40px;
  top: 24px;
  font-family: Jost;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.5; /* 150% */
  letter-spacing: -0.32px;
`;

export const Link = styled(Location)`
  color: ${({ theme }) => theme.color.colorButtonText};
  background-color: ${({ theme }) => theme.color.bgButton};
  font-family: 'Jost';
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45;
  border-radius: 8px;
  padding: 4px 10px;
`;

export const WrapperOrder = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 8px;
  gap: 32px;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.44;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 80px;
  padding-bottom: 24px;
  margin: 100px auto;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    grid-template-columns: 2fr 300px;
    max-width: 1000px;
    padding-left: 40px;
    padding-right: 40px;
    grid-template-areas:
      'list-goods wrapper-buy'
      'buttons buttons';
  }
  ul {
    @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
      grid-area: list-goods;
    }
  }
`;
