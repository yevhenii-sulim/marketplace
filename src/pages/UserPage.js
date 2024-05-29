import UserPageComponents from 'components/UserPageComponent/UserPageComponents';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectId, selectMyUser } from '../redux/auth/selector';
import { getUser } from '../redux/auth/thunk';

export default function UserPage() {
  const id = useSelector(selectId);
  const user = useSelector(selectMyUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user !== null) {
      return;
    }
    dispatch(getUser(id));
  }, [dispatch, user, id]);
  return (
    <UserPageComponents
      rating={0 || user?.rating}
      nameUser={'' || user?.firstName}
      imgUser={user?.img || '/marketplace/images/catalog/for-free.png'}
    />
  );
}
