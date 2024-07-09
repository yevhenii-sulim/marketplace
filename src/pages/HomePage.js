import HomePageComponent from 'components/HomePageComponent/HomePageComponent';
import CategoryList from 'components/CategoryList/CategoryList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/product/thunk';
import {
  selectProductDiscount,
  selectProductEco,
  selectProductNewer,
} from '../redux/product/selector';

export default function HomePage() {
  const productsEco = useSelector(selectProductEco);
  const productsDiscount = useSelector(selectProductDiscount);
  const productsNew = useSelector(selectProductNewer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts({ page: 1, limit: 100 }));
  }, [dispatch]);

  return (
    <>
      <CategoryList />
      {productsDiscount.length !== 0 && (
        <HomePageComponent
          filteredProducts={productsDiscount}
          title="Кращий вибір"
        />
      )}

      {productsNew.length !== 0 && (
        <HomePageComponent
          filteredProducts={productsNew}
          title="Нові оголошення"
        />
      )}
      {productsEco?.length !== 0 && (
        <HomePageComponent
          filteredProducts={productsEco}
          title="Еко продукти"
        />
      )}
    </>
  );
}
