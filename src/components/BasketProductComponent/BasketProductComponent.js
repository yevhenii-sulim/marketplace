import { useDispatch, useSelector } from 'react-redux';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteSvg from 'SvgComponents/DeleteSvg/DeleteSvg';
import { selectMyUser } from '../../redux/auth/selector';
import { changeCount, deleteProduct } from '../../redux/basket/slice';
import {
  addFavoriteProduct,
  removeFavoriteProduct,
} from '../../redux/product/thunk';
import getWindowDimensions from 'hooks/useWindowDimensions';
import { theme } from 'utils/theme';
import {
  About,
  Actives,
  Count,
  Image,
  List,
  Price,
  Title,
  WrapperProduct,
  AboutProduct,
} from './BasketProductComponent.styled';

export default function BasketProductComponent({
  id,
  img,
  title,
  count,
  discount,
  price,
  discountPrice,
}) {
  const user = useSelector(selectMyUser);
  const dispatch = useDispatch();
  const { width } = getWindowDimensions();

  function toggleFavorite(id) {
    if (user.favorites.some(({ _id }) => id === _id)) {
      dispatch(removeFavoriteProduct(id));
    } else {
      dispatch(addFavoriteProduct(id));
    }
  }

  const deleteFromBasket = id => {
    dispatch(deleteProduct(id));
  };

  const addCount = payload => {
    dispatch(changeCount(payload));
  };

  const removeCount = (payload, count) => {
    if (count <= 1) return;
    dispatch(changeCount(payload));
  };
  return (
    <List>
      <WrapperProduct>
        <Image>
          <img height="114" src={img} alt={title} />
        </Image>
        <About>
          <AboutProduct>
            <Title>{title}</Title>
            <Count>
              {width < parseInt(theme.breakPoints.md) && (
                <Price>
                  {discount ? (
                    <>
                      <p className="price-discount">{price} &#8372;</p>
                      <p className="discount">{discountPrice} &#8372;</p>
                    </>
                  ) : (
                    <p className="price">{price} &#8372;</p>
                  )}
                </Price>
              )}
              <div className="buttons">
                <button
                  className="count"
                  type="button"
                  onClick={() => removeCount({ id, increment: -1 }, count)}
                >
                  <RemoveIcon />
                </button>
                <span>{count}</span>
                <button
                  className="count"
                  type="button"
                  onClick={() => addCount({ id, increment: 1 })}
                >
                  <AddIcon />
                </button>
              </div>
            </Count>
          </AboutProduct>
          <Actives>
            {width >= parseInt(theme.breakPoints.md) && (
              <Price>
                {discount ? (
                  <>
                    <p className="price-discount">{price} &#8372;</p>
                    &nbsp;
                    <p className="discount">{discountPrice} &#8372;</p>
                  </>
                ) : (
                  <p className="price">{price} &#8372;</p>
                )}
              </Price>
            )}
            <div>
              <button
                type="button"
                className="favorite"
                onClick={() => toggleFavorite(id)}
              >
                {user?.favorites.some(({ _id }) => id === _id) ? (
                  <FavoriteIcon sx={{ color: theme.color.bgNumberBasket }} />
                ) : (
                  <FavoriteBorderIcon sx={{ color: '#727272' }} />
                )}
              </button>
              <button
                type="button"
                className="delete"
                onClick={() => deleteFromBasket(id)}
              >
                <DeleteSvg />
              </button>
            </div>
          </Actives>
        </About>
      </WrapperProduct>
    </List>
  );
}
