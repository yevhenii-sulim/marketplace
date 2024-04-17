import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './App.styled';
import Loyaut from 'components/Loyaut/Loyaut';
import ProductPage from 'pages/ProductPage';
import PhonesList from 'pages/PhonesList';
import CatalogPage from 'pages/CatalogPage';
import AddProduct from 'pages/AddProduct';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import UserPage from 'pages/UserPage';
import HomePage from 'pages/HomePage';
import { update } from '../../redux/auth/thunk';
import { selectAccessToken, selectisRerendung } from '../../redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const isRerendung = useSelector(selectisRerendung);

  const accessToken = useSelector(selectAccessToken);
  useEffect(() => {
    if (!accessToken) {
      return;
    }
    dispatch(update());
  }, [accessToken, dispatch]);

  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Loyaut />}>
          <Route index element={<HomePage />} />
          <Route path="home_page" element={<HomePage />} />
          <Route path="phone" element={<PhonesList />} />
          <Route path="catalog/:catalog_products" element={<CatalogPage />} />
          <Route path="product_page" element={<ProductPage />} />
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
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Wrapper>
  );
}
