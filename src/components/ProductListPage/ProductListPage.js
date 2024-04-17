import { headphoneProduct } from 'data/headphone';
import SimilarProduct from 'components/Product/SimilarProduct';
import { ProductList } from './ProductListPage.styled';
export default function ProductListPage() {
  return (
    <ProductList>
      {headphoneProduct.map(
        ({ tytle, id, img, price, discountItem, date, discount, eco }) => {
          return (
            <SimilarProduct
              key={id}
              id={id}
              tytle={tytle}
              price={price}
              img={img}
              discountItem={discountItem}
              discont={discount}
              date={date}
              eco={eco}
            />
          );
        }
      )}
    </ProductList>
  );
}
