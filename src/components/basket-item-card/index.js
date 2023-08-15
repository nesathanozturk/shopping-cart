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
      <BasketCard data-testid="basket-card" key={product.id}>
        <div>
          <Image src={product.image} alt={product.title} />
        </div>
        <Details>
          <Title>{product.title}</Title>
          <Price>&#x24;{product.price}</Price>
          <Buttons>
            <Button data-testid="increase-button" onClick={handleAddToBasket}>
              <AiOutlinePlus />
            </Button>
            <Amount data-testid="amount">{product.amount}</Amount>
            <Button
              data-testid="decrease-button"
              onClick={handleDecreaseAmount}
            >
              <AiOutlineMinus />
            </Button>
          </Buttons>
        </Details>
        <button data-testid="remove-button" onClick={handleRemoveItem}>
          <Remove />
        </button>
      </BasketCard>
    );
  });

  return renderedBasketProducts;
}

export default BasketItemCard;
