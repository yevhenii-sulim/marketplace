// import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './App.styled';
import Loyaut from 'components/Loyaut/Loyaut';
import ProductPage from 'pages/ProductPage';
import CatalogPage from 'pages/CatalogPage';
import AddProduct from 'pages/AddProduct';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import UserPage from 'pages/UserPage';
import HomePage from 'pages/HomePage';
import LaptopList from 'pages/LaptopList';
import PhonesList from 'pages/PhonesList';
// import { update } from '../../redux/auth/thunk';
// import { selectToken } from '../../redux/auth/selector';
// import { selectIsRerendung, selectToken } from '../../redux/auth/selector';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const userDataParam = searchParams.get('userData');
    if (userDataParam) {
      const userDataObj = JSON.parse(decodeURIComponent(userDataParam));
      localStorage.setItem('token', userDataObj.accessToken);
      localStorage.setItem('email', userDataObj?.user.email);
      localStorage.setItem('name', userDataObj?.user.name);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

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
          <Route path="contact_us" element={<LaptopList />} />
          <Route path=":category/:product_page" element={<ProductPage />} />
          <Route path=":category" element={<CatalogPage />} />
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
