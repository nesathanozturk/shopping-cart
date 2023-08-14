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

function BasketItemCard({ basketProducts }) {
  const dispatch = useDispatch();

  const renderedBasketProducts = basketProducts.map((product) => {
    const handleAddToBasket = () => {
      dispatch(basketActions.addToBasket(product));
    };

    const handleDecreaseAmount = () => {
      dispatch(basketActions.decreaseAmount(product.id));
    };

    const handleRemoveItem = () => {
      dispatch(basketActions.removeItemFromBasket(product.id));
    };

    return (
      <BasketCard key={product.id}>
        <div>
          <Image src={product.image} alt={product.title} />
        </div>
        <Details>
          <Title>{product.title}</Title>
          <Price>&#x24;{product.price}</Price>
          <Buttons>
            <Button onClick={handleAddToBasket}>
              <AiOutlinePlus />
            </Button>
            <Amount>{product.amount}</Amount>
            <Button onClick={handleDecreaseAmount}>
              <AiOutlineMinus />
            </Button>
          </Buttons>
        </Details>
        <button onClick={handleRemoveItem}>
          <Remove />
        </button>
      </BasketCard>
    );
  });

  return renderedBasketProducts;
}

export default BasketItemCard;
