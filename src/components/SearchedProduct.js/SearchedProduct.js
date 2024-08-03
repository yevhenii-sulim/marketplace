import React from 'react';
import { Product, ProductsPage, TitleSort } from './SearchedProduct.styled';
import SimilarProduct from 'components/Product/SimilarProduct';
import Sort from 'components/Sort/Sort';

export default function SearchedProduct({ handleSort, sortedProduct }) {
  return (
    <ProductsPage>
      <header>
        <TitleSort>Пошук</TitleSort>
        <Sort name="sort" placeholder="Сортувати за" handleSort={handleSort} />
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
  );
}
