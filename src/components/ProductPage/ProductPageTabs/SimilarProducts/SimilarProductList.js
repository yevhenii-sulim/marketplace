import React, { useEffect } from 'react';
import { SimilarProductsWrapper } from './SimilarProductList.styled';
import ButtonAddSimilarProducts from './ButtonAddSimilarProducts/ButtonAddSimilarProducts';
import SimilarProduct from 'components/Product/SimilarProduct';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../../../../redux/product/selector';
import { getAllProducts } from '../../../../redux/product/thunk';

function SimilarProductList() {
  const productAll = useSelector(selectProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productAll.length !== 0) {
      return;
    }
    dispatch(getAllProducts());
  }, [dispatch, productAll]);
  return (
    <>
      <SimilarProductsWrapper>
        {productAll
          .slice(0, 5)
          .map(
            (
              {
                title,
                id,
                img,
                price,
                eco,
                discount,
                discountItem,
                createDate,
                category,
                subCategory,
              },
              index
            ) => {
              return (
                <SimilarProduct
                  key={index}
                  id={id}
                  title={title}
                  price={price}
                  img={img}
                  discountItem={discountItem}
                  discount={discount}
                  createDate={createDate}
                  eco={eco}
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
