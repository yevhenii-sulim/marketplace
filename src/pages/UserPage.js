import UserPageComponents from 'components/UserPageComponent/UserPageComponents';
import { useSelector } from 'react-redux';
import { selectMyUser } from '../redux/auth/selector';

export default function UserPage() {
  const user = useSelector(selectMyUser);
  console.log(user);

  return (
    <UserPageComponents
      rating={0 || user?.rating.count}
      nameUser={0 || user?.firstName}
      imgUser={user?.img || '/marketplace/images/catalog/for-free.png'}
    />
  );
}
