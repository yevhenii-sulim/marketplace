import React, { useEffect, useState } from 'react';
import WrapperContentPages from '../WrapperContentPages/WrapperContentPages';
import { ContainerProductPage } from './BreadcrumbsComponent/BreadcrumbsComponent.styled';
import ProductPageTabs from './ProductPageTabs/ProductPageTabs';
import BreadcrumbsComponent from './BreadcrumbsComponent/BreadcrumbsComponent';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import axios from 'axios';
import {
  ProductPageContext,
  defaultProduct,
} from './context/ProductPageProvider';
// import { useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getProduct } from '../../redux/product/thunk';
// import { selectProduct } from '../../redux/product/selector';

function Product() {
  const [loading, setLoading] = useState(true);
  const [triggerRerender, setTriggerRerender] = useState(false);
  const [product, setProduct] = useState({});
  const path = window.location.href;

  //---------------------------
  //через redux запит

  // const location = useLocation();
  // console.log('location', location);

  // const id = location.pathname.split('/').slice(-1)[0];
  // // console.log('id', id);
  // const dispatch = useDispatch();
  // const productThrouthSelector = useSelector(selectProduct);
  // console.log('product', productThrouthSelector);

  //----------------------------

  useEffect(() => {
    // dispatch(getProduct(id));

    async function fetchProduct() {
      try {
        const product = await axios.get(
          path.includes('http://localhost:3000')
            ? 'http://localhost:8080/products/6634885c1bc9a74b28287f1d'
            : 'https://internet-shop-api.onrender.com/products/6634885c1bc9a74b28287f1d',
          { timeout: 3000 }
        );
        setProduct(product.data);
      } catch (error) {
        console.error(error);
      } finally {
        setProduct(defaultProduct);
        setLoading(false);
      }
    }
    fetchProduct();
  }, [path, loading, triggerRerender]);

  return (
    <>
      {loading ? (
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
        <ProductPageContext.Provider
          value={{ product: product || defaultProduct, setTriggerRerender }} // product -> productThrouthSelector
        >
          <WrapperContentPages>
            <ContainerProductPage>
              <BreadcrumbsComponent />
              <ProductPageTabs />
            </ContainerProductPage>
          </WrapperContentPages>
        </ProductPageContext.Provider>
      )}
    </>
  );
}

export default Product;
