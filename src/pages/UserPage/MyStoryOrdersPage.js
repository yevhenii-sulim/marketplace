import MyStoryOrder from 'components/UserPageComponent/PagesForSidebar/MyStoryOrder';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectMyUser } from '../../redux/auth/selector';

export default function MyStoryOrdersPage() {
  const [valueSort, setValueSort] = useState('Спочатку нові');
  const [value, setValue] = useState('');

  const user = useSelector(selectMyUser);
  const purchasedGoods = user?.purchasedGoods ?? [];
  function sortProduct(criterion) {
    switch (criterion) {
      case 'Найдешевші':
        return purchasedGoods.toSorted((max, min) => {
          if (min.discountPrice) {
            return (
              parseInt(max.product.discountPrice) -
              parseInt(min.product.discountPrice)
            );
          } else {
            return parseInt(max.product.price) - parseInt(min.product.price);
          }
        });

      case 'Найдорожчі':
        return purchasedGoods.toSorted((max, min) => {
          if (min.discountPrice) {
            return (
              parseInt(min.product.discountPrice) -
              parseInt(max.product.discountPrice)
            );
          } else {
            return parseInt(min.product.price) - parseInt(max.product.price);
          }
        });
      default:
        return purchasedGoods.toSorted(
          (a, b) =>
            new Date(b.product.createDate) - new Date(a.product.createDate)
        );
    }
  }
  const products = sortProduct(valueSort);
  function onSort() {
    return products.filter(({ product, quantity }, index) => {
      return (
        product.title.toLowerCase().includes(value.toLowerCase()) ||
        `${quantity}`.includes(value)
      );
    });
  }

  const sortedProduct = onSort();
  return (
    <>
      <MyStoryOrder
        sortedProduct={sortedProduct}
        setValueSort={setValueSort}
        setValue={setValue}
        value={value}
      />
    </>
  );
}
