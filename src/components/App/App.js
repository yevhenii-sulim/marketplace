import ProductPage from 'pages/ProductPage';
import CatalogPage from 'pages/CatalogPage';
import HomePage from 'pages/HomePage';
import SubCategories from 'pages/SubCategories';
import RestorePassword from 'pages/RestorePassword';
import Agreement from 'pages/Agreement';
import Confederacy from 'pages/Confederacy';
import Contacts from 'pages/Contacts';
import PostConfirmedPage from 'pages/PostConfirmedPage';
import OrderingPage from 'pages/UserPage/OrderingPage';
import OrderConfirmed from 'pages/UserPage/OrderConfirmed';
import SearchedProductPage from 'pages/SearchedProductPage';
import BasketPage from 'pages/UserPage/BasketPage';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './App.styled';
import { loginWithSocial } from '../../redux/auth/slice';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import UserPage from 'pages/UserPage';
import ErrorPage from 'pages/ErrorPage';
import MyPosterPage from 'pages/UserPage/MyPosterPage';
import SoldGoodsPages from 'pages/UserPage/SoldGoodsPages';
import SelectedPage from 'pages/UserPage/SelectedPage';
import ProfilePage from 'pages/UserPage/ProfilePage';
import LayoutPage from 'pages/LayoutPage';
import MyStoryOrdersPage from 'pages/UserPage/MyStoryOrdersPage';
import { selectId, selectMyUser } from '../../redux/auth/selector';
import { getUser } from '../../redux/auth/thunk';
import MyPosterListPage from 'pages/UserPage/MyPosterListPage';
import SuccessAddedPage from 'pages/SuccessAddedPage';
import CatalogCategoryMobile from 'pages/CatalogCategoryMobile';
import MenuUserPage from 'pages/MenuUserPage';
// const CatalogPage = lazy(() => import('pages/CatalogPage'));
// const SearchedProductPage = lazy(() => import('pages/SearchedProductPage'));
// const HomePage = lazy(() => import('pages/HomePage'));
// const RestorePassword = lazy(() => import('pages/RestorePassword'));
// const PostConfirmedPage = lazy(() => import('pages/PostConfirmedPage'));
// const Agreement = lazy(() => import('pages/Agreement'));
// const Confederacy = lazy(() => import('pages/Confederacy'));
// const ProductPage = lazy(() => import('pages/ProductPage'));
// const Contacts = lazy(() => import('pages/Contacts'));
// const SubCategories = lazy(() => import('pages/SubCategories'));
// const OrderingPage = lazy(() => import('pages/UserPage/OrderingPage'));
// const BasketPage = lazy(() => import('pages/UserPage/BasketPage'));
// const OrderConfirmed = lazy(() => import('pages/UserPage/OrderConfirmed'));

export default function App() {
  const dispatch = useDispatch();
  const id = useSelector(selectId);
  const user = useSelector(selectMyUser);

  useEffect(() => {
    if (user !== null) {
      return;
    }
    if (!id) return;
    dispatch(getUser(id));
  }, [dispatch, user, id]);

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
          <Route path="search" element={<SearchedProductPage />} />
          <Route path="auth/activate" element={<RestorePassword />} />
          <Route path="post/сonfirmed" element={<PostConfirmedPage />} />
          <Route path="agreement" element={<Agreement />} />
          <Route path="confederacy" element={<Confederacy />} />
          <Route path="forFree" element={<CatalogPage />} />
          <Route path="forFree/:id" element={<ProductPage />} />
          <Route path="all/:id" element={<ProductPage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="catalog" element={<CatalogCategoryMobile />} />
          <Route path=":category" element={<SubCategories />} />
          <Route path=":category/:subcategories" element={<CatalogPage />} />
          <Route path="ordering" element={<OrderingPage />} />
          <Route path="my_order" element={<BasketPage />} />
          <Route path="purchase" element={<OrderConfirmed />} />
          <Route path="success-created" element={<SuccessAddedPage />} />

          <Route
            path="user/menu"
            element={
              <PrivateRoute>
                <MenuUserPage />
              </PrivateRoute>
            }
          />
          <Route
            path=":category/:subcategories/:id"
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
            <Route path="my_story_order" element={<MyStoryOrdersPage />} />
            <Route path="my_poster" element={<MyPosterPage />} />
            <Route path="my_post_list" element={<MyPosterListPage />} />
            <Route path="sold-goods" element={<SoldGoodsPages />} />
            <Route path="selected" element={<SelectedPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
        <Route path="error" element={<ErrorPage />} />
      </Routes>
    </Wrapper>
  );
}
