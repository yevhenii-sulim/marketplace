import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SimilarProduct from 'components/Product/SimilarProduct';
import FilterSlide from 'components/ProductListPage/FilterSlide';
import PaginationList from 'components/Pagination/PaginationList';
import { selectCategory } from '../../redux/category/selectors';
import { getAllProducts } from '../../redux/product/thunk';
import { selectProduct } from '../../redux/product/selector';
import Sort from './Sort';
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

export default function ProductListPage() {
  const [page, setPage] = useState(1);
  const [valueSort, setValueSort] = useState('new');
  const location = useLocation();
  const category = useSelector(selectCategory);
  const limit = 2;
  const productAll = useSelector(selectProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts({ page: page, limit: limit }));
  }, [dispatch, page]);

  const totalItemsCount = 2;

  const hendleSort = sort => {
    setValueSort(sort);
  };

  const sortProduct = criterion => {
    switch (criterion) {
      case 'cheep':
        return productAll.toSorted(
          (max, min) => parseInt(max.price) - parseInt(min.price)
        );

      case 'expensive':
        return productAll.toSorted(
          (max, min) => parseInt(min.price) - parseInt(max.price)
        );
      default:
        return productAll.toSorted(
          (a, b) => new Date(b.createDate) - new Date(a.createDate)
        );
      // new Date().getTime(min.createDate) - new Date().getTime(max.createDate)
    }
  };

  const sortedProduct = sortProduct(valueSort);

  const handlePageClick = page => {
    setPage(page);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
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
          <FilterSlide min={0} max={10000} />
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
