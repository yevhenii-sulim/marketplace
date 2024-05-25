import { Link as Location } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerOrders = styled.div``;
export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 34px;
  padding: 24px;
`;
export const Link = styled(Location)`
  background-color: ${({ theme }) => theme.color.bgButton};
  color: ${({ theme }) => theme.color.colorButtonText};
  font-family: 'Jost';
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45;
  border-radius: 8px;
  padding: 4px 10px;
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: space-between;
`;
export const Count = styled.div`
  display: flex;
  gap: 14px;
`;
