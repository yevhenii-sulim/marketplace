import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { List, Sign } from './UserPageComponent.styled';
import { NavLink } from 'react-router-dom';

export default function SidebarListComponent({
  children,
  nameList,
  path,
  onClick,
}) {
  return (
    <List onClick={onClick}>
      <NavLink to={path} state={nameList}>
        <Sign>
          {children}
          <span>{nameList}</span>
        </Sign>
        <ArrowForwardIosIcon />
      </NavLink>
    </List>
  );
}
