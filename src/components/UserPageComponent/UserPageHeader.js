import StarIcon from '@mui/icons-material/Star';
export default function UserPageHeader() {
  return (
    <Header>
      <User>
        <img src="#" alt="user" />
        <UserName>
          <Name></Name>
          <Rating>
            <StarIcon sx={{ color: '#FFBC10' }} />
            <RatingText>Рейтинг:{}</RatingText>
          </Rating>
        </UserName>
      </User>
      <Balance>Баланс:1000 грн</Balance>
    </Header>
  );
}
