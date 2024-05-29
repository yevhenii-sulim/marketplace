import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SimilarProduct from 'components/Product/SimilarProduct';
import FilterPrice from 'components/ProductListPage/FilterPrice';
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
  FilterList,
} from './ProductListPage.styled';

export default function ProductListPage({
  min,
  max,
  page,
  category,
  location,
  getMaxValue,
  getMinValue,
  valueSort,
  handleSort,
  sortedProduct,
  handlePageClick,
  totalItemsCount,
}) {
  return (
    <ContainerProductPageList>
      <Navigation>
        <Nav>
          <ListPath>
            <NavLink to="/">Головна сторінка</NavLink>
            <ChevronRightIcon />
          </ListPath>
          <ListPath>
            {category} <ChevronRightIcon />
          </ListPath>
          <ListPath>{location.state}</ListPath>
        </Nav>
        <TitleProducts>{location.state}</TitleProducts>
      </Navigation>
      <ProductsPage>
        <div>
          <TitleSort>Підбір за параметрами</TitleSort>
          <FilterList>
            <FilterPrice
              min={min}
              max={max}
              getMaxValue={getMaxValue}
              getMinValue={getMinValue}
            />
          </FilterList>
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
                discountItem,
                createDate,
                discount,
                eco,
                category,
                subCategory,
              }) => (
                <SimilarProduct
                  key={_id}
                  id={_id}
                  title={title}
                  price={price}
                  img={img}
                  discountItem={discountItem}
                  discount={discount}
                  createDate={createDate}
                  eco={eco}
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
  headphoneProduct: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      img: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.string,
      discountItem: PropTypes.string,
      createDate: PropTypes.string,
      discount: PropTypes.bool,
      eco: PropTypes.bool,
      visit: PropTypes.number,
      category: PropTypes.string,
    })
  ),
};
