import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import { AuxiliarysContainer, NavLink } from './Auxiliarys.styled';

export default function Auxiliarys() {
  return (
    <AuxiliarysContainer>
      <NavLink to="/">
        <ChatBubbleOutlineIcon />
      </NavLink>
      <NavLink to="/">
        <FavoriteBorderIcon />
      </NavLink>
      <NavLink to="/">
        <PersonIcon />
      </NavLink>
    </AuxiliarysContainer>
  );
}
