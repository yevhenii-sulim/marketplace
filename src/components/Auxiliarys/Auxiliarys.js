import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import Message from 'SvgComponents/MessageSVG/Message';
import { AuxiliarysContainer, NavLink } from './Auxiliarys.styled';
import Heart from 'SvgComponents/HeartSVG/Heart';
import User from 'SvgComponents/UserSVG/User';

export default function Auxiliarys() {
  return (
    <AuxiliarysContainer>
      <NavLink to="/">
        <ChatBubbleOutlineIcon />
      </NavLink>
      <NavLink to="/">
        <Heart />
      </NavLink>
      <NavLink to="/">
        <User />
      </NavLink>
    </AuxiliarysContainer>
  );
}
