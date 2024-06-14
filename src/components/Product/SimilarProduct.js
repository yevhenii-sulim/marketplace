import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  SimilarProductItem,
  SimilarProductItemPrice,
  SimilarProductItemIcon,
  SimilarProductItemName,
  SimilarProductItemIconWrapper,
  SimilarProductItemDiscount,
  SimilarProductDatePublic,
  Price,
} from './SimilarProduct.styled';
import EcoSvg from 'SvgComponents/EcoSVG/EcoSvg';
import { formatDate } from 'data/headphoneProduct';
import { useDispatch } from 'react-redux';
import { addFavoriteProduct } from '../../redux/product/thunk';
import FlagUkrSvg from 'SvgComponents/FlagUkrSvg/FlagUkrSvg';

function scrollToByClick() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

function SimilarProduct({
  id,
  title,
  price,
  img,
  discountPrice,
  discount,
  createDate,
  eco,
  category,
  subCategory,
  isUkraine,
}) {
  const location = useLocation();
  const dispatch = useDispatch();
  function countCharacter(count) {
    return location.pathname.match(/[/]/g).length === count;
  }

  function addFavorite(id) {
    dispatch(addFavoriteProduct(id));
  }

  return (
    <>
      <SimilarProductItem>
        <Link
          onClick={scrollToByClick}
          to={
            countCharacter(2)
              ? `${id}`
              : `/${category?.en}/${subCategory?.en}/${id}`
          }
        >
          <SimilarProductItemIcon>
            {eco && <EcoSvg />}
            {isUkraine && <FlagUkrSvg />}
            <img src={img[0]} alt={title} />
          </SimilarProductItemIcon>
          <SimilarProductItemName>{title}</SimilarProductItemName>
        </Link>
        <SimilarProductItemPrice $discount={discount}>
          <Price>
            {discount ? (
              <>
                <SimilarProductItemDiscount>
                  {price} грн
                </SimilarProductItemDiscount>
                <p>{discountPrice} грн</p>
              </>
            ) : (
              <p>{price} грн</p>
            )}
          </Price>

          <SimilarProductItemIconWrapper onClick={() => addFavorite(id)}>
            <FavoriteBorderIcon />
          </SimilarProductItemIconWrapper>
        </SimilarProductItemPrice>
        <SimilarProductDatePublic>
          {formatDate(createDate)}
        </SimilarProductDatePublic>
      </SimilarProductItem>
    </>
  );
}

export default SimilarProduct;
SimilarProduct.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.arrayOf(PropTypes.string).isRequired,
  discountPrice: PropTypes.number.isRequired,
  discount: PropTypes.bool.isRequired,
  createDate: PropTypes.string.isRequired,
  eco: PropTypes.bool.isRequired,
  category: PropTypes.object.isRequired,
  subCategory: PropTypes.object.isRequired,
};
