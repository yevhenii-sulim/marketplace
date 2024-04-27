import { Link, List } from './Category.styled';

export default function CategoryHomePage({
  nameCategory,
  tytleCategory,
  srcCategory,
  link,
  subCategoris,
}) {
  return (
    <List>
      <Link to={link} state={subCategoris}>
        <img src={srcCategory} alt={nameCategory} />
        <p>{tytleCategory}</p>
      </Link>
    </List>
  );
}
