import React from 'react';
import {
  Product,
  ProductsPage,
  TitleSection,
  TitleSort,
} from './SearchedProduct.styled';
import SimilarProduct from 'components/Product/SimilarProduct';
import Sort from 'components/Sort/Sort';

export default function SearchedProduct({ handleSort, sortedProduct }) {
  return (
    <>
      {sortedProduct?.length === 0 ? (
        <TitleSection>
          На жаль, за вашим запитом нічого не знайдено, спробуйте ввести інший
          запит.
        </TitleSection>
      ) : (
        <ProductsPage>
          <header>
            <TitleSort>Пошук</TitleSort>
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
