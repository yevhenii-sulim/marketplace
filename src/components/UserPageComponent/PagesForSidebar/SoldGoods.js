import { useSelector } from 'react-redux';
import { ContainerNotification } from './PagesForSidebar.styled';
import SoldProductComponent from './SoldProductComponent/SoldProductComponent';
import { selectMyUser } from '../../../redux/auth/selector';

function getProduct(product, discount, discountPrice, price) {
  if (product) {
    if (product.discount) {
      return product.discountPrice;
    } else {
      return product.price;
    }
  } else {
    if (discount) {
      return discountPrice;
    } else {
      return price;
    }
  }
}

export default function SoldGoods() {
  const user = useSelector(selectMyUser);
  console.log(user);

  return (
    <ContainerNotification>
      {user?.soldGoods && user.soldGoods.length !== 0 ? (
        user.soldGoods.map(
          ({
            _id,
            img,
            title,
            product,
            discount,
            discountPrice,
            price,
            createDate,
            status,
            pay,
            firstName,
            lastName,
            tel,
            building,
            postOffice,
            town,
          }) => (
            <SoldProductComponent
              key={_id}
              status={status}
              building={building}
              postOffice={postOffice}
              town={town}
              pay={pay}
              firstName={firstName}
              lastName={lastName}
              tel={tel}
              id={_id}
              productId={_id}
              imgSrc={product ? product.minImage : img}
              title={title}
              price={getProduct(product, discount, discountPrice, price)}
              createDate={createDate}
            />
          )
        )
      ) : (
        <p>Немає прдажів</p>
      )}
    </ContainerNotification>
  );
}
