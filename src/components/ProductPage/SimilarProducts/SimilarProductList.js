import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SimilarProductsWrapper } from './SimilarProductList.styled';
import ButtonAddSimilarProducts from './ButtonAddSimilarProducts/ButtonAddSimilarProducts';
import SimilarProduct from 'components/Product/SimilarProduct';
import { selectProduct } from './../../../redux/product/selector';
import { getProducts } from '../../../redux/product/thunk';

function SimilarProductList() {
  const productAll = useSelector(selectProduct);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (productAll.length !== 0) {
      return;
    }
    const textQuery = location.pathname.split('/').slice(-2)[0];
    dispatch(getProducts({ textQuery, paramQuery: '', page: 1 }));
  }, [dispatch, location.pathname, productAll.length]);

  return (
    <>
      <SimilarProductsWrapper $length={productAll.length}>
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
