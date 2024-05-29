import React from 'react';
import { ContainerOrders, Empty, Link } from './PagesForSidebar.styled';
import MyAnnounceSvg from 'SvgComponents/MyAnnounce/MyAnnounceSvg';

export default function MyPoster() {
  // const basket = useSelector(selectBasket);
  // const dispatch = useDispatch();
  // let total = 0;
  // const addCount = payload => {
  //   dispatch(changeCount(payload));
  // };

  // const removeCount = (payload, count) => {
  //   if (count <= 0) return;
  //   dispatch(changeCount(payload));
  // };
  // const deleteFromBasket = id => {
  //   dispatch(deleteProduct(id));
  // };
  return (
    <ContainerOrders>
      <Empty>
        <MyAnnounceSvg />
        <p>Зробіть ваше переше замовлення</p>
        <Link to="/">Перейти до товарів</Link>
      </Empty>
    </ContainerOrders>
  );
}
