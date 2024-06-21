import { createSelector } from '@reduxjs/toolkit';

export const selectProduct = state => state.products.product;

export const selectTotalPages = state => state.products.totalPage;

export const selectProductEco = createSelector([selectProduct], product => {
  return product?.filter(({ parameters }) => parameters.eco === true);
});

export const selectProductDiscount = createSelector(
  [selectProduct],
  product => {
    return product.filter(({ discount }) => discount === true);
  }
);

export const selectProductNewer = createSelector([selectProduct], product =>
  product.toSorted((a, b) => new Date(b.createDate) - new Date(a.createDate))
);
