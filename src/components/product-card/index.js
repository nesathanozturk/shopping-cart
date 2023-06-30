import {
  ProductItem,
  CardImg,
  CardContent,
  CardTitle,
  CardPrice,
  CardButton,
} from "./styles";
import { useDispatch } from "react-redux";
import { basketActions } from "../../store/slices/basketSlice";

function ProductCard({ id, image, title, price }) {
  const dispatch = useDispatch();

  const addToBasket = () => {
    dispatch(basketActions.addToBasket({ id, image, title, price }));
  };

  return (
    <>
      <div>
        <ProductItem key={id}>
          <div>
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
          </div>
        </ProductItem>
      </div>
    </>
  );
}

export default ProductCard;
