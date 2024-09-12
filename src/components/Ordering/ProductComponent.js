import { useDispatch } from 'react-redux';
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
import DeleteSvg from 'SvgComponents/DeleteSvg/DeleteSvg';

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
          <p>{count}</p>
        </About>
        <Actives>
          <Price>
            {discount ? (
              <>
                <p className="price-discount">{price}&nbsp;&#8372;</p>
                <p className="discount">{discountPrice}&nbsp;&#8372;</p>
              </>
            ) : (
              <p className="price">{price}&nbsp;&#8372;</p>
            )}
          </Price>
          <DeleteAdd className="basket">
            <button
              type="button"
              className="delete"
              onClick={() => deleteFromBasket(id)}
            >
              <DeleteSvg />
            </button>
          </DeleteAdd>
        </Actives>
      </WrapperProduct>
    </List>
  );
}
