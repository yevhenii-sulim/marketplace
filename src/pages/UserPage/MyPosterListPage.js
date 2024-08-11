// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { selectMyUser } from '../../redux/auth/selector';
// import MyPosterList from 'components/UserPageComponent/PagesForSidebar/MyPoster/MyPosterList';

export default function MyPosterListPage() {
  // const [valueSort, setValueSort] = useState('new');
  // const [value, setValue] = useState('');
  // const user = useSelector(selectMyUser);

  // const products = user?.products ?? [];
  // function sortProduct(criterion) {
  //   switch (criterion) {
  //     case 'Найдешевші':
  //       return products.toSorted((max, min) => {
  //         if (min.discountPrice) {
  //           return parseInt(max.discountPrice) - parseInt(min.discountPrice);
  //         } else {
  //           return parseInt(max.price) - parseInt(min.price);
  //         }
  //       });

  //     case 'Найдорожчі':
  //       return products.toSorted((max, min) => {
  //         if (min.discountPrice) {
  //           return parseInt(min?.discountPrice) - parseInt(max?.discountPrice);
  //         } else {
  //           return parseInt(min?.price) - parseInt(max?.price);
  //         }
  //       });
  //     default:
  //       return products.toSorted(
  //         (a, b) => new Date(b?.createDate) - new Date(a?.createDate)
  //       );
  //   }
  // }
  // const sortedProducts = sortProduct(valueSort);

  // function onSort() {
  //   return sortedProducts.filter(({ title, number }) => {
  //     console.log(number);
  //     return title.toLowerCase().includes(value.toLowerCase());
  //     // ||
  //     // `${number}`.includes(value)
  //   });
  // }

  // const sortedProduct = onSort();
  // console.log(sortedProduct);
  return (
    <div></div>
    // <MyPosterList
    //   sortedProduct={sortedProduct}
    //   setValueSort={setValueSort}
    //   setValue={setValue}
    //   valueSort={valueSort}
    //   value={value}
    // />
  );
}
