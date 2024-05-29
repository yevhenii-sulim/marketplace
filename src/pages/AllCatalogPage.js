import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProductListPage from 'components/ProductListPage/ProductListPage';
import { getAllProducts } from '../redux/product/thunk';
import { selectProduct, selectTotalPages } from '../redux/product/selector';
import { selectCategory } from '../redux/category/selectors';

export default function AllCatalogPage() {
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(15000);
  const [valueSort, setValueSort] = useState('new');
  const [page, setPage] = useState(1);

  const productAll = useSelector(selectProduct);
  const category = useSelector(selectCategory);
  const totalItemsCount = useSelector(selectTotalPages);

  const limit = 5;

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (productAll.length === 0) {
      return;
    }
    setPriceMax(
      productAll.toSorted(
        (max, min) => parseInt(min.price) - parseInt(max.price)
      )[0].price
    );

    setPriceMin(
      productAll.toSorted(
        (max, min) => parseInt(max.price) - parseInt(min.price)
      )[0].price
    );
  }, [productAll]);

  useEffect(() => {
    dispatch(getAllProducts({ page: page, limit: limit }));
  }, [dispatch, page]);

  const handleSort = sort => {
    setValueSort(sort);
  };

  const sortProduct = criterion => {
    switch (criterion) {
      case 'cheep':
        return productAll.toSorted(
          (max, min) => parseInt(max.price) - parseInt(min.price)
        );

      case 'expensive':
        return productAll.toSorted(
          (max, min) => parseInt(min.price) - parseInt(max.price)
        );
      default:
        return productAll.toSorted(
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
