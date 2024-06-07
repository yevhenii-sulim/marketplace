import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Wrapper } from './App.styled';
import { loginWithSocial } from '../../redux/auth/slice';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import ProductPage from 'pages/ProductPage';
import CatalogPage from 'pages/CatalogPage';
import AddProduct from 'pages/AddProduct';
import UserPage from 'pages/UserPage';
import HomePage from 'pages/HomePage';
import SubCategories from 'pages/SubCategories';
import RestorePassword from 'pages/RestorePassword';
import ErrorPage from 'pages/ErrorPage';
import MyOrdersPage from 'pages/UserPage/MyOrdersPage';
import MyPosterPage from 'pages/UserPage/MyPosterPage';
import NotificationPages from 'pages/UserPage/NotificationPages';
import SelectedPage from 'pages/UserPage/SelectedPage';
import ProfilePage from 'pages/UserPage/ProfilePage';
import LayoutPage from 'pages/LayoutPage';
import Agreement from 'pages/Agreement';
import Confederacy from 'pages/Confederacy';
import Contacts from 'pages/Contacts';
import AllCatalogPage from 'pages/AllCatalogPage';
import MyStoryOrdersPage from 'pages/UserPage/MyStoryOrdersPage';

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
          <Route path="all" element={<AllCatalogPage />} />
          <Route path="auth/activate" element={<RestorePassword />} />
          <Route path="agreement" element={<Agreement />} />
          <Route path="confederacy" element={<Confederacy />} />
          <Route path="forFree" element={<CatalogPage />} />
          <Route path="contacts" element={<Contacts />} />
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
            <Route path="my_story_order" element={<MyStoryOrdersPage />} />
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
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Wrapper>
  );
}
// const LayoutPage = lazy(() => import('pages/LayoutPage'));

// const ErrorPage = lazy(() => import('pages/ErrorPage'));
// const AddProduct = lazy(() => import('pages/AddProduct'));
// const ProfilePage = lazy(() => import('pages/UserPage/ProfilePage'));
// const SelectedPage = lazy(() => import('pages/UserPage/SelectedPage'));
// const NotificationPages = lazy(() =>
//   import('pages/UserPage/NotificationPages')
// );
// const MyPosterPage = lazy(() => import('pages/UserPage/MyPosterPage'));
// const MyOrdersPage = lazy(() => import('pages/UserPage/MyOrdersPage'));
// const PrivateRoute = lazy(() => import('components/PrivateRoute/PrivateRoute'));
// const UserPage = lazy(() => import('pages/UserPage'));
// const ProductPage = lazy(() => import('pages/ProductPage'));
// const SubCategories = lazy(() => import('pages/SubCategories'));
// const Contacts = lazy(() => import('pages/Contacts'));
// const CatalogPage = lazy(() => import('pages/CatalogPage'));
// const Confederacy = lazy(() => import('pages/Confederacy'));
// const Agreement = lazy(() => import('pages/Agreement'));
// const RestorePassword = lazy(() => import('pages/RestorePassword'));
// const AllCatalogPage = lazy(() => import('pages/AllCatalogPage'));
// const HomePage = lazy(() => import('pages/HomePage'));
