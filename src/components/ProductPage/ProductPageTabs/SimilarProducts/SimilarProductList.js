import React from 'react';
import { SimilarProductsWrapper } from './SimilarProductList.styled';
import ButtonAddSimilarProducts from './ButtonAddSimilarProducts/ButtonAddSimilarProducts';
import SimilarProduct from 'components/Product/SimilarProduct';

const arrayProducts = [
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
];

function SimilarProductList() {
  return (
    <>
      <SimilarProductsWrapper>
        {arrayProducts.map(
          ({ tytle, id, img, price, discountItem, date, discount, eco }) => {
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
