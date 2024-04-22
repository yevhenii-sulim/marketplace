import { memo } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../redux/auth/selector';

export default memo(function PrivateRoute({ children }) {
  const isAuth = useSelector(selectAuth);
  console.log(isAuth);

  return isAuth ? children : <Navigate to="/" />;
});
