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

export default function ProductListPage() {
  const [page, setPage] = useState(1);

  const productAll = useSelector(selectProduct);
  const category = useSelector(selectCategory);

  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(15000);

  useEffect(() => {
    if (productAll.length === 0) {
      return;
    }
    setPriceMax(
      productAll.toSorted(
        (max, min) => parseInt(min.price) - parseInt(max.price)
      )[0].price
    );

    setPriceMin(
      productAll.toSorted(
        (max, min) => parseInt(max.price) - parseInt(min.price)
      )[0].price
    );
  }, [productAll]);

  const [valueSort, setValueSort] = useState('new');
  const location = useLocation();
  const dispatch = useDispatch();

  const limit = 5;

  useEffect(() => {
    dispatch(getAllProducts({ page: page, limit: limit }));
  }, [dispatch, page]);

  const totalItemsCount = 100;

  const handleSort = sort => {
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

  const getMaxValue = num => {
    console.log('num', num);
  };
  const getMinValue = num => {
    console.log('num', num);
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
        <TitleProducts>{location.state}</TitleProducts>
      </Navigation>
      <ProductsPage>
        <Filter>
          <TitleSort>Підбір за параметрами</TitleSort>
          <FilterSlide
            min={priceMin}
            max={priceMax}
            getMaxValue={getMaxValue}
            getMinValue={getMinValue}
          />
        </Filter>
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
          <Pagination>
            {sortedProduct && (
              <PaginationList
                handlePageChange={handlePageClick}
                activePage={page}
                totalItemsCount={totalItemsCount}
              />
            )}
          </Pagination>
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
