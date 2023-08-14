import { useSelector, useDispatch } from "react-redux";

import BasketItemCard from "../../components/basket-item-card";
import Navbar from "../../components/navbar";
import WarningText from "../../components/warning-text";

import { basketActions } from "../../store/slices/basketSlice";

import { Section, TotalAmount, ClearButton, Total } from "./styles";

function Basket() {
  const dispatch = useDispatch();

  const basketProducts = useSelector((state) => state.basket.basketItems);

  const handleClearItems = (id) => {
    dispatch(basketActions.clearBasket(id));
  };

  let total = 0;
  basketProducts.forEach((product) => {
    total += product.totalPrice;
  });

  return (
    <>
      <Navbar />
      {basketProducts.length > 0 ? (
        <Section>
          <BasketItemCard basketProducts={basketProducts} />
          <TotalAmount>
            <ClearButton onClick={handleClearItems}>Clear All</ClearButton>
            <Total>Total Amount:&nbsp; {total} &#8378;</Total>
          </TotalAmount>
        </Section>
      ) : (
        <WarningText />
      )}
    </>
  );
}

export default Basket;
