import styled from 'styled-components';
import { Link as LinkProduct } from 'react-router-dom';

export const ContainerForBreadcrumbs = styled.div`
  padding: 30px 0 20px 0;
`;

export const ContainerProductPage = styled.article`
  width: 100%;
`;

export const Link = styled(LinkProduct)`
  color: grey;
  text-decoration: none;
`;
