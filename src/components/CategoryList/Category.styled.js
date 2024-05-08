import { Link as LinkCategory } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(LinkCategory)`
  text-decoration: none;
  color: inherit;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
  }
`;
export const NameCategory = styled.p`
  text-align: center;
  font-family: 'Jost';
  font-size: 22px;
  font-weight: 500;
  line-height: 1.45;
`;
export const Categorys = styled.ul`
  margin-bottom: 32px;
  .slide {
    width: 100%;
    position: relative;
  }
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
    gap: 40px;
  }
  .carousel__next-button {
    display: block;
  }
  .carousel__back-button {
    display: block;
  }
`;
export const TytleCategory = styled.h3`
  font-family: 'Jost';
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 32px;
`;
export const List = styled.li`
  width: 172px;
  padding: 4px;
`;
