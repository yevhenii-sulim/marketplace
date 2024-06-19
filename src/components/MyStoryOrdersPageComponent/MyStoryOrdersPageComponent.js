import { useSelector } from 'react-redux';
import { myProduct } from 'myProduct.json';

export default function MyStoryOrdersPageComponent() {
  const user = useSelector(selectMyUser);
  console.log('user', user);
  console.log('myProduct', myProduct);
  return (
    <ContainerOrders onSubmit={onSubmit}>
      {basket.length === 0 ? (
        <Empty>
          <ShoppingCart />
          <p>Зробіть ваше переше замовлення</p>
          <Link to="/">Перейти до товарів</Link>
        </Empty>
      ) : (
        <WrapperOrder>
          <ul>
            {basket.map(
              ({ id, title, price, img, discount, discountPrice, count }) => {
                total += discount ? discountPrice * count : price * count;
                totalPrice += price * count;
                totalDiscount += discount && (price - discountPrice) * count;
                totalCount += count;
                return (
                  <List key={id}>
                    <input
                      type="text"
                      name={title}
                      className="hidden"
                      defaultValue={`Кількість: ${count}шт; ціна за ${count}шт: ${
                        price * count
                      }грн; ціна за 1шт. без знижки: ${price}грн; ціна за 1шт. зі знижкою: ${
                        discount ? discountPrice + 'грн' : 'без знижки'
                      }; знижка за 1шт: ${
                        discount ? price - discountPrice : 0
                      }грн; загальна знижка: ${
                        discount ? (price - discountPrice) * count : 0
                      }грн`}
                    />
                    <WrapperProduct>
                      <Image>
                        <img height="114" src={img} alt={title} />
                      </Image>
                      <About>
                        <Title>{title}</Title>
                        <Count>
                          <button
                            className="count"
                            type="button"
                            onClick={() =>
                              removeCount({ id, increment: -1 }, count)
                            }
                          >
                            &#8722;
                          </button>
                          <span>{count}</span>
                          <button
                            className="count"
                            type="button"
                            onClick={() => addCount({ id, increment: 1 })}
                          >
                            &#43;
                          </button>
                        </Count>
                      </About>
                      <Actives>
                        <Price>
                          {discount ? (
                            <>
                              <p className="price-discount">{price} &#8372;</p>
                              <p className="discount">
                                {discountPrice} &#8372;
                              </p>
                            </>
                          ) : (
                            <p className="price">{price} &#8372;</p>
                          )}
                        </Price>
                        <DeleteAdd>
                          <button
                            type="button"
                            className="favorite"
                            onClick={() => deleteFromBasket(id)}
                          >
                            <FavoriteBorderIcon />
                          </button>
                          <button
                            type="button"
                            className="delete"
                            onClick={() => deleteFromBasket(id)}
                          >
                            <DeleteOutlineIcon />
                          </button>
                        </DeleteAdd>
                      </Actives>
                    </WrapperProduct>
                  </List>
                );
              }
            )}
          </ul>
          <WrapperBuy>
            <input
              type="text"
              name="$Загально"
              className="hidden"
              defaultValue={`До сплати: ${total}грн; сума без знижки: ${totalPrice}грн; знижка: ${
                totalDiscount ? totalDiscount + 'грн' : 'без знижки'
              };`}
            />
            <TotalPrice>
              <Sum>
                <span className="info">{totalCount} товар на суму</span>
                <span className="info-price">{totalPrice} &#8372;</span>
              </Sum>
              <Discount>
                <span className="info">Знижка</span>
                <span className="info-price info-price_discount">
                  {totalDiscount}
                  &#8372;
                </span>
              </Discount>

              <Total>
                <span>Загальна сума</span>
                <span>
                  {total}
                  &#8372;
                </span>
              </Total>
              <WrapperButton>
                <Button type="submit" sx={addProductButton}>
                  Оформити замовлення
                </Button>
              </WrapperButton>
            </TotalPrice>
          </WrapperBuy>
        </WrapperOrder>
      )}
    </ContainerOrders>
  );
}
