import BestChoiceList from 'components/BestChoice/BestChoiceList';
import CategoryList from 'components/CategoryList/CategoryList';
// import { headphoneProduct } from 'data/headphoneProduct';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/product/thunk';
import {
  selectProduct,
  selectProductDiscount,
  selectProductEco,
  selectProductNewer,
  selectProductVisit,
} from '../redux/product/selector';

export default function HomePage() {
  const productsEco = useSelector(selectProductEco);
  const productsDiscount = useSelector(selectProductDiscount);
  const productsVisits = useSelector(selectProductVisit);
  const productsNew = useSelector(selectProductNewer);
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
      <CategoryList />
      {productsDiscount.length !== 0 && (
        <BestChoiceList
          filteredProducts={productsDiscount}
          title="Кращий вибір"
        />
      )}

      {productsNew.length !== 0 && (
        <BestChoiceList
          filteredProducts={productsNew}
          title="Нові оголошення"
        />
      )}

      {productsVisits.length !== 0 && (
        <BestChoiceList
          filteredProducts={productsVisits}
          title="Рекомендоване вам"
        />
      )}
      {productsEco.length !== 0 && (
        <BestChoiceList filteredProducts={productsEco} title="Еко продукти" />
      )}
    </>
  );
}
