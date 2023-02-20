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
} from "./styles.jsx";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { basketActions } from "../../redux/features/basketSlice";

function BasketItem({ id, image, title, price, amount, totalPrice }) {
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch(basketActions.addToBasket({ id, image, title, price }));
  };

  const handleRemoveFromBasket = () => {
    dispatch(basketActions.removeFromBasket(id));
  };

  const handleRemoveItem = () => {
    dispatch(basketActions.removeItem(id));
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
            <Button onClick={handleRemoveFromBasket}>
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

export default BasketItem;
