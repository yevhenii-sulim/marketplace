import React, { useEffect, useState } from 'react';
import { Empty, Link } from './PagesForSidebar.styled';
import FavoriteSvg from 'SvgComponents/FavoriteSVG/FavoriteSvg';
import SimilarProduct from 'components/Product/SimilarProduct';
import {
  Product,
  ProductList,
} from 'components/ProductListPage/ProductListPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectId, selectMyUser } from '../../../redux/auth/selector';
import { getUser } from '../../../redux/auth/thunk';
import Sort from 'components/Sort/Sort';

export default function Selected() {
  const [valueSort, setValueSort] = useState('new');
  const id = useSelector(selectId);
  const user = useSelector(selectMyUser);
  const favorites = user?.favorites ?? [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

  const handleSort = sort => {
    setValueSort(sort);
  };

  const sortProduct = criterion => {
    switch (criterion) {
      case 'cheep':
        return favorites.toSorted(
          (max, min) => parseInt(max.price) - parseInt(min.price)
        );

      case 'expensive':
        return favorites.toSorted(
          (max, min) => parseInt(min.price) - parseInt(max.price)
        );
      default:
        return favorites.toSorted(
          (a, b) => new Date(b.createDate) - new Date(a.createDate)
        );
    }
  };

  const sortedProduct = sortProduct(valueSort);

  return (
    <>
      <div>
        {favorites.length === 0 && (
          <Empty>
            <FavoriteSvg />
            <p>Тут ви побачите список ваших обраних товарів.</p>
            <Link to="/">Перейти до товарів</Link>
          </Empty>
        )}
        {favorites.length !== 0 && (
          <ProductList>
            <Sort
              name="sort"
              placeholder="Сортувати за"
              handleSort={handleSort}
            />
            <Product>
              {sortedProduct.map(
                ({
                  title,
                  _id,
                  img,
                  price,
                  discountPrice,
                  createDate,
                  discount,
                  parameters,
                  category,
                  subCategory,
                }) => {
                  return (
                    <>
                      <SimilarProduct
                        key={_id}
                        id={_id}
                        title={title}
                        price={price}
                        img={img}
                        discountPrice={discountPrice}
                        discount={discount}
                        createDate={createDate}
                        eco={parameters.eco}
                        isUkraine={parameters.isUkraine}
                        category={category}
                        subCategory={subCategory}
                      ></SimilarProduct>
                    </>
                  );
                }
              )}
            </Product>
          </ProductList>
        )}
      </div>
    </>
  );
}

// {
//   favorites.length !== 0 && (
//     <ProductList>
//       <Sort value={valueSort} handleSort={handleSort} />
//       <Product>
//         {sortedProduct.map(
//           ({
//             title,
//             _id,
//             img,
//             price,
//             discountPrice,
//             createDate,
//             discount,
//             parameters,
//             category,
//             subCategory,
//           }) => (
//             <SimilarProduct
//               key={_id}
//               id={_id}
//               title={title}
//               price={price}
//               img={img}
//               discountPrice={discountPrice}
//               discount={discount}
//               createDate={createDate}
//               eco={parameters.eco}
//               isUkraine={parameters.isUkraine}
//               category={category}
//               subCategory={subCategory}
//             />
//           )
//         )}
//       </Product>
//     </ProductList>
//   );
// }

// {
//   sortedProduct.map(
// ({
//   title,
//   _id,
//   img,
//   price,
//   discountPrice,
//   createDate,
//   discount,
//   parameters,
//   category,
//   subCategory,
// }) => (
// <>
//   <SimilarProduct
//     key={_id}
//     id={_id}
//     title={title}
//     price={price}
//     img={img}
//     discountPrice={discountPrice}
//     discount={discount}
//     createDate={createDate}
//     eco={parameters.eco}
//     isUkraine={parameters.isUkraine}
//     category={category}
//     subCategory={subCategory}
//   >
//     <CloseIcon
//       sx={styleRemoveImgButton}
//       onMouseUp={removeProductFromFavorite}
//       data-remove="imageField"
//     />
//   </SimilarProduct>
// </>
//     )
//   );
// }
