import { useSelector } from 'react-redux';
import { selectMyUser } from '../../redux/auth/selector';
import UserPageHeader from 'components/UserPageComponent/UserPageHeader';
import UserPageSidebar from 'components/UserPageComponent/UserPageSidebar';
import { Sidebar, Title, WrapperSidebar } from './MenuResponse.styled';

export default function ListUserMenu() {
  const user = useSelector(selectMyUser);

  return (
    <WrapperSidebar>
      <Title>Профіль</Title>
      <UserPageHeader
        rating={0 || user?.rating.count}
        nameUser={0 || user?.firstName}
        imgUser={
          user?.profilePictureSrc !== ''
            ? user?.profilePictureSrc
            : '/marketplace/images/catalog/for-free.png'
        }
      />
      <Sidebar>
        <UserPageSidebar />
      </Sidebar>
    </WrapperSidebar>
  );
}
