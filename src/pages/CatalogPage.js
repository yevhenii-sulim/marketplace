import ProductListPage from 'components/ProductListPage/ProductListPage';
import { getAllProducts } from '../redux/product/thunk';
import { selectProduct } from '../redux/product/selector';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

export default function CatalogPage() {
  // const location = useLocation();

  // const category = location.state.category;
  // const linkProdukt = location.state.link;
  const productAll = useSelector(selectProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productAll.length !== 0) {
      return;
    }
    dispatch(getAllProducts());
  }, [dispatch, productAll]);

  return (
    <>
      <ProductListPage headphoneProduct={productAll} />
    </>
  );
}
