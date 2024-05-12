import React, { useEffect } from 'react';
import WrapperContentPages from '../WrapperContentPages/WrapperContentPages';
import { ContainerProductPage } from './BreadcrumbsComponent/BreadcrumbsComponent.styled';
import ProductPageTabs from './ProductPageTabs/ProductPageTabs';
import BreadcrumbsComponent from './BreadcrumbsComponent/BreadcrumbsComponent';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../redux/productPage/productPageSlice';

function Product() {
  const isLoading = useSelector(state => state.productPage.isLoading);
  const location = useLocation();
  const id = location.pathname.split('/').slice(-1)[0];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id, dispatch]);

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, calc(-50% - 84px - 84px))',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <WrapperContentPages>
          <ContainerProductPage>
            <BreadcrumbsComponent />
            <ProductPageTabs />
          </ContainerProductPage>
        </WrapperContentPages>
      )}
    </>
  );
}

export default Product;
