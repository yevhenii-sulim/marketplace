import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../redux/auth/selector';
import { memo } from 'react';

export default memo(function PrivateRoute({ children }) {
  const isLoad = useSelector(selectAuth);
  return isLoad ? children : <Navigate to="/home_page" />;
});
