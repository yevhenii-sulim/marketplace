import UserPageComponents from 'components/UserPageComponent/UserPageComponents';
import { useSelector } from 'react-redux';
import { selectMyUser } from '../redux/auth/selector';

export default function UserPage() {
  const user = useSelector(selectMyUser);
  console.log(user.rating);

  return (
    <UserPageComponents
      rating={user?.rating.count}
      nameUser={user?.firstName}
      imgUser={user?.img || '/marketplace/images/catalog/for-free.png'}
    />
  );
}
