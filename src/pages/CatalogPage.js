import ProductListPage from 'components/ProductListPage/ProductListPage';
import { headphoneProduct } from 'data/headphoneProduct';
// import { useLocation } from 'react-router-dom';

export default function CatalogPage() {
  // const location = useLocation();
  // const category = location.state.category;
  // const linkProdukt = location.state.link;

  return (
    <>
      <ProductListPage headphoneProduct={headphoneProduct} />
    </>
  );
}
