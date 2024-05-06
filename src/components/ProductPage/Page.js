import React, { useEffect, useState } from 'react';
import WrapperContentPages from '../WrapperContentPages/WrapperContentPages';
import { ContainerProductPage } from './BreadcrumbsComponent/BreadcrumbsComponent.styled';
import ProductPageTabs from './ProductPageTabs/ProductPageTabs';
import BreadcrumbsComponent from './BreadcrumbsComponent/BreadcrumbsComponent';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import axios from 'axios';
import { ProductPageContext } from './context/ProductPageProvider';

function Product() {
  const [loading, setLoading] = useState(true);
  const [triggerRerender, setTriggerRerender] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProduct() {
      try {
        const product = await axios.get(
          process.env.REACT_APP_API_URL + '/products/6634885c1bc9a74b28287f1d'
        );
        setProduct(product.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [loading, triggerRerender]);

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
          value={{ product: product, setTriggerRerender }}
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
