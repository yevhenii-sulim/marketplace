import { useSelector } from 'react-redux';
import { selectCategory } from '../redux/category/selectors';
import { navigationList } from 'data/navListData';
import SubcategoriesComponent from 'components/SubcategoriesComponent/SubcategoriesComponent';

export default function SubCategories() {
  const category = useSelector(selectCategory);
  const categoryObject = navigationList.filter(
    item => item.nameList === category.category.ua
  );

  return (
    <SubcategoriesComponent
      subCategory={categoryObject[0]?.subCategories}
      path={categoryObject.linkList}
    />
  );
}
