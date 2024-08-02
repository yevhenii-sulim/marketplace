import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectMyUser } from '../../redux/auth/selector';
import MyPosterList from 'components/UserPageComponent/PagesForSidebar/MyPoster/MyPosterList';

export default function MyPosterListPage() {
  const [valueSort, setValueSort] = useState('new');
  const [value, setValue] = useState('');
  const user = useSelector(selectMyUser);

  const purchasedGoods = user?.purchasedGoods ?? [];
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
            return parseInt(min?.discountPrice) - parseInt(max?.discountPrice);
          } else {
            return parseInt(min?.price) - parseInt(max?.price);
          }
        });
      default:
        return purchasedGoods.toSorted(
          (a, b) => new Date(b?.createDate) - new Date(a?.createDate)
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
    <MyPosterList
      sortedProduct={sortedProduct}
      setValueSort={setValueSort}
      setValue={setValue}
      valueSort={valueSort}
      value={value}
    />
  );
}
