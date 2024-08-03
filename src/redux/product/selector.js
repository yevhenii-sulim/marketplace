export const selectProduct = state => state.products.product;
export const selectFilters = state => state.products.filters;
export const selectFiltersPrice = state => state.products.filters.price;
export const selectFiltersSex = state => state.products.filters.sex;
export const selectFiltersSizes = state => state.products.filters.sizes;
export const selectFiltersStates = state => state.products.filters.states;
export const selectFiltersColors = state => state.products.filters.colors;
export const selectTotalPages = state => state.products.totalPage;
export const selectTotalSearch = state => state.products.search;
export const selectPrevProductSearch = state => state.products.prevSearch;
export const selectPrevProductSearchLoading = state =>
  state.products.prevSearch;
export const selectIsLoading = state => state.products.isLoading;
export const selectIsLoadingSearching = state => state.products.isLoadingSearch;
export const selectLoader = state => state.products.loader;
