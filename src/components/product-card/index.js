import { useDispatch } from "react-redux";

import { basketActions } from "../../store/slices/basketSlice";

import {
  ProductItem,
  CardImg,
  CardContent,
  CardTitle,
  CardPrice,
  CardButton,
} from "./styles";

function ProductCard({ product }) {
  const { id, image, title, price } = product;

  const dispatch = useDispatch();

  const addToBasket = () => {
    dispatch(basketActions.addToBasket({ id, image, title, price }));
  };

  return (
    <>
      <ProductItem>
        <CardImg src={image} alt={title} />
        <CardContent>
          <CardTitle>{title}</CardTitle>
        </CardContent>
        <CardContent>
          <CardPrice>&#x24;{price}</CardPrice>
        </CardContent>
        <CardContent>
          <CardButton onClick={addToBasket}>Add to Basket</CardButton>
        </CardContent>
      </ProductItem>
    </>
  );
}

export default ProductCard;
