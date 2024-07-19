import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { debounce } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import ProductListPage from 'components/ProductListPage/ProductListPage';
import { getAllProducts, getProducts } from '../redux/product/thunk';
import { selectProduct, selectTotalPages } from '../redux/product/selector';
import { selectCategory } from '../redux/category/selectors';

export default function CatalogPage() {
  const [valueSort, setValueSort] = useState('new');
  const [page, setPage] = useState(1);

  const products = useSelector(selectProduct);
  const category = useSelector(selectCategory);
  const totalItemsCount = useSelector(selectTotalPages);

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname.includes('all')) {
      dispatch(getAllProducts());
      return;
    }
    dispatch(getProducts(location.pathname.split('/').slice(-1)[0]));
  }, [dispatch, location.pathname]);

  const handleSort = sort => {
    setValueSort(sort);
  };

  const getMaxValue = debounce(num => num, 1500);
  const getMinValue = debounce(num => num, 1500);

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
        page={page}
        category={category}
        valueSort={valueSort}
        sortedProduct={products}
        totalItemsCount={totalItemsCount}
        getMaxValue={getMaxValue}
        getMinValue={getMinValue}
        handleSort={handleSort}
        handlePageClick={handlePageClick}
      />
    </>
  );
}
