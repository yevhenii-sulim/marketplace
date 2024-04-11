import Message from 'SvgComponents/MessageSVG/Message';
import { AuxiliarysContainer, NavLink } from './Auxiliarys.styled';
import Heart from 'SvgComponents/HeartSVG/Heart';
import User from 'SvgComponents/UserSVG/User';

export default function Auxiliarys() {
  return (
    <AuxiliarysContainer>
      <NavLink to="/">
        <Message />
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
