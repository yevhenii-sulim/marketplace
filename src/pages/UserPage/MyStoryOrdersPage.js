import MyStoryOrder from 'components/UserPageComponent/PagesForSidebar/MyStoryOrder';
import { myProduct } from 'data/myProduct';
import { useState } from 'react';

export default function MyStoryOrdersPage() {
  const [valueSort, setValueSort] = useState('new');
  const [value, setValue] = useState('');
  function sortProduct(criterion) {
    switch (criterion) {
      case 'cheep':
        return myProduct.toSorted((max, min) => {
          if (min.discountPrice) {
            return parseInt(max.discountPrice) - parseInt(min.discountPrice);
          } else {
            return parseInt(max.price) - parseInt(min.price);
          }
        });

      case 'expensive':
        return myProduct.toSorted((max, min) => {
          if (min.discountPrice) {
            return parseInt(min.discountPrice) - parseInt(max.discountPrice);
          } else {
            return parseInt(min.price) - parseInt(max.price);
          }
        });
      default:
        return myProduct.toSorted(
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
