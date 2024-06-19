import { useSelector } from 'react-redux';
import { myProduct } from 'data/myProduct';
import { Button } from '@mui/material';
import ShoppingCart from 'SvgComponents/ShoppingСart/ShoppingСart';
import { selectMyUser } from '../../../redux/auth/selector';
import {
  About,
  Coust,
  DateOrer,
  DeleteAdd,
  Empty,
  ImageStory,
  Link,
  ListStoryOrder,
  NumberOrder,
  Price,
  State,
  Title,
  WrapperBuy,
  WrapperStoryOrder,
  WrapperProduct,
  addProductButton,
  viewProductButton,
} from './PagesForSidebar.styled';

export default function MyStoryOrder() {
  const user = useSelector(selectMyUser);
  const basket = user?.basket ?? [];

  console.log('user', user);
  console.log('myProduct', myProduct);
  return (
    <div>
      {basket.length === 0 ? (
        <Empty>
          <ShoppingCart />
          <p>Зробіть ваше переше замовлення</p>
          <Link to="/">Перейти до товарів</Link>
        </Empty>
      ) : (
        <WrapperStoryOrder>
          {myProduct.map(
            ({
              _id,
              state,
              title,
              date,
              price,
              discountPrice,
              img,
              number,
              discount,
            }) => {
              return (
                <ListStoryOrder key={_id}>
                  <WrapperProduct className="story">
                    <About>
                      <State $state={Object.keys(state)}>
                        {Object.values(state)}
                      </State>
                      <NumberOrder>&#8470;{number}</NumberOrder>
                      <ImageStory>
                        <img src={img} alt={title} />
                      </ImageStory>
                      <DateOrer>{date}</DateOrer>
                    </About>
                    <Coust>
                      <Title className="story">{title}</Title>
                      <Price className="story">
                        {discount ? (
                          <>
                            <p className="price-discount">{price} &#8372;</p>
                            <p className="discount">{discountPrice} &#8372;</p>
                          </>
                        ) : (
                          <p className="price">{price} &#8372;</p>
                        )}
                      </Price>
                    </Coust>
                  </WrapperProduct>
                  <WrapperBuy className="story">
                    <DeleteAdd className="story">
                      <Button type="button" sx={addProductButton}>
                        Повторити замовлення
                      </Button>
                      <Button type="button" sx={viewProductButton}>
                        Залишити відгук
                      </Button>
                    </DeleteAdd>
                  </WrapperBuy>
                </ListStoryOrder>
              );
            }
          )}
        </WrapperStoryOrder>
      )}
    </div>
  );
}
