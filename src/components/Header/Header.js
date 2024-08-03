import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddAnnouncement from 'components/AddAnnouncement/AddAnnouncement';
import Logo from 'SvgComponents/LogoSVG/Logo';
import Search from 'components/Search/Search';
import OpenCategory from 'components/OpenCategory/OpenCategory';
import Auxiliary from 'components/Auxiliary/Auxiliary';
import { prevSearchProduct } from '../../redux/product/thunk';
// import useWindowDimensions from 'hooks/useWindowDimensions';
import {
  selectIsLoadingSearching,
  selectPrevProductSearch,
} from '../../redux/product/selector';
import {
  Container,
  HeaderContainer,
  NavContainer,
  PrevShowSearchedProduct,
} from './Header.styled';

export default function Header() {
  const searchedProduct = useSelector(selectPrevProductSearch);
  const selectIsLoaded = useSelector(selectIsLoadingSearching);
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [wasClick, setWasClick] = useState(true);
  const dispatch = useDispatch();

  // const { width } = useWindowDimensions();

  function handleClick(evt) {
    setValue(evt.target.innerText);
    setIsOpen(false);
    setWasClick(false);
  }

  function handleChange(e) {
    setValue(e.target.value);
    setWasClick(true);
    if (e.target.value) {
      dispatch(prevSearchProduct(e.target.value));
    }
  }
  useEffect(() => {
    if (value && wasClick) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [value, wasClick]);
  return (
    <HeaderContainer>
      <Container>
        <NavContainer>
          <Logo fill="#ffffff" />
          <OpenCategory />
        </NavContainer>
        <Search handleChange={handleChange} value={value} setValue={setValue} />
        <Auxiliary />
        <AddAnnouncement />
      </Container>
      {searchedProduct && isOpen && (
        <PrevShowSearchedProduct>
          {selectIsLoaded &&
            searchedProduct.map(({ _id, title }) => (
              <li key={_id} onClick={handleClick}>
                {title}
              </li>
            ))}
        </PrevShowSearchedProduct>
      )}
    </HeaderContainer>
  );
}
