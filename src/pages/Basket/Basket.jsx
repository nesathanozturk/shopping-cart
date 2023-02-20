import Navbar from "../../components/Navbar/Navbar";
import BasketItem from "../../components/BasketItem/BasketItem";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Section = styled.section`
  background: #fff;
  max-width: 100%;
  margin-top: 20px;
  padding: 20px;
  border-radius: 12px;
  transition: 0.5s;
`;

const Total = styled.p`
  margin-top: 10px;
  font-size: 1.4rem;
  text-align: right;
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
        <div>
          <Total>Total Amount:&nbsp; {total} &#8378;</Total>
        </div>
      </Section>
    </>
  );
}

export default Basket;
