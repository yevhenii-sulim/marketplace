import React, { useEffect } from 'react';
import { SimilarProductsWrapper } from './SimilarProductList.styled';
import ButtonAddSimilarProducts from './ButtonAddSimilarProducts/ButtonAddSimilarProducts';
import SimilarProduct from 'components/Product/SimilarProduct';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from './../../../redux/product/selector';
import { getAllProducts } from './../../../redux/product/thunk';

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
                _id,
                img,
                price,
                eco,
                discount,
                discountItem,
                createDate,
                engCategory,
                engSubcategory,
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
                  discountItem={discountItem}
                  discount={discount}
                  createDate={createDate}
                  eco={eco}
                  category={engCategory}
                  subCategory={engSubcategory}
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
