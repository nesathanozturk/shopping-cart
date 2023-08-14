import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";

import { basketActions } from "../../store/slices/basketSlice";

import {
  BasketCard,
  Details,
  Image,
  Title,
  Price,
  Buttons,
  Button,
  Amount,
  Remove,
} from "./styles";

function BasketItemCard({ id, image, title, price, amount, totalPrice }) {
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch(basketActions.addToBasket({ id, image, title, price }));
  };

  const handleDecreaseAmount = () => {
    dispatch(basketActions.decreaseAmount(id));
  };

  const handleRemoveItem = () => {
    dispatch(basketActions.removeItemFromBasket(id));
  };

  return (
    <>
      <BasketCard>
        <div>
          <Image src={image} alt={title} />
        </div>
        <Details>
          <Title>{title}</Title>
          <Price>&#x24;{price}</Price>
          <Buttons>
            <Button onClick={handleAddToBasket}>
              <AiOutlinePlus />
            </Button>
            <Amount>{amount}</Amount>
            <Button onClick={handleDecreaseAmount}>
              <AiOutlineMinus />
            </Button>
          </Buttons>
        </Details>
        <button onClick={handleRemoveItem}>
          <Remove />
        </button>
      </BasketCard>
    </>
  );
}

export default BasketItemCard;
