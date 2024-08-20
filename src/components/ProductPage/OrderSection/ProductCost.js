import { ProductCost, SalePrice, StrikePrice } from './OrderSection.styled';

export default function ProductCostSection({ product }) {
  return (
    <ProductCost>
      <StrikePrice>
        <span
          style={{ textDecoration: product.discount ? 'line-through' : '' }}
        >
          {product.price} &#8372;
        </span>
      </StrikePrice>
      {product.discount ? (
        <SalePrice>{product.discountPrice} &#8372;</SalePrice>
      ) : (
        ''
      )}
    </ProductCost>
  );
}
