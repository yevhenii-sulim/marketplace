import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { debounce } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import ProductListPage from 'components/ProductListPage/ProductListPage';
import {
  getProductsByCategory,
  getProductsBySubCategory,
} from '../redux/product/thunk';
import { selectFilters, selectProduct } from '../redux/product/selector';
import { selectCategory } from '../redux/category/selectors';

export default function CatalogPage() {
  const [valueSort, setValueSort] = useState('new');
  const [page, setPage] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const products = useSelector(selectProduct);
  const filters = useSelector(selectFilters);
  const category = useSelector(selectCategory);
  const limit = 5;
  const totalItemsCount = Math.ceil(products.length / limit);

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!filters.price) return;
    setMin(filters.price.min);
    setMax(filters.price.max);
  }, [filters]);

  useEffect(() => {
    if (location.pathname.split('/').slice(-1)[0] === 'forFree') return;
    dispatch(
      getProductsBySubCategory(location.pathname.split('/').slice(-1)[0])
    );
  }, [dispatch, location.pathname]);

  useEffect(() => {
    if (location.pathname.split('/').slice(-1)[0] !== 'forFree') return;
    dispatch(getProductsByCategory(location.pathname.split('/').slice(-1)[0]));
  }, [dispatch, location.pathname]);

  // useEffect(() => {
  //   dispatch(getAllProducts({ page: page, limit: limit }));
  // }, [dispatch, page]);

  const handleSort = sort => {
    setValueSort(sort);
  };

  const sortProduct = criterion => {
    switch (criterion) {
      case 'cheep':
        return products.toSorted(
          (max, min) => parseInt(max.price) - parseInt(min.price)
        );

      case 'expensive':
        return products.toSorted(
          (max, min) => parseInt(min.price) - parseInt(max.price)
        );
      default:
        return products.toSorted(
          (a, b) => new Date(b.createDate) - new Date(a.createDate)
        );
    }
  };
  const getMaxValue = debounce(num => {
    console.log(num);
  }, 1500);
  const getMinValue = debounce(num => {
    console.log(num);
  }, 1500);

  const sortedProduct = sortProduct(valueSort);

  const handlePageClick = page => {
    setPage(page);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <ProductListPage
        min={min}
        max={max}
        page={page}
        category={category}
        valueSort={valueSort}
        sortedProduct={sortedProduct}
        totalItemsCount={totalItemsCount}
        getMaxValue={getMaxValue}
        getMinValue={getMinValue}
        handleSort={handleSort}
        handlePageClick={handlePageClick}
      />
    </>
  );
}
