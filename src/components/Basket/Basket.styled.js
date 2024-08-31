import styled from 'styled-components';
import { Link as Location } from 'react-router-dom';
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
  @media screen and (min-width: 1440px) {
    grid-template-columns: 2fr 300px;
    padding-left: 40px;
    padding-right: 40px;
    grid-template-areas:
      'list-goods wrapper-buy'
      'buttons buttons';
  }
  ul {
    @media screen and (min-width: 1440px) {
      grid-area: list-goods;
    }
  }
`;
export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 34px;
  background-color: ${({ theme }) => theme.color.bgProduct};
  margin-top: 32px;
  margin-bottom: 32px;
  border-radius: 12px;
  padding-top: 24px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 24px;
  p {
    color: ${({ theme }) => theme.color.colorTextStartUserPage};
  }
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
