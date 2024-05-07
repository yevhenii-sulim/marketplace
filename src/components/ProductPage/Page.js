import React, { useEffect, useState } from 'react';
import WrapperContentPages from '../WrapperContentPages/WrapperContentPages';
import { ContainerProductPage } from './BreadcrumbsComponent/BreadcrumbsComponent.styled';
import ProductPageTabs from './ProductPageTabs/ProductPageTabs';
import BreadcrumbsComponent from './BreadcrumbsComponent/BreadcrumbsComponent';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import axios from 'axios';

// import { useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getProduct } from '../../redux/product/thunk';
// import { selectProduct } from '../../redux/product/selector';

import { ProductPageContext } from './context/ProductPageProvider';


function Product({ id }) {
  const [loading, setLoading] = useState(true);
  const [triggerRerender, setTriggerRerender] = useState(false);
  const [product, setProduct] = useState({});

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
          process.env.REACT_APP_API_URL +
            '/products/' +
            (id || '6634885c1bc9a74b28287f1d')
        );
        setProduct(product.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [loading, triggerRerender, id]);

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

          value={{ product: product, setTriggerRerender }} // product -> productThrouthSelector

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
