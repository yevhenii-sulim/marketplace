import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { toggleModalView } from '../../redux/modalViewProduct/slice';
import { selectMyUser } from '../../redux/auth/selector';
import Slider from './Slider';
import {
  AboutPrice,
  AboutProduct,
  addProductButton,
  Advertisement,
  Backdrop,
  Buttons,
  Description,
  IconWrapper,
  Name,
  Options,
  PriceSection,
  PriceWithDiscount,
  PriceWithoutDiscount,
  ProductDescription,
  Rating,
  SellerSection,
  Title,
  User,
  UserName,
  viewProductButton,
  WrapperModal,
  Errors,
  TitleDescription,
  ButtonsContacts,
  ButtonsBuy,
} from './ViewAhead.styled';
import useWindowDimensions from 'hooks/useWindowDimensions';

export default function ViewAheadComponent({ onSubmit, values, errors }) {
  const dispatch = useDispatch();
  const user = useSelector(selectMyUser);
  const { width } = useWindowDimensions();
  const {
    firstName,
    lastName,
    rating: { count },
  } = user;
  function closeViewAddedProduct() {
    dispatch(toggleModalView(false));
  }

  function oncloseByClickOutside(evt) {
    if (evt.currentTarget !== evt.target) return;
    closeViewAddedProduct();
  }

  const formatDate = () => {
    const date = new Date();

    const newFormatDate = new Intl.DateTimeFormat('uk-UA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);

    return newFormatDate;
  };

  return (
    <Backdrop onMouseDown={oncloseByClickOutside}>
      <WrapperModal>
        <header>
          <h1>Попередній перегляд оголошення</h1>
          <Buttons>
            <Button
              type="button"
              sx={viewProductButton}
              onClick={closeViewAddedProduct}
            >
              Редагувати
            </Button>
            <Button onClick={onSubmit} sx={addProductButton}>
              Опублікувати
            </Button>
          </Buttons>
        </header>
        <Advertisement>
          <AboutProduct>
            <Slider values={values} />
            <Description>
              {width >= 1440 && <TitleDescription>Опис</TitleDescription>}
              {width < 1440 && (
                <Title>
                  {values.title}
                  <div>
                    {values.discount ? (
                      <PriceWithDiscount>
                        <p className="first-price">{values.price} &#8372;</p>
                        <p className="discount">
                          {values.discountPrice} &#8372;
                        </p>
                      </PriceWithDiscount>
                    ) : (
                      <PriceWithoutDiscount>
                        <p>{values.price} &#8372;</p>
                      </PriceWithoutDiscount>
                    )}
                  </div>
                </Title>
              )}
              <Options>
                <p>
                  Стан:&nbsp;
                  <span>{values.state}</span>
                </p>
                {values.size.length !== 0 && (
                  <p>
                    Розмір:&nbsp;
                    {values.size.map(item => (
                      <span key={item}>{item}, </span>
                    ))}
                  </p>
                )}
                {values.brand && (
                  <p>
                    Бренд:&nbsp;
                    <span>{values.brand}</span>
                  </p>
                )}
                <p>
                  Колір:&nbsp;
                  {values.color.map(item => (
                    <span key={item}>{item}, </span>
                  ))}
                </p>
              </Options>
              <ButtonsContacts>
                <Button type="button" sx={viewProductButton}>
                  Додати до кошика
                </Button>
                <Button sx={addProductButton}>Зв’язатися з продавцем</Button>
              </ButtonsContacts>
              {width < 1440 && <TitleDescription>Опис</TitleDescription>}
              <ProductDescription>{values.describe}</ProductDescription>
            </Description>
          </AboutProduct>
          <AboutPrice>
            <PriceSection>
              <Title>
                {values.title}
                <IconWrapper>
                  <FavoriteBorderIcon />
                </IconWrapper>
              </Title>
              <div>
                {values.discount ? (
                  <PriceWithDiscount>
                    <p className="first-price">{values.price} &#8372;</p>
                    <p className="discount">{values.discountPrice} &#8372;</p>
                  </PriceWithDiscount>
                ) : (
                  <PriceWithoutDiscount>
                    <p>{values.price} &#8372;</p>
                  </PriceWithoutDiscount>
                )}
              </div>
              <ButtonsBuy>
                <Button sx={addProductButton}>Додати до кошика</Button>
                <Button sx={viewProductButton}>Зв’язатися з продавцем</Button>
                <Button type="button" sx={viewProductButton}>
                  Показати телефон
                </Button>
              </ButtonsBuy>
              <p className="time-added">Опубліковано {formatDate()}</p>
            </PriceSection>
            <SellerSection>
              <h3>Продавець</h3>
              <User>
                <img
                  src={'/marketplace/images/catalog/for-free.png'}
                  alt="user"
                />
                <UserName>
                  <Name>
                    {firstName} {lastName}
                  </Name>
                  <Rating>
                    <StarIcon sx={{ color: '#FFBC10' }} />
                    <p className="rating">Рейтинг: {count}</p>
                  </Rating>
                </UserName>
              </User>
              <p className="more-products">
                Більше оголошень автора &nbsp; &nbsp;
                <ArrowForwardIosIcon />
              </p>
            </SellerSection>
            <Errors>
              {Object.values(errors).map((item, index) => (
                <li key={index}>&#x2139; {item}</li>
              ))}
            </Errors>
          </AboutPrice>
        </Advertisement>
      </WrapperModal>
    </Backdrop>
  );
}
