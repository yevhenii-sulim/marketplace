import { Link, List } from './Category.styled';
import { changeCategory } from '../../redux/category/slice';
import { useDispatch } from 'react-redux';
export default function CategoryHomePage({
  nameCategory,
  tytleCategory,
  srcCategory,
  link,
}) {
  const dispatch = useDispatch();
  return (
    <List onClick={() => dispatch(changeCategory(nameCategory))}>
      <Link to={link}>
        <img src={srcCategory} alt={nameCategory} />
        <p>{tytleCategory}</p>
      </Link>
    </List>
  );
}
