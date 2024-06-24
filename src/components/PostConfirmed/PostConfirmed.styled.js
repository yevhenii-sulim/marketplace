import styled from 'styled-components';
import { Link as Location } from 'react-router-dom';

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 34px;
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 12px;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 75px;
  height: 100%;
  h2 {
    font-family: Jost;
    font-size: 28px;
    font-weight: 400;
    line-height: 1.5; /* 150% */
  }
  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }
`;
export const Link = styled(Location)`
  color: ${({ theme }) => theme.color.bgButton};
  border: 1px solid ${({ theme }) => theme.color.bgButton};
  font-family: 'Jost';
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45;
  border-radius: 8px;
  padding: 4px 10px;
`;
