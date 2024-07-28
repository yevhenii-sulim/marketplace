import HomePageComponent from 'components/HomePageComponent/HomePageComponent';
import CategoryList from 'components/CategoryList/CategoryList';
import { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://internet-shop-api-production.up.railway.app';
axios.defaults.headers.post['Content-Type'] = 'application/json';
const param = [
  {
    name: 'createDate',
    describe: 'desc',
    field: 'sortField',
    action: 'sortOrder',
  },
  { name: 'discount', bool: true },
  { name: 'eco', bool: true },
];

export default function HomePage() {
  const [productsDiscount, setProductsDiscount] = useState([]);
  const [productsNew, setProductsNew] = useState([]);
  const [productsEco, setProductsEco] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const productsListPromise = param.map(async item => {
        if (item.name === 'createDate') {
          const res = await axios.get(
            `/products/filterAndSortedProducts/all?${item.field}=${item.name}&${item.action}=${item.describe}`
          );
          return res;
        } else {
          const res = await axios.get(
            `/products/filterAndSortedProducts/all?${item.name}=${item.bool}`
          );
          return res;
        }
      });
      const productsList = await Promise.allSettled(productsListPromise);
      for (const products of productsList) {
        if (products.value.request.responseURL.includes('createDate')) {
          setProductsNew(products.value.data.products);
        }
        if (products.value.request.responseURL.includes('discount')) {
          setProductsDiscount(products.value.data.products);
        }
        if (products.value.request.responseURL.includes('eco')) {
          setProductsEco(products.value.data.products);
        }
      }
    };
    fetchProduct();
  }, []);

  return (
    <>
      <CategoryList />
      {productsDiscount.length !== 0 && (
        <HomePageComponent
          filteredProducts={productsDiscount}
          title="Кращий вибір"
        />
      )}

      {productsNew.length !== 0 && (
        <HomePageComponent
          filteredProducts={productsNew}
          title="Нові оголошення"
        />
      )}
      {productsEco?.length !== 0 && (
        <HomePageComponent
          filteredProducts={productsEco}
          title="Еко продукти"
        />
      )}
    </>
  );
}
