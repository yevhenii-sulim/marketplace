import { useState } from 'react';
import { useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
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
import FilterOpenSvg from 'SvgComponents/FilterOpen/FilterOpenSvg';
import { handleSort } from './handleSort';
import FiltersModal from 'components/Filters/FiltersModal/FiltersModal';
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
  FilterOpenButton,
} from './ProductListPage.styled';

const modalEnter = document.querySelector('#modal');

export default function ProductListPage({
  page,
  sortedProduct,
  handlePageClick,
  totalItemsCount,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [translateMenu, setTranslateMenu] = useState(false);
  const [params, setParams] = useSearchParams('');
  const categories = useSelector(selectCategory);
  const isLoading = useSelector(selectIsLoading);
  const { width } = useWindowDimensions();

  function onOpen() {
    setIsOpen(true);
    setTimeout(() => setTranslateMenu(true), 0);
  }

  function onClose(bool) {
    setTranslateMenu(bool);
    setTimeout(() => setIsOpen(bool), 500);
  }

  function setRouting(categories) {
    if (!categories) return;
    return categories.subCategory;
  }
  return (
    <ContainerProductPageList>
      {width < 1440 && <Search />}
      {width >= 1440 && (
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
      )}
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
            {width < 1440 && (
              <FilterOpenButton onClick={onOpen}>
                <span>Фільтрувати</span>
                <FilterOpenSvg />
              </FilterOpenButton>
            )}
          </Option>
          {width < 1440 && (
            <TitleProducts>
              {setRouting(categories) && <>{categories.subCategory.ua}</>}
            </TitleProducts>
          )}
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
      {isOpen &&
        createPortal(
          <FiltersModal isOpenMenu={translateMenu} onClose={onClose} />,
          modalEnter
        )}
    </ContainerProductPageList>
  );
}
