import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTotalSearch } from '../redux/product/selector';
import SearchedProduct from 'components/SearchedProduct.js/SearchedProduct';

export default function SearchedProductPage() {
  const [valueSort, setValueSort] = useState('new');
  const products = useSelector(selectTotalSearch);
  const handleSort = sort => {
    setValueSort(sort);
  };

  function sortingProduct() {
    switch (valueSort) {
      case 'Найдешевші':
        return products.toSorted(
          (max, min) => parseInt(max.price) - parseInt(min.price)
        );

      case 'Найдорожчі':
        return products.toSorted(
          (max, min) => parseInt(min.price) - parseInt(max.price)
        );
      default:
        return products.toSorted(
          (a, b) => new Date(b.createDate) - new Date(a.createDate)
        );
    }
  }
  const sortedProduct = sortingProduct();
  return (
    <SearchedProduct
      handleSort={handleSort}
      valueSort={valueSort}
      sortedProduct={sortedProduct}
    />
  );
}
