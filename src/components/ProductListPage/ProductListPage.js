import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PropTypes from 'prop-types';
import SimilarProduct from 'components/Product/SimilarProduct';
import {
  ContainerProductPageList,
  Filter,
  Paginations,
  ProductsPage,
  ProductList,
  Product,
  Navigation,
  Nav,
  TytleProducts,
  TytleSort,
  ListPath,
} from './ProductListPage.styled';
import PaginationList from 'components/Pagination/PaginationList';
import Sort from './Sort';
import { selectCategory } from '../../redux/category/selectors';

export default function ProductListPage({ headphoneProduct }) {
  const [page, setPage] = useState(1);
  const [valueSort, setValueSort] = useState('new');
  const location = useLocation();
  const category = useSelector(selectCategory);

  const totalItemsCount = 10;

  const hendleSort = sort => {
    setValueSort(sort);
  };

  const sortProduct = criterion => {
    switch (criterion) {
      case 'cheep':
        return headphoneProduct.sort(
          (max, min) => parseInt(max.price) - parseInt(min.price)
        );

      case 'expensive':
        return headphoneProduct.sort(
          (max, min) => parseInt(min.price) - parseInt(max.price)
        );
      default:
        return headphoneProduct.toSorted(
          (a, b) => new Date(b.createDate) - new Date(a.createDate)
        );
      // new Date().getTime(min.createDate) - new Date().getTime(max.createDate)
    }
  };

  const sortedProduct = sortProduct(valueSort);

  const handlePageClick = page => {
    setPage(prev => {
      if (prev === page) {
        return prev;
      }
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      return page;
    });
  };
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
        <TytleProducts>{location.state}</TytleProducts>
      </Navigation>
      <ProductsPage>
        <Filter>
          <TytleSort>Підбір за параметрами</TytleSort>
        </Filter>
        <ProductList>
          <Sort value={valueSort} hendleSort={hendleSort} />
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
          <Paginations>
            {sortedProduct && (
              <PaginationList
                handlePageChange={handlePageClick}
                activePage={page}
                totalItemsCount={totalItemsCount}
              />
            )}
          </Paginations>
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
