import React from 'react';
import { useSelector } from 'react-redux';
import SimilarProduct from 'components/Product/SimilarProduct';
import Sort from 'components/Sort/Sort';
import NoSearched from 'SvgComponents/NoSearched/NoSearched';
import { selectLoader } from '../../redux/product/selector';
import Loader from 'components/Loader/Loader';
import {
  BoxSvg,
  Product,
  ProductsPage,
  TitleSection,
  EmptySearch,
  TitleSort,
} from './SearchedProduct.styled';

export default function SearchedProduct({ handleSort, sortedProduct }) {
  const loader = useSelector(selectLoader);
  return (
    <>
      {sortedProduct?.length === 0 && !loader && (
        <EmptySearch>
          <TitleSection>
            На жаль, за вашим запитом нічого не знайдено.
          </TitleSection>
          <ul>
            <li>Перевірте правильність введення пошукового запиту.</li>
            <li>Спробуйте використати інші ключові слова або фрази.</li>
          </ul>
          <BoxSvg>
            <NoSearched />
          </BoxSvg>
        </EmptySearch>
      )}
      {sortedProduct?.length !== 0 && !loader && (
        <ProductsPage>
          <header>
            <TitleSort>Результати пошуку</TitleSort>
            <Sort
              name="sort"
              placeholder="Сортувати за"
              handleSort={handleSort}
            />
          </header>
          <Product>
            {sortedProduct.map(
              ({
                title,
                _id,
                img,
                price,
                discountPrice,
                createDate,
                discount,
                parameters,
                category,
                subCategory,
              }) => (
                <SimilarProduct
                  key={_id}
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
              )
            )}
            {loader && <Loader isAlreadyLoad={loader} />}
          </Product>
        </ProductsPage>
      )}
    </>
  );
}
