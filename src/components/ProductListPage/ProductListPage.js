import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SimilarProduct from 'components/Product/SimilarProduct';
import PaginationList from 'components/Pagination/PaginationList';

import Sort from './Sort';
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

import { selectFilters } from '../../redux/product/selector';
import Filters from './FilterList/FilterList';
export default function ProductListPage({
  min,
  max,
  page,
  getMaxValue,
  getMinValue,
  valueSort,
  handleSort,
  sortedProduct,
  handlePageClick,
  totalItemsCount,
}) {
  const categories = useSelector(selectCategory);
  const filters = useSelector(selectFilters);
  console.log(filters);

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
          <Filters
            min={min}
            max={max}
            getMaxValue={getMaxValue}
            getMinValue={getMinValue}
          />
        </div>
        <ProductList>
          <Sort value={valueSort} handleSort={handleSort} />
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

ProductListPage.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  getMaxValue: PropTypes.func.isRequired,
  getMinValue: PropTypes.func.isRequired,
  valueSort: PropTypes.string.isRequired,
  handleSort: PropTypes.func.isRequired,
  sortedProduct: PropTypes.array.isRequired,
  handlePageClick: PropTypes.func.isRequired,
  totalItemsCount: PropTypes.number.isRequired,
};
