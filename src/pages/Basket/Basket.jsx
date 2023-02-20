import Navbar from "../../components/Navbar/Navbar";
import BasketItem from "../../components/BasketItem/BasketItem";
import { useSelector, useDispatch } from "react-redux";
import { basketActions } from "../../redux/features/basketSlice";
import {
  Section,
  TotalAmount,
  ClearButton,
  Total,
  WarningContainer,
  WarningText,
  WarningIcon,
} from "./styles";

function Basket() {
  const dispatch = useDispatch();

  const handleClearItems = (id) => {
    dispatch(basketActions.clearBasket(id));
  };

  const basketProducts = useSelector((state) => state.basket.basketItems);
  const amount = useSelector((state) => state.basket.totalAmount);

  let total = 0;
  const Items = useSelector((state) => state.basket.basketItems);
  Items.forEach((product) => {
    total += product.totalPrice;
  });

  return (
    <>
      <Navbar />
      {basketProducts.length > 0 ? (
        <Section>
          {basketProducts.map((product) => (
            <BasketItem
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              amount={product.amount}
              totalPrice={product.totalPrice}
            />
          ))}
          <TotalAmount>
            <ClearButton onClick={handleClearItems}>Clear All</ClearButton>
            <Total>Total Amount:&nbsp; {total} &#8378;</Total>
          </TotalAmount>
        </Section>
      ) : (
        <WarningContainer className="warning">
          <WarningText>
            <WarningIcon />
            There is nothing in your basket!
          </WarningText>
        </WarningContainer>
      )}
    </>
  );
}

export default Basket;
