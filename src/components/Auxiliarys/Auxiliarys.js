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
      <NavLink to="/auto-moto">
        <Heart />
      </NavLink>
      <NavLink to="/electronics">
        <User />
      </NavLink>
    </AuxiliarysContainer>
  );
}
