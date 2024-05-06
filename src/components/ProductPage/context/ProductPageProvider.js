import { createContext, useContext } from 'react';

export const ProductPageContext = createContext(null);

export const useProductPageContext = () => {
  const props = useContext(ProductPageContext);
  if (!props) {
    throw new Error('some thing wrong...');
  }
  return props;
};
