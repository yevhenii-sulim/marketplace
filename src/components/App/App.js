import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Wrapper } from './App.styled';
import ProductPage from 'pages/ProductPage';
import CatalogPage from 'pages/CatalogPage';
import AddProduct from 'pages/AddProduct';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import UserPage from 'pages/UserPage';
import HomePage from 'pages/HomePage';
import SubCategories from 'pages/SubCategories';
import { useDispatch } from 'react-redux';
import { loginWithSocial } from '../../redux/auth/slice';
import RestorePassword from 'pages/RestorePassword';
import ErrorPage from 'pages/ErrorPage';
import MyOrdersPage from 'pages/UserPage/MyOrdersPage';
import MyPosterPage from 'pages/UserPage/MyPosterPage';
import NotificationPages from 'pages/UserPage/NotificationPages';
import SelectedPage from 'pages/UserPage/SelectedPage';
import ProfilePage from 'pages/UserPage/ProfilePage';
import LayoutPage from 'pages/LayoutPage';

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
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="all" element={<CatalogPage />} />
          <Route path="auth/activate" element={<RestorePassword />} />
          <Route path="for_free" element={<CatalogPage />} />
          <Route path=":category" element={<SubCategories />} />
          <Route path=":category/:subcategories" element={<CatalogPage />} />
          <Route
            path=":category/:subcategories/:product_page"
            element={<ProductPage />}
          />
          <Route
            path="user_page"
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          >
            <Route path="my_order" element={<MyOrdersPage />} />
            <Route path="my_poster" element={<MyPosterPage />} />
            <Route path="notification" element={<NotificationPages />} />
            <Route path="selected" element={<SelectedPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
          <Route
            path="add_product"
            element={
              <PrivateRoute>
                <AddProduct />
              </PrivateRoute>
            }
          ></Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Wrapper>
  );
}
