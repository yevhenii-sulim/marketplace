import { Link as Location } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'utils/theme';

export const ContainerOrders = styled.div``;
export const ContainerFavorite = styled.div``;
export const ContainerNotification = styled.div`
  padding-top: 56px;
  padding-bottom: 56px;
  p {
    max-width: 755px;
    text-align: center;
  }
`;
export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 34px;
  padding: 24px;
  p {
    color: ${({ theme }) => theme.color.colorTextStartUserPage};
  }
`;

export const styleRemoveProductButton = {
  position: 'absolute',
  color: `${theme.color.bgButton}`,
  bgcolor: `${theme.color.bgBackdrop}`,
  borderRadius: '6px',
  zIndex: '2',
  bottom: '10px',
  right: '10px',
  cursor: 'pointer',
};

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
