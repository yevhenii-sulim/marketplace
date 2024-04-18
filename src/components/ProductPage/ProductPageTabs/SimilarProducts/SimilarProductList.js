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
    discountItem: '500$',
    date: Date.now(),
    discount: true,
    eco: true,
    visit: 20,
  },
  {
    id: '2',
    img: '#',
    tytle: 'назва прдукту',
    price: '700$',
    discountItem: '500$',
    date: Date.now(),
    discount: true,
    eco: true,
    visit: 20,
  },
  {
    id: '3',
    img: '#',
    tytle: 'назва прдукту',
    price: '700$',
    discountItem: '500$',
    date: Date.now(),
    discount: true,
    eco: true,
    visit: 20,
  },
  {
    id: '4',
    img: '#',
    tytle: 'назва прдукту',
    price: '700$',
    discountItem: '500$',
    date: Date.now(),
    discount: true,
    eco: true,
    visit: 20,
  },
  {
    id: '5',
    img: '#',
    tytle: 'назва прдукту',
    price: '700$',
    discountItem: '500$',
    date: Date.now(),
    discount: true,
    eco: true,
    visit: 20,
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
            discountItem,
            date,
            discount,
            eco,
            category,
          }) => {
            return (
              <SimilarProduct
                key={id}
                id={id}
                tytle={tytle}
                price={price}
                img={img}
                discountItem={discountItem}
                discont={discount}
                date={date}
                eco={eco}
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
