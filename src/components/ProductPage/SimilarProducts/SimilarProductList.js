import React, { useEffect } from 'react';
import { SimilarProductsWrapper } from './SimilarProductList.styled';
import ButtonAddSimilarProducts from './ButtonAddSimilarProducts/ButtonAddSimilarProducts';
import SimilarProduct from 'components/Product/SimilarProduct';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from './../../../redux/product/selector';
import { useLocation } from 'react-router-dom';

function SimilarProductList() {
  const productAll = useSelector(selectProduct);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (productAll.length !== 0) {
      return;
    }
    dispatch(location.pathname.split('/').slice(-1)[0]);
  }, [dispatch, productAll, location.pathname]);
  console.log('productAll', productAll);

  return (
    <>
      <SimilarProductsWrapper>
        {productAll
          .slice(0, 5)
          .map(
            (
              {
                title,
                _id,
                img,
                price,
                parameters,
                discount,
                discountPrice,
                createDate,
                category,
                subCategory,
              },
              index
            ) => {
              return (
                <SimilarProduct
                  key={index}
                  id={_id}
                  title={title}
                  price={price}
                  img={img}
                  discountPrice={discountPrice}
                  discount={discount}
                  createDate={createDate}
                  eco={parameters.eco}
                  isUkraine={parameters.isUkraine}
                  category={category}
                  subCategory={subCategory}
                />
              );
            }
          )}
      </SimilarProductsWrapper>
      <ButtonAddSimilarProducts />
    </>
  );
}

export default SimilarProductList;
