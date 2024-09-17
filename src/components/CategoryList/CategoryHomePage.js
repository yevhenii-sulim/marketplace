import { Link, List, NameCategory } from './Category.styled';
import { changeCategory } from '../../redux/category/slice';
import { useDispatch } from 'react-redux';
export default function CategoryHomePage({
  nameCategory,
  titleCategory,
  srcCategory,
  link,
}) {
  const nameLink =
    link === 'all' || link === 'forFree' ? `/${link}` : `${link}`;

  const dispatch = useDispatch();
  return (
    <List onClick={() => dispatch(changeCategory(nameCategory))}>
      <Link to={nameLink}>
        <img src={srcCategory} alt={nameCategory.category.ua} />
        <NameCategory>{titleCategory}</NameCategory>
      </Link>
    </List>
  );
}
