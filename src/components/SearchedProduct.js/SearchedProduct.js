import React from 'react';
import {
  BoxSvg,
  Product,
  ProductsPage,
  TitleSection,
  EmptySearch,
  TitleSort,
} from './SearchedProduct.styled';
import SimilarProduct from 'components/Product/SimilarProduct';
import Sort from 'components/Sort/Sort';
import NoSearched from 'SvgComponents/NoSearched/NoSearched';

export default function SearchedProduct({ handleSort, sortedProduct }) {
  return (
    <>
      {sortedProduct?.length === 0 ? (
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
      ) : (
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
          </Product>
        </ProductsPage>
      )}
    </>
  );
}
