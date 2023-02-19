import Navbar from "../../components/Navbar/Navbar";
import BasketItem from "../../components/BasketItem/BasketItem";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Section = styled.section`
  background: #fff;
  max-width: 100%;
  padding: 20px;
  border: 1px solid #e6e6e6;
  border-radius: 12px;
  transition: 0.5s;
`;

function Basket() {
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
      <Section>
        {basketProducts.map((product) => (
          <BasketItem
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            amount={product.amount}
            totalPrice={product.totalPrice}
          />
        ))}
      </Section>
      {total}
      {amount}
      <Footer />
    </>
  );
}

export default Basket;
