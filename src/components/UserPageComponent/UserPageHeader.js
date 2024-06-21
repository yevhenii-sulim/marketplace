import StarIcon from '@mui/icons-material/Star';
import {
  Header,
  Name,
  Rating,
  User,
  UserName,
} from './UserPageComponent.styled';
export default function UserPageHeader({ rating, nameUser, imgUser }) {
  return (
    <Header>
      <User>
        <img src={imgUser} alt="user" />
        <UserName>
          <Name>{nameUser}</Name>
          <Rating>
            <StarIcon sx={{ color: '#FFBC10' }} />
            <p>Рейтинг: {rating}</p>
          </Rating>
        </UserName>
      </User>
    </Header>
  );
}
