import React, { Suspense, useEffect } from 'react';
import WrapperContentPages from '../WrapperContentPages/WrapperContentPages';
import { ContainerProductPage } from './BreadcrumbsComponent/BreadcrumbsComponent.styled';
import ProductPageTabs from './ProductPageTabs';
import BreadcrumbsComponent from './BreadcrumbsComponent/BreadcrumbsComponent';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../redux/productPage/productPageSlice';
import SkeletonCatalogList from 'components/SkeletonCatalogList/SkeletonCatalogList';

function Product() {
  const isLoading = useSelector(state => state.productPage.isLoading);
  const location = useLocation();
  const id = location.pathname.split('/').slice(-1)[0];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id, dispatch]);

  return (
    <Suspense fallback={<SkeletonCatalogList />}>
      <>
        {isLoading ? (
          <div style={{ height: '100dvh' }}>
            <Box
              sx={{
                position: 'absolute',
                top: '70%',
                left: '50%',
                transform: 'translate(-50%, calc(-50% - 84px - 84px))',
              }}
            >
              <CircularProgress />
            </Box>
          </div>
        ) : (
          <WrapperContentPages>
            <ContainerProductPage>
              <BreadcrumbsComponent />
              <ProductPageTabs />
            </ContainerProductPage>
          </WrapperContentPages>
        )}
      </>
    </Suspense>
  );
}

export default Product;
