import styled from 'styled-components';
import { Link as LinkProduct } from 'react-router-dom';

export const ContainerForBreadcrumbs = styled.div`
  padding: 30px 0 20px 0;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ContainerProductPage = styled.article`
  width: 100%;
`;

export const Link = styled(LinkProduct)`
  color: grey;
  text-decoration: none;
`;

export const Catalog = styled.a`
  width: 95%;
  margin: 12px auto 0 auto;
  display: flex;
  align-items: center;
  color: #1f1f1f;
  font-family: 'Nunito Sans';
  font-size: 16px;
`;

export const WrapperMobileCatalogOnProductPage = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`;
