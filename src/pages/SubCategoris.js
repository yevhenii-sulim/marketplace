import SubcategorisComponent from 'components/SubcategorisComponent/SubcategorisComponent';
import { useSelector } from 'react-redux';
import { selectCategory } from '../redux/category/selectors';
import { navigationList } from 'data/navListData';

export default function SubCategoris() {
  const category = useSelector(selectCategory);
  const categoryObject = navigationList.filter(
    item => item.nameList === category
  );

  return (
    <>
      <SubcategorisComponent
        subCategory={categoryObject[0].subCategoris}
        path={categoryObject.linkList}
      />
    </>
  );
}
