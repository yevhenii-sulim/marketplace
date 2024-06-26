import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List } from './NavSubCategoryList.styled';
import { toggleModal } from '../../redux/modalCatalog/slice';
import { selectCategory } from '../../redux/category/selectors';
import { changeCategory } from '../../redux/category/slice';

export default function NavSubCategoryList({ subcategory, category }) {
  const dispatch = useDispatch();
  const categoryProduct = useSelector(selectCategory);

  function onClose(link, nameList) {
    dispatch(toggleModal(false));
    dispatch(
      changeCategory({
        ...categoryProduct,
        subCategory: { en: link, ua: nameList },
      })
    );
  }

  return (
    <>
      {subcategory.map(({ id, link, nameList, img }) => {
        return (
          <List key={id}>
            <Link
              to={`${category}/${link}`}
              onClick={() => onClose(link, nameList)}
            >
              <img src={img} alt={nameList} />
              <p>{nameList}</p>
            </Link>
          </List>
        );
      })}
    </>
  );
}
NavSubCategoryList.propTypes = {
  subcategory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      linkList: PropTypes.string,
      nameList: PropTypes.string,
    })
  ),
  category: PropTypes.string,
};
