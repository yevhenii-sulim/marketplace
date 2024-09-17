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
  color: ${({ theme }) => theme.color.colorMainText};
  font-family: 'Nunito Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.44;
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
