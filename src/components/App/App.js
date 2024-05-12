import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Wrapper } from './App.styled';
import Loyaut from 'components/Loyaut/Loyaut';
import ProductPage from 'pages/ProductPage';
import CatalogPage from 'pages/CatalogPage';
import AddProduct from 'pages/AddProduct';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import UserPage from 'pages/UserPage';
import HomePage from 'pages/HomePage';
import SubCategoris from 'pages/SubCategoris';
import PhonesList from 'pages/PhonesList';
import { useDispatch } from 'react-redux';
import { loginWithSocial } from '../../redux/auth/slice';
import RestorePassword from 'pages/RestorePassword';


export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const userDataParam = searchParams.get('userData');
    if (userDataParam) {
      const userDataObj = JSON.parse(decodeURIComponent(userDataParam));
      dispatch(loginWithSocial(userDataObj));
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [dispatch]);

  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Loyaut />}>
          <Route index element={<HomePage />} />
          <Route path="all" element={<CatalogPage />} />
          <Route path="auth/activate" element={<RestorePassword />} />
          <Route path="for_free" element={<CatalogPage />} />
          <Route path=":category" element={<SubCategoris />} />
          <Route path=":category/:subcategoris" element={<SubCategoris />} />
          <Route
            path=":category/:subcategoris/:product_page"
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
        <Route path="*" element={<PhonesList />} />
      </Routes>
    </Wrapper>
  );
}
