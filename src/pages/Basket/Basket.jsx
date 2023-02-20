import Navbar from "../../components/Navbar/Navbar";
import BasketItem from "../../components/BasketItem/BasketItem";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { basketActions } from "../../redux/features/basketSlice";
import { RiErrorWarningFill } from "react-icons/ri";

const Section = styled.section`
  background: #fff;
  max-width: 100%;
  margin-top: 20px;
  padding: 20px;
  border-radius: 12px;
  transition: 0.5s;
  position: relative;
`;

const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ClearButton = styled.button`
  background: transparent;
  color: red;
  width: 120px;
  border: 2px solid red;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    background: red;
    color: #fff;
  }
`;

const Total = styled.p`
  margin-top: 10px;
  font-size: 1.4rem;
  text-align: right;
`;

const WarningContainer = styled.div`
  background: #feebc8;
  width: 100%;
  display: flex;
  padding: 15px;
`;

const WarningText = styled.p`
  font-size: 1.4rem;

  @media (max-width: 379px) {
    font-size: 5.5vw;
  }
`;

const WarningIcon = styled(RiErrorWarningFill)`
  color: #dd6b20;
  margin-right: 10px;
`;

function Basket() {
  const dispatch = useDispatch();

  const handleClearItems = (id) => {
    dispatch(basketActions.clearBasket(id));
  };

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
      {basketProducts.length > 0 ? (
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
          <TotalAmount>
            <ClearButton onClick={handleClearItems}>Clear All</ClearButton>
            <Total>Total Amount:&nbsp; {total} &#8378;</Total>
          </TotalAmount>
        </Section>
      ) : (
        <WarningContainer className="warning">
          <WarningText>
            <WarningIcon />
            There is nothing in your basket!
          </WarningText>
        </WarningContainer>
      )}
    </>
  );
}

export default Basket;
