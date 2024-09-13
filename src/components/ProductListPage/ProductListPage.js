import { useSelector } from 'react-redux';
import { NavLink, useSearchParams } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { selectCategory } from '../../redux/category/selectors';
import { selectIsLoading } from '../../redux/product/selector';
import SimilarProduct from 'components/Product/SimilarProduct';
import PaginationList from 'components/Pagination/PaginationList';
import Sort from 'components/Filters/Sort/Sort';
import SkeletonCatalogList from 'components/SkeletonCatalogList/SkeletonCatalogList';
import Search from 'components/Search/Search';
import Filters from '../Filters/FilterList/Filters';
import { handleSort } from './handleSort';
import { theme } from 'utils/theme';
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
} from './ProductListPage.styled';

export default function ProductListPage({
  page,
  sortedProduct,
  handlePageClick,
  totalItemsCount,
  setPage,
}) {
  const [params, setParams] = useSearchParams('');
  const categories = useSelector(selectCategory);
  const isLoading = useSelector(selectIsLoading);
  const { width } = useWindowDimensions();

  function setRouting(categories) {
    if (!categories) return;
    return categories.subCategory;
  }

  return (
    <ContainerProductPageList>
      {width < parseInt(theme.breakPoints.lg) && <Search />}
      {width >= parseInt(theme.breakPoints.lg) && (
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
            {setRouting(categories) ? (
              <>{categories.subCategory.ua}</>
            ) : (
              <>{categories.category.ua}</>
            )}
          </TitleProducts>
        </Navigation>
      )}
      <ProductsPage>
        <FiltersList>
          <TitleSort>Підбір за параметрами</TitleSort>
          <Filters setPage={setPage} />
        </FiltersList>
        <ProductList>
          <Sort
            name="sort"
            placeholder="Сортувати за:"
            handleSort={handleSort}
            setParams={setParams}
            params={params}
            setPage={setPage}
          />

          {width < parseInt(theme.breakPoints.lg) && (
            <TitleProducts>
              {setRouting(categories) ? (
                <>{categories.subCategory.ua}</>
              ) : (
                <>{categories.category.ua}</>
              )}
            </TitleProducts>
          )}
          {isLoading && sortedProduct.length !== 0 ? (
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

          {sortedProduct.length !== 0 && (
            <Pagination>
              <PaginationList
                handlePageChange={handlePageClick}
                activePage={page}
                totalItemsCount={totalItemsCount}
              />
            </Pagination>
          )}
        </ProductList>
      </ProductsPage>
    </ContainerProductPageList>
  );
}

// <EmptySearch>
//   <TitleSection>
//     На жаль, за вашим запитом нічого не знайдено.
//   </TitleSection>
//   <ul>
//     <li>Спробуйте використати інші фільтри</li>
//   </ul>
//   <BoxSvg>
//     <NoSearched />
//   </BoxSvg>
// </EmptySearch>
