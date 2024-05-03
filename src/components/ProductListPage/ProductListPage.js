import { useState } from 'react';
import PropTypes from 'prop-types';
import SimilarProduct from 'components/Product/SimilarProduct';
import {
  ContainerProductPageList,
  Filter,
  Paginations,
  ProductsPage,
  ProductList,
  Product,
} from './ProductListPage.styled';
import PaginationList from 'components/Pagination/PaginationList';
import Sort from './Sort';

export default function ProductListPage({ headphoneProduct }) {
  const [page, setPage] = useState(1);
  const [valueSort, setValueSort] = useState('new');
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
        return headphoneProduct.sort(
          (max, min) =>
            new Date().getTime(min.date) - new Date().getTime(max.date)
        );
    }
  };
  const sortedProduct = sortProduct(valueSort);

  console.log(sortedProduct);

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
      <ProductsPage>
        <Filter>
          <h3>Підбір за параметрами</h3>
        </Filter>
        <ProductList>
          <Sort value={valueSort} hendleSort={hendleSort} />
          <Product>
            {sortedProduct.map(
              ({
                tytle,
                id,
                img,
                price,
                discountItem,
                date,
                discount,
                eco,
                category,
                subCategory,
              }) => (
                <SimilarProduct
                  key={id}
                  id={id}
                  tytle={tytle}
                  price={price}
                  img={img}
                  discountItem={discountItem}
                  discount={discount}
                  date={date}
                  eco={eco}
                  category={category}
                  subCategory={subCategory}
                />
              )
            )}
          </Product>
        </ProductList>
      </ProductsPage>
      <Paginations>
        {sortedProduct && (
          <PaginationList
            handlePageChange={handlePageClick}
            activePage={page}
            totalItemsCount={totalItemsCount}
          />
        )}
      </Paginations>
    </ContainerProductPageList>
  );
}

ProductListPage.propTypes = {
  headphoneProduct: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      tytle: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      discountItem: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      discount: PropTypes.bool.isRequired,
      eco: PropTypes.bool.isRequired,
      visit: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ),
};
