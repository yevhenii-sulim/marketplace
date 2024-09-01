import { useDispatch } from 'react-redux';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deleteProduct } from '../../redux/basket/slice';
import {
  About,
  Actives,
  DeleteAdd,
  Image,
  List,
  Price,
  Title,
  WrapperProduct,
} from './Ordering.styled';

export default function ProductComponent({
  id,
  img,
  title,
  count,
  discount,
  discountPrice,
  price,
}) {
  const dispatch = useDispatch();
  const deleteFromBasket = id => {
    dispatch(deleteProduct(id));
  };
  return (
    <List key={id}>
      <WrapperProduct>
        <Image>
          <img height="114" src={img} alt={title} />
        </Image>
        <About className="basket">
          <Title>{title}</Title>
          <br />
          <span>{count}</span>
        </About>
        <Actives>
          <Price>
            {discount ? (
              <>
                <p className="price-discount">{price}&#8372;</p>
                <p className="discount">{discountPrice}&#8372;</p>
              </>
            ) : (
              <p className="price">{price}&#8372;</p>
            )}
          </Price>
          <DeleteAdd className="basket">
            <button
              type="button"
              className="delete"
              onClick={() => deleteFromBasket(id)}
            >
              <DeleteOutlineIcon />
            </button>
          </DeleteAdd>
        </Actives>
      </WrapperProduct>
    </List>
  );
}
