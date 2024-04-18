import { useDispatch } from 'react-redux';
import { List } from './NavListProducts.styled';
import { toggleModal } from '../../redux/slice';
import { Link } from 'react-router-dom';

const product = [
  { id: '1', link: '/phone', name: 'Телефони' },
  { id: '2', link: '/laptop', name: 'Ноутбуки' },
  { id: '3', link: '/headphone', name: 'Навушники' },
];

export default function NavListElectronics() {
  const dispatch = useDispatch();
  function onClose() {
    dispatch(toggleModal(false));
  }
  return (
    <>
      {product.map(({ id, link, name }) => {
        return (
          <List key={id}>
            <Link to={`home_page/${link}`} onClick={onClose}>
              <img src="#" alt={name} />
              <p>{name}</p>
            </Link>
          </List>
        );
      })}
    </>
  );
}
