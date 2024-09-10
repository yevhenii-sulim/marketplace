import { useEffect } from 'react';
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

export default function Selected() {
  const id = useSelector(selectId);
  const user = useSelector(selectMyUser);
  const favorites = user?.favorites ?? [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

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
            <Product>
              {favorites.map(
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
