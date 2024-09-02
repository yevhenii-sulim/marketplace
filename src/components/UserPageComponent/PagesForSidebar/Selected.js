import { useEffect, useState } from 'react';
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
    console.log(favorites);

    switch (criterion) {
      case 'Найдешевші':
        return favorites.toSorted((min, max) => {
          const minDiscountPrice =
            min.discount !== false ? parseInt(min.discountPrice, 10) : Infinity;
          const maxDiscountPrice =
            max.discount !== false ? parseInt(max.discountPrice, 10) : Infinity;

          const minPrice = parseInt(min.price, 10);
          const maxPrice = parseInt(max.price, 10);

          if (minDiscountPrice !== Infinity && maxDiscountPrice !== Infinity) {
            return minDiscountPrice - maxDiscountPrice;
          }

          if (minDiscountPrice !== Infinity && maxDiscountPrice === Infinity) {
            return -1;
          } else if (
            minDiscountPrice === Infinity &&
            maxDiscountPrice !== Infinity
          ) {
            return 1;
          }

          return maxPrice - minPrice;
        });

      case 'Найдорожчі':
        return favorites.toSorted((max, min) => {
          const aDiscountPrice =
            max.discountPrice !== undefined
              ? parseInt(max.discountPrice, 10)
              : Infinity;
          const bDiscountPrice =
            min.discountPrice !== undefined
              ? parseInt(min.discountPrice, 10)
              : Infinity;

          const aPrice =
            max.price !== undefined ? parseInt(max.price, 10) : Infinity;
          const bPrice =
            min.price !== undefined ? parseInt(min.price, 10) : Infinity;

          // Сортування по discountPrice: об'єкти з discountPrice мають бути перед тими, у яких його немає
          if (aDiscountPrice !== Infinity && bDiscountPrice === Infinity) {
            return -1;
          } else if (
            aDiscountPrice === Infinity &&
            bDiscountPrice !== Infinity
          ) {
            return 1;
          } else if (
            aDiscountPrice === Infinity &&
            bDiscountPrice === Infinity
          ) {
            // Якщо обидва об'єкти не мають discountPrice, сортуємо за price
            return aPrice - bPrice;
          } else {
            // Якщо обидва об'єкти мають discountPrice, сортуємо за discountPrice
            return bDiscountPrice - aDiscountPrice;
          }
        });
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
