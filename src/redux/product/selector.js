import { createSelector } from '@reduxjs/toolkit';

export const selectOrderProduct = state => state.product;

export const selectProduct = state => state.products;

export const selectProductEco = createSelector([selectProduct], product =>
  product.filter(({ eco }) => eco === true)
);
export const selectProductDiscount = createSelector([selectProduct], product =>
  product.filter(({ discount }) => discount === true)
);
export const selectProductVisit = createSelector([selectProduct], product =>
  product.filter(({ visit }) => !!visit).sort((a, b) => a.visit - b.visit)
);

export const selectProductNewer = createSelector([selectProduct], product =>
  product.toSorted((a, b) => new Date(b.createDate) - new Date(a.createDate))
);
