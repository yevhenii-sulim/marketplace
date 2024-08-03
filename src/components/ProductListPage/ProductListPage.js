import { NavLink, useSearchParams } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SimilarProduct from 'components/Product/SimilarProduct';
import PaginationList from 'components/Pagination/PaginationList';

import {
  ContainerProductPageList,
  Pagination,
  ProductsPage,
  ProductList,
  Product,
  Navigation,
  Nav,
  TitleProducts,
  TitleSort,
  ListPath,
} from './ProductListPage.styled';
import { useSelector } from 'react-redux';
import { selectCategory } from '../../redux/category/selectors';
import Filters from './FilterList/Filters';
import { memo } from 'react';
import Sort from 'components/Filters/Sort/Sort';
import { selectIsLoading } from '../../redux/product/selector';
import { handleSort } from './handleSort';

export default memo(function ProductListPage({
  page,
  sortedProduct,
  handlePageClick,
  totalItemsCount,
}) {
  const [params, setParams] = useSearchParams('');
  const categories = useSelector(selectCategory);
  const isLoading = useSelector(selectIsLoading);

  return (
    <ContainerProductPageList>
      <Navigation>
        <Nav>
          <ListPath>
            <NavLink to="/">Головна сторінка</NavLink>
            <ChevronRightIcon />
          </ListPath>
          <ListPath>
            <NavLink to={`/${categories.category.en}`}>
              {categories.category.ua}
            </NavLink>
            {categories.subCategory && <ChevronRightIcon />}
          </ListPath>
          {categories.subCategory && (
            <ListPath>{categories?.subCategory.ua}</ListPath>
          )}
        </Nav>
        <TitleProducts>
          {categories.subCategory && <>{categories?.subCategory.ua}</>}
        </TitleProducts>
      </Navigation>
      <ProductsPage>
        <div>
          <TitleSort>Підбір за параметрами</TitleSort>
          <Filters />
        </div>
        <ProductList>
          <Sort
            name="sort"
            placeholder="Сортувати за:"
            handleSort={handleSort}
            setParams={setParams}
            params={params}
          />
          {isLoading && (
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
                }) => (
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
                  />
                )
              )}
            </Product>
          )}
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
              }) => (
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
                />
              )
            )}
          </Product>
          <Pagination>
            <PaginationList
              handlePageChange={handlePageClick}
              activePage={page}
              totalItemsCount={totalItemsCount}
            />
          </Pagination>
        </ProductList>
      </ProductsPage>
    </ContainerProductPageList>
  );
});
