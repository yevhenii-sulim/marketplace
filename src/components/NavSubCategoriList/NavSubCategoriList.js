import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List } from './NavSubCategoriList.styled';
import { toggleModal } from '../../redux/slice';

export default function NavSubCategoriList({ subcategory, category }) {
  const dispatch = useDispatch();

  function onClose() {
    dispatch(toggleModal(false));
  }

  return (
    <>
      {subcategory.map(({ id, link, nameList, img }) => {
        return (
          <List key={id}>
            <Link to={`${category}/${link}`} onClick={onClose} state={nameList}>
              <img src={img} alt={nameList} />
              <p>{nameList}</p>
            </Link>
          </List>
        );
      })}
    </>
  );
}
NavSubCategoriList.propTypes = {
  subcategory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      linkList: PropTypes.string,
      nameList: PropTypes.string,
    })
  ),
  category: PropTypes.string,
};
