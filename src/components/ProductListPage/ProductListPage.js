import PropTypes from 'prop-types';
import SimilarProduct from 'components/Product/SimilarProduct';
import { ProductList } from './ProductListPage.styled';
export default function ProductListPage({ headphoneProduct }) {
  return (
    <ProductList>
      {headphoneProduct.map(
        ({
          tytle,
          id,
          img,
          price,
          discountItem,
          date,
          discount,
          eco,
          category,
        }) => (
          <SimilarProduct
            key={id}
            id={id}
            tytle={tytle}
            price={price}
            img={img}
            discountItem={discountItem}
            discount={discount}
            date={date}
            eco={eco}
            category={category}
          />
        )
      )}
    </ProductList>
  );
}

ProductListPage.propTypes = {
  headphoneProduct: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      tytle: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      discountItem: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      discount: PropTypes.bool.isRequired,
      eco: PropTypes.bool.isRequired,
      visit: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ),
};
