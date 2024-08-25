import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PropTypes from 'prop-types';
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
import { formatDate } from 'data/formatDate';
import {
  addFavoriteProduct,
  removeFavoriteProduct,
} from '../../redux/product/thunk';
import FlagUkrSvg from 'SvgComponents/FlagUkrSvg/FlagUkrSvg';
import { selectMyUser } from '../../redux/auth/selector';
import { theme } from 'utils/theme';

function scrollToByClick() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

function SimilarProduct({
  children,
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
  const user = useSelector(selectMyUser);
  const location = useLocation();
  const dispatch = useDispatch();
  function countCharacter(count) {
    return location.pathname.match(/[/]/g).length === count;
  }
  function toggleFavorite(id) {
    if (user.favorites.some(({ _id }) => id === _id)) {
      dispatch(removeFavoriteProduct(id));
    } else {
      dispatch(addFavoriteProduct(id));
    }
  }

  function checkSubCategory(subCategory) {
    switch (true) {
      case !subCategory:
        return false;
      case subCategory === 'No Subcategory':
        return false;
      default:
        return true;
    }
  }
  return (
    <>
      <SimilarProductItem>
        {children}
        {checkSubCategory(subCategory) ? (
          <Link
            onClick={scrollToByClick}
            state={location}
            to={
              countCharacter(2)
                ? `${id}`
                : `/${category.mainCategory?.en || category.en}/${
                    subCategory.subCategory?.en || subCategory.en
                  }/${id}`
            }
          >
            <SimilarProductItemIcon>
              {eco && <EcoSvg />}
              {isUkraine && <FlagUkrSvg />}
              <img src={img[0]} alt={title} />
            </SimilarProductItemIcon>
            <SimilarProductItemName>{title}</SimilarProductItemName>
          </Link>
        ) : (
          <Link onClick={scrollToByClick} to={`${id}`}>
            <SimilarProductItemIcon>
              {eco && <EcoSvg />}
              {isUkraine && <FlagUkrSvg />}
              <img src={img[0]} alt={title} />
            </SimilarProductItemIcon>
            <SimilarProductItemName>{title}</SimilarProductItemName>
          </Link>
        )}

        <SimilarProductItemPrice $discount={discount}>
          <Price>
            {discount ? (
              <>
                <SimilarProductItemDiscount>
                  {price} грн
                </SimilarProductItemDiscount>
                <p style={{ whiteSpace: 'nowrap' }}>{discountPrice} грн</p>
              </>
            ) : (
              <p style={{ whiteSpace: 'nowrap' }}>{price} грн</p>
            )}
          </Price>

          <SimilarProductItemIconWrapper onClick={() => toggleFavorite(id)}>
            {user?.favorites.some(({ _id }) => id === _id) ? (
              <FavoriteIcon sx={{ color: theme.color.bgNumberBasket }} />
            ) : (
              <FavoriteBorderIcon />
            )}
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
  eco: PropTypes.bool,
  category: PropTypes.object.isRequired,
  subCategory: PropTypes.any,
  isUkraine: PropTypes.bool,
};
