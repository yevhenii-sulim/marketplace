import React from 'react';
import { SimilarProductsWrapper } from './SimilarProductList.styled';
import ButtonAddSimilarProducts from './ButtonAddSimilarProducts/ButtonAddSimilarProducts';
import SimilarProduct from 'components/Product/SimilarProduct';

const arrayProducts = [
  {
    id: '1',
    img: '#',
    tytle: 'назва прдукту',
    price: '700$',
    eco: true,
    discount: true,
    discountItem: '500$',
    date: Date.now(),
    visit: 20,
    category: 'headphone',
  },
  {
    id: '2',
    img: '#',
    tytle: 'назва прдукту',
    price: '700$',
    eco: true,
    discount: true,
    discountItem: '500$',
    date: Date.now(),
    visit: 20,
    category: 'headphone',
  },
  {
    id: '3',
    img: '#',
    tytle: 'назва прдукту',
    price: '700$',
    eco: true,
    discount: true,
    discountItem: '500$',
    date: Date.now(),
    visit: 20,
    category: 'headphone',
  },
  {
    id: '4',
    img: '#',
    tytle: 'назва прдукту',
    price: '700$',
    eco: true,
    discount: true,
    discountItem: '500$',
    date: Date.now(),
    visit: 20,
    category: 'headphone',
  },
  {
    id: '5',
    img: '#',
    tytle: 'назва прдукту',
    price: '700$',
    eco: true,
    discount: true,
    discountItem: '500$',
    date: Date.now(), //new Intl.DateTimeFormat('uk-UA', {year: 'numeric',month: 'long',day: 'numeric',}).format(Date.now())
    visit: 20,
    category: 'headphone',
  },
];

function SimilarProductList() {
  return (
    <>
      <SimilarProductsWrapper>
        {arrayProducts.map(
          ({
            tytle,
            id,
            img,
            price,
            eco,
            discount,
            discountItem,
            date,
            category,
          }) => {
            return (
              <SimilarProduct
                key={id}
                id={id}
                tytle={tytle}
                price={price}
                discount={discount}
                eco={eco}
                img={img}
                discountItem={discountItem}
                date={date}
                category={category}
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
