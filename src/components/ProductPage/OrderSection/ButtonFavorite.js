import { useDispatch, useSelector } from 'react-redux';
import { IconWrapper } from './OrderSection.styled';
import { selectMyUser } from '../../../redux/auth/selector';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  addFavoriteProduct,
  removeFavoriteProduct,
} from '../../../redux/product/thunk';

export default function ButtonFavorite({ productId, currentPictures }) {
  const dispatch = useDispatch();
  const user = useSelector(selectMyUser);

  const addFavorite = id => {
    if (!user) return;
    if (user.favorites.some(el => el._id === productId)) {
      dispatch(removeFavoriteProduct(id));
    } else {
      dispatch(addFavoriteProduct(id));
    }
  };
  return (
    <IconWrapper
      onClick={() => addFavorite(productId)}
      $favorite={
        user?.favorites
          ? user.favorites.some(el => el._id === productId)
          : false
      }
    >
      <FavoriteBorderIcon />
    </IconWrapper>
  );
}
