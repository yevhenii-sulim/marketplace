import StarIcon from '@mui/icons-material/Star';
import {
  Header,
  Name,
  Rating,
  RatingText,
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
            <RatingText>Рейтинг: {rating}</RatingText>
          </Rating>
        </UserName>
      </User>
    </Header>
  );
}
