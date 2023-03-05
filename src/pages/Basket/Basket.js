import BasketCard from "../../components/BasketCard/BasketCard";

function Basket({ basketItems, setBasketItems }) {
  return (
    <>
      <BasketCard basketItems={basketItems} setBasketItems={setBasketItems} />
    </>
  );
}

export default Basket;
