import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../redux/auth/selector';

export default function PrivateRoute({ children }) {
  const isAuth = useSelector(selectAuth);

  return isAuth ? children : <Navigate to={'/'} />;
}
