import { memo } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectFulfilled } from '../../redux/auth/selector';

export default memo(function PrivateRoute({ children }) {
  const isLoad = useSelector(selectFulfilled);
  return isLoad ? children : <Navigate to="/" />;
});
