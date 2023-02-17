import { Section, Wrapper, Order, Num, Title, Description } from "./styles.jsx";

function Orders() {
  return (
    <Section>
      <Wrapper>
        <Order>
          <Num>1</Num>
          <div>
            <Title>Your Order</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              quod.
            </Description>
          </div>
        </Order>
        <Order>
          <Num>2</Num>
          <div>
            <Title>Ready Your Order</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              quod.
            </Description>
          </div>
        </Order>
        <Order>
          <Num>3</Num>
          <div>
            <Title>Packing Your Order</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              quod.
            </Description>
          </div>
        </Order>
        <Order>
          <Num>4</Num>
          <div>
            <Title>And Delivered</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              quod.
            </Description>
          </div>
        </Order>
      </Wrapper>
    </Section>
  );
}

export default Orders;
