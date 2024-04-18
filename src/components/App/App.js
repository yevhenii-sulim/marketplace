// import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './App.styled';
import Loyaut from 'components/Loyaut/Loyaut';
import ProductPage from 'pages/ProductPage';
import PhonesList from 'pages/PhonesList';
import CatalogPage from 'pages/CatalogPage';
import AddProduct from 'pages/AddProduct';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import UserPage from 'pages/UserPage';
import HomePage from 'pages/HomePage';
// import { update } from '../../redux/auth/thunk';
// import { selectToken } from '../../redux/auth/selector';
// import { selectIsRerendung, selectToken } from '../../redux/auth/selector';

export default function App() {
  // const dispatch = useDispatch();
  // // const isRerendung = useSelector(selectIsRerendung);

  // const accessToken = useSelector(selectToken);
  // useEffect(() => {
  //   if (!accessToken) {
  //     return;
  //   }
  //   dispatch(update());
  // }, [accessToken, dispatch]);

  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Loyaut />}>
          <Route index element={<HomePage />} />
          <Route path="home_page" element={<HomePage />} />
          <Route path="home_page/:catalog_products" element={<CatalogPage />} />
          <Route
            path="home_page/:catalog_products/:product_page"
            element={<ProductPage />}
          />
          <Route
            path="user_page"
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />
          <Route
            path="add_product"
            element={
              <PrivateRoute>
                <AddProduct />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="phone" element={<PhonesList />} />
        <Route path="*" element={<Loyaut />} />
      </Routes>
    </Wrapper>
  );
}
