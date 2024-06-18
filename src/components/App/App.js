import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './App.styled';
import { loginWithSocial } from '../../redux/auth/slice';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import ProductPage from 'pages/ProductPage';
import CatalogPage from 'pages/CatalogPage';
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
import { selectId, selectMyUser } from '../../redux/auth/selector';
import { getUser } from '../../redux/auth/thunk';

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
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Wrapper>
  );
}
