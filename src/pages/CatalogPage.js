import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProductListPage from 'components/ProductListPage/ProductListPage';
import {
  getProductsByCategory,
  getProductsBySubCategory,
} from '../redux/product/thunk';
import { selectProduct } from '../redux/product/selector';
import { selectCategory } from '../redux/category/selectors';

export default function CatalogPage() {
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(15000);
  const [valueSort, setValueSort] = useState('new');
  const [page, setPage] = useState(1);

  const products = useSelector(selectProduct);
  const category = useSelector(selectCategory);
  const limit = 5;
  console.log(products.length);

  const totalItemsCount = Math.ceil(products.length / limit);

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      return;
    }
    setPriceMax(
      products.toSorted(
        (max, min) => parseInt(min.price) - parseInt(max.price)
      )[0].price
    );

    setPriceMin(
      products.toSorted(
        (max, min) => parseInt(max.price) - parseInt(min.price)
      )[0].price
    );
  }, [products]);

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

  const getMaxValue = num => {
    console.log('num', num);
  };
  const getMinValue = num => {
    console.log('num', num);
  };

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
        min={priceMin}
        max={priceMax}
        page={page}
        category={category}
        location={location}
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
