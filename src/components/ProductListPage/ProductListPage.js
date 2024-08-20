import { NavLink, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { selectCategory } from '../../redux/category/selectors';
import { selectIsLoading } from '../../redux/product/selector';
import SimilarProduct from 'components/Product/SimilarProduct';
import PaginationList from 'components/Pagination/PaginationList';
import Sort from 'components/Filters/Sort/Sort';
import SkeletonCatalogList from 'components/SkeletonCatalogList/SkeletonCatalogList';
import Filters from './FilterList/Filters';
import { handleSort } from './handleSort';
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
  FiltersList,
  Option,
} from './ProductListPage.styled';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { dpr } from 'utils/dpr';

export default function ProductListPage({
  page,
  sortedProduct,
  handlePageClick,
  totalItemsCount,
}) {
  const [params, setParams] = useSearchParams('');
  const categories = useSelector(selectCategory);
  const isLoading = useSelector(selectIsLoading);
  const { width } = useWindowDimensions();
  console.log(width / dpr >= 1200);

  function setRouting(categories) {
    if (!categories) return;
    return categories.subCategory;
  }
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
            {setRouting(categories) && <ChevronRightIcon />}
          </ListPath>
          {setRouting(categories) && (
            <ListPath>{categories.subCategory.ua}</ListPath>
          )}
        </Nav>
        <TitleProducts>
          {setRouting(categories) && <>{categories.subCategory.ua}</>}
        </TitleProducts>
      </Navigation>
      <ProductsPage>
        <FiltersList>
          <TitleSort>Підбір за параметрами</TitleSort>
          <Filters />
        </FiltersList>
        <ProductList>
          <Option>
            <Sort
              name="sort"
              placeholder="Сортувати за:"
              handleSort={handleSort}
              setParams={setParams}
              params={params}
            />
            {width / dpr < 1200 && (
              <Sort
                name="sort"
                placeholder="Сортувати за:"
                handleSort={handleSort}
                setParams={setParams}
                params={params}
              />
            )}
          </Option>
          {isLoading ? (
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
          ) : (
            <SkeletonCatalogList />
          )}

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
}
