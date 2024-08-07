import MyStoryOrder from 'components/UserPageComponent/PagesForSidebar/MyStoryOrder';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectMyUser } from '../../redux/auth/selector';

export default function MyStoryOrdersPage() {
  const [valueSort, setValueSort] = useState('Спочатку нові');
  const [value, setValue] = useState('');

  const user = useSelector(selectMyUser);
  const purchasedGoods = user?.purchasedGoods ?? [];
  console.log('purchasedGoods', purchasedGoods);
  function sortProduct(criterion) {
    switch (criterion) {
      case 'Найдешевші':
        return purchasedGoods.toSorted((max, min) => {
          if (min.discountPrice) {
            return parseInt(max.discountPrice) - parseInt(min.discountPrice);
          } else {
            return parseInt(max.price) - parseInt(min.price);
          }
        });

      case 'Найдорожчі':
        return purchasedGoods.toSorted((max, min) => {
          if (min.discountPrice) {
            return parseInt(min.discountPrice) - parseInt(max.discountPrice);
          } else {
            return parseInt(min.price) - parseInt(max.price);
          }
        });
      default:
        return purchasedGoods.toSorted(
          (a, b) => new Date(b.createDate) - new Date(a.createDate)
        );
    }
  }
  const products = sortProduct(valueSort);
  function onSort() {
    return products.filter(({ title, number }) => {
      return (
        title.toLowerCase().includes(value.toLowerCase()) ||
        `${number}`.includes(value)
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
        valueSort={valueSort}
        value={value}
      />
    </>
  );
}
