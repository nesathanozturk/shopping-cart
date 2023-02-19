import { products } from "../../assets/data";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {
  Section,
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

function Basket() {
  return (
    <Section>
      <BasketCard>
        <div>
          <Image src={products[0].image} alt="wer" />
        </div>
        <Details>
          <Title>{products[0].title}</Title>
          <Price>&#x24;{products[0].price}</Price>
          <Buttons>
            <Button>
              <AiOutlinePlus />
            </Button>
            <Amount>{products[0].amount}</Amount>
            <Button>
              <AiOutlineMinus />
            </Button>
          </Buttons>
        </Details>
        <button>
          <Remove />
        </button>
      </BasketCard>
    </Section>
  );
}

export default Basket;
