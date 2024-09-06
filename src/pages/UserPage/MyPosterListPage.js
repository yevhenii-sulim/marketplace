import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectMyUser } from '../../redux/auth/selector';
import MyPosterList from 'components/UserPageComponent/PagesForSidebar/MyPoster/MyPosterList';

export default function MyPosterListPage() {
  const [valueSort, setValueSort] = useState('new');
  const [value, setValue] = useState('');
  const user = useSelector(selectMyUser);

  const [myProduct, setMyProduct] = useState([]);

  const products = user?.products;

  useEffect(() => {
    if (!products) return;
    setMyProduct(products);
  }, [products]);

  function sortProduct(criterion) {
    switch (criterion) {
      case 'Найдешевші':
        return myProduct.toSorted((max, min) => {
          if (min.discountPrice) {
            return parseInt(max.discountPrice) - parseInt(min.discountPrice);
          } else {
            return parseInt(max.price) - parseInt(min.price);
          }
        });

      case 'Найдорожчі':
        return myProduct.toSorted((max, min) => {
          if (min.discountPrice) {
            return parseInt(min?.discountPrice) - parseInt(max?.discountPrice);
          } else {
            return parseInt(min?.price) - parseInt(max?.price);
          }
        });
      default:
        return myProduct.toSorted(
          (a, b) => new Date(b?.createDate) - new Date(a?.createDate)
        );
    }
  }
  const sortedProducts = sortProduct(valueSort);

  function onSort() {
    return sortedProducts.filter(({ title, count }) => {
      return (
        title.toLowerCase().includes(value.toLowerCase()) ||
        `${count}`.includes(value)
      );
    });
  }
  function deleteProductFromDisplay(id) {
    setMyProduct(products =>
      products.filter(({ _id }) => {
        return _id !== id;
      })
    );
  }
  const sortedProduct = onSort();
  console.log('sortedProduct', sortedProduct);
  return (
    <MyPosterList
      sortedProduct={sortedProduct}
      setValueSort={setValueSort}
      setValue={setValue}
      value={value}
      deleteProductFromDisplay={deleteProductFromDisplay}
    />
  );
}
